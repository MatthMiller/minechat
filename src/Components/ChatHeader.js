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

const ChatHeader = ({ navigation }) => {
  const [isButtonPressIn, setIsButtonPressIn] = React.useState(false);

  const handleOpenModal = () => {
    navigation.navigate('Config');
  };

  return (
    <ImageBackground
      source={require('../../assets/blocks/mossy_cobblestone.png')}
      style={styles.header}
      imageStyle={styles.backgroundImage}
    >
      <View style={styles.entityContainer}>
        <ImageBackground
          style={styles.entityHeadItemFrame}
          source={require('../../assets/blocks/item_frame.png')}
          imageStyle={styles.entityHeadItemFrameImage}
        >
          <Image
            style={styles.headImage}
            source={require('../../assets/heads/creeper.png')}
          ></Image>
        </ImageBackground>
        <Text style={styles.entityName}>Creeper IA</Text>
      </View>
      <TouchableWithoutFeedback
        onPressIn={() => setIsButtonPressIn(true)}
        onPressOut={() => setIsButtonPressIn(false)}
        onPress={handleOpenModal}
      >
        <Image
          style={styles.menuButtonImage}
          source={isButtonPressIn ? menuButtonPressedImage : menuButtonImage}
        />
      </TouchableWithoutFeedback>
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
  menuButtonImage: {
    width: 48,
    height: 48,
  },
});

export default ChatHeader;
