import React from 'react';
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import menuButtonPressedImage from '../../assets/buttons/menu-button-pressed.png';
import menuButtonImage from '../../assets/buttons/menu-button.png';
import { useAppContext } from '../Contexts/AppContext';
import ElevatedButton from './ElevatedButton';

const ChatHeader = ({ navigation }) => {
  const [isButtonPressIn, setIsButtonPressIn] = React.useState(false);
  const { appGlobalData, setAppGlobalData } = useAppContext();

  const handleOpenModal = () => {
    navigation.navigate('Config');
  };

  // React.useEffect(() => {
  //   if (appGlobalData) {
  //     console.log(appGlobalData);
  //   }
  // }, [appGlobalData]);

  return (
    <ImageBackground
      source={
        appGlobalData
          ? appGlobalData.topTile
          : require('../../assets/blocks/block_placeholder.png')
      }
      style={styles.header}
      imageStyle={styles.backgroundImage}
    >
      <View style={styles.entityContainer}>
        <ImageBackground
          style={styles.entityHeadItemFrame}
          source={require('../../assets/blocks/item_frame.png')}
          imageStyle={styles.entityHeadItemFrameImage}
        >
          {appGlobalData ? (
            <Image style={styles.headImage} source={appGlobalData.head}></Image>
          ) : null}
          {/* <Image
            style={styles.headImage}
            source={require('../../assets/heads/creeper.png')}
          ></Image> */}
        </ImageBackground>
        <Text style={styles.entityName}>
          {appGlobalData ? appGlobalData.name : 'Carregando...'}
        </Text>
      </View>
      <ElevatedButton
        height={48}
        width={48}
        onPressHandler={handleOpenModal}
        borderWidth={3}
      >
        <Image
          source={require('../../assets/icons/menu.png')}
          style={styles.menuIcon}
        />
      </ElevatedButton>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 72,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  backgroundImage: {
    resizeMode: 'repeat',
  },
  entityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  entityHeadItemFrame: {
    padding: 6,
  },
  entityHeadItemFrameImage: {
    resizeMode: 'cover',
  },
  headImage: {
    height: 36,
    width: 36,
  },
  entityName: {
    fontFamily: 'Monocraft',
    fontSize: 21,
    lineHeight: 21,
    color: '#F5F5F5',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  menuIcon: {
    width: 24,
    height: 19,
  },
});

export default ChatHeader;
