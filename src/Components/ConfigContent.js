import React from 'react';
import {
  FlatList,
  Image,
  Linking,
  StyleSheet,
  Text,
  ToastAndroid,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import entityMap from '../../entity-map';
import ElevatedButton from './ElevatedButton';
import { useAppContext } from '../Contexts/AppContext';

const ConfigContent = ({ handleBackToChat }) => {
  const [selectedEntity, setSelectedEntity] = React.useState({});
  const [hoverEntity, setHoverEntity] = React.useState(null);
  const [isSelectionDisabled, setIsSelectionDisabled] = React.useState(false);
  const { appGlobalData, setAppGlobalData, setShouldResetContext } =
    useAppContext();

  const showEntityAlert = (name) => {
    ToastAndroid.show(
      `Personagem ${name} selecionado com sucesso.`,
      ToastAndroid.LONG
    );
  };

  const showResetContextAlert = () => {
    ToastAndroid.show(`Contexto reiniciado.`, ToastAndroid.LONG);
  };

  React.useEffect(() => {
    setSelectedEntity(appGlobalData);
  }, []);

  const handleResetContext = () => {
    if (appGlobalData) {
      setShouldResetContext(true);
      showResetContextAlert();
      handleBackToChat();
    }
  };

  const handleOpenURL = async () => {
    await Linking.openURL('https://github.com/MatthMiller');
  };

  const EntityListItem = ({ item, index }) => {
    const handleSelectEntity = () => {
      setSelectedEntity(item);

      // A terceira condição é nova
      if (appGlobalData && selectedEntity && item.id !== appGlobalData.id) {
        setAppGlobalData(item);
        showEntityAlert(item.name);
      }
    };

    const handleTooMuchTouchs = () => {
      // Impede seleções rápidas
      if (isSelectionDisabled) {
        return;
      }
      setIsSelectionDisabled(true);
      handleSelectEntity();

      setTimeout(() => {
        setIsSelectionDisabled(false);
      }, 1000);
    };

    return (
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => handleTooMuchTouchs()}
        key={index}
        onPressIn={() => setHoverEntity(item.id)}
        onPressOut={() => setHoverEntity(null)}
        style={[
          hoverEntity === item.id
            ? [
                entitiesStyles.listItemContainer,
                entitiesStyles.listItemContainerHover,
              ]
            : entitiesStyles.listItemContainer,
          index === 0 ? entitiesStyles.listItemContainerFirst : null,
          index === entityMap.length - 1
            ? entitiesStyles.listItemContainerLast
            : null,
        ]}
      >
        <View style={entitiesStyles.listItemLeft}>
          <Image style={entitiesStyles.listItemHead} source={item.head} />
          <Text style={entitiesStyles.listItemName}>{item.name}</Text>
        </View>
        <View style={entitiesStyles.listItemRadio}>
          {selectedEntity.id === item.id ? (
            <ElevatedButton height={16} width={16}></ElevatedButton>
          ) : null}
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.geralWrapper}>
      <View style={styles.geralContainer}>
        <View>
          <Text style={styles.chooseEntityTitle}>Escolha seu personagem</Text>

          <View style={entitiesStyles.wrapper}>
            <View style={entitiesStyles.leftLine}>
              <View style={entitiesStyles.leftLineUp}></View>
              <View style={entitiesStyles.leftLinePixel}></View>
            </View>
            <View style={entitiesStyles.middle}>
              <View style={entitiesStyles.middleLineUp}></View>
              <View style={entitiesStyles.middleContent}>
                {selectedEntity ? (
                  <FlatList data={entityMap} renderItem={EntityListItem} />
                ) : null}
              </View>
              <View style={entitiesStyles.middleLineDown}></View>
            </View>
            <View style={entitiesStyles.rightLine}>
              <View style={entitiesStyles.rightLinePixel}></View>
              <View style={entitiesStyles.rightLineDown}></View>
            </View>
          </View>

          <ElevatedButton
            onPressHandler={handleResetContext}
            borderWidth={3}
            height={58}
          >
            <Text style={styles.buttonText}>Reiniciar contexto</Text>
          </ElevatedButton>
        </View>

        <View style={styles.creditsContainer}>
          <View style={styles.textWithHeart}>
            <Text style={styles.creditsText}>Feito com</Text>
            <Image
              style={styles.creditsIcon}
              source={require('../../assets/icons/grey-heart.png')}
            />
          </View>
          <TouchableWithoutFeedback
            onPress={() => handleOpenURL('https://github.com/MatthMiller')}
          >
            <Text style={styles.creditsText}>github.com/MatthMiller</Text>
          </TouchableWithoutFeedback>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  geralWrapper: {
    flex: 1,
    backgroundColor: '#585659',
    paddingHorizontal: 8,
  },
  geralContainer: {
    backgroundColor: '#313233',
    flex: 1,
    marginVertical: 8,
    paddingVertical: 18,
    paddingHorizontal: 10,

    justifyContent: 'space-between',
    borderWidth: 2,
    borderColor: '#060606',
  },
  chooseEntityTitle: {
    marginBottom: 12,
    fontSize: 16,
    lineHeight: 16,
    color: '#F5F5F5',
    fontFamily: 'Monocraft',
  },
  buttonText: {
    fontFamily: 'Monocraft',
    color: '#4C4C4C',
    textAlign: 'center',
    fontSize: 16,
    lineHeight: 16,
  },
  creditsContainer: {
    marginTop: 32,
    gap: 8,
  },
  textWithHeart: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  creditsIcon: {
    height: 24,
    width: 24,
  },
  creditsText: {
    fontSize: 16,
    lineHeight: 16,
    color: '#D8D8D8',
    fontFamily: 'Monocraft',
  },
});

const entitiesStyles = StyleSheet.create({
  wrapper: {
    borderWidth: 3,
    borderColor: '#060606',
    backgroundColor: '#757575',
    flexDirection: 'row',

    marginBottom: 24,
    height: 280,
  },
  leftLine: {
    width: 2,
  },
  leftLineUp: {
    flex: 1,
    backgroundColor: '#4A484B',
  },
  leftLinePixel: {
    height: 2,
    backgroundColor: '#8F8B91',
  },
  middle: {
    flex: 1,
  },
  middleLineUp: {
    height: 2,
    backgroundColor: '#4A484B',
  },
  middleContent: {
    flex: 1,
    backgroundColor: '#757575',
  },
  middleLineDown: {
    backgroundColor: '#F7F7F7',
    height: 2,
  },
  rightLine: {
    width: 2,
  },
  rightLinePixel: {
    height: 2,
    backgroundColor: '#8F8B91',
  },
  rightLineDown: {
    backgroundColor: '#F7F7F7',
    flex: 1,
  },
  listItemContainer: {
    paddingHorizontal: 9,
    paddingVertical: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  listItemContainerHover: {
    backgroundColor: '#4A484B',
  },
  listItemContainerFirst: {
    marginTop: 8,
  },
  listItemContainerLast: {
    marginBottom: 8,
  },
  listItemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  listItemName: {
    fontFamily: 'Monocraft',
    color: '#F5F5F5',
    fontSize: 16,
    lineHeight: 16,
  },
  listItemHead: {
    height: 24,
    width: 24,
  },
  listItemRadio: {
    width: 24,
    height: 24,
    backgroundColor: '#434343',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#131313',
  },
});

export default ConfigContent;
