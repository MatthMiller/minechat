import React from 'react';
import {
  Alert,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  ToastAndroid,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import sendMessagePressedImage from '../../assets/buttons/send-message-pressed.png';
import sendMessageImage from '../../assets/buttons/send-message.png';

const ChatBottom = ({ chatInstance, setChatHistoryChanged }) => {
  const [actualPrompt, setActualPrompt] = React.useState('');
  const [isButtonPressIn, setIsButtonPressIn] = React.useState(false);
  const [canSendMessage, setCanSendMessage] = React.useState(false);
  const [isLoadingResponse, setIsLoadingResponse] = React.useState(false);

  React.useEffect(() => {
    // console.log('chatInstance disponível:', chatInstance ? 'true' : 'false');

    if (chatInstance) {
      setCanSendMessage(true);
    } else {
      setCanSendMessage(false);
    }
  }, [chatInstance]);

  const handleTextChange = (text) => {
    setActualPrompt(text);
  };

  const handleSendMessage = async () => {
    if (!canSendMessage) {
      ToastAndroid.show(
        `Aguarde carregar para enviar mensagens.`,
        ToastAndroid.LONG
      );
    }

    if (actualPrompt.length) {
      try {
        setIsLoadingResponse(true);
        const promptMessage = actualPrompt;
        setActualPrompt('');
        const result = await chatInstance.sendMessage(promptMessage);
        const response = await result.response;
        const text = response.text();

        const promptFeedback = response.promptFeedback;
        console.log(promptFeedback);

        console.log('user:', promptMessage + '\nresponse:', text);

        setChatHistoryChanged((previousValue) => !previousValue);
        const newHistory = await chatInstance.getHistory();
        console.log(newHistory);
        setIsLoadingResponse(false);
      } catch (error) {
        Alert.alert('Erro:', error);
        console.log('Error:', error);
        setIsLoadingResponse(false);
        return;
      }
    } else {
      ToastAndroid.show(`Campo de texto vazio.`, ToastAndroid.SHORT);
    }
  };

  return (
    <ImageBackground
      source={require('../../assets/blocks/dirt.png')}
      style={styles.bottom}
      imageStyle={styles.backgroundImage}
    >
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder='Digite aqui...'
          placeholderTextColor='#B1B1B1'
          value={actualPrompt}
          onChangeText={handleTextChange}
        />

        <TouchableWithoutFeedback
          onPressIn={() => setIsButtonPressIn(true)}
          onPressOut={() => setIsButtonPressIn(false)}
          onPress={() => handleSendMessage()}
        >
          {canSendMessage && !isLoadingResponse ? (
            <Image
              style={styles.sendMessageImage}
              source={
                isButtonPressIn ? sendMessagePressedImage : sendMessageImage
              }
            />
          ) : (
            // Fazer o botão em CSS com imagem no meio (já tenho o ElevatedButton.js)
            <Text>🥔</Text>
          )}
        </TouchableWithoutFeedback>
      </View>
      <View style={styles.backgroundOverlay}></View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  bottom: {
    paddingVertical: 12,
    paddingHorizontal: 10,
  },
  backgroundImage: {
    resizeMode: 'repeat',
  },
  backgroundOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },
  inputContainer: {
    zIndex: 3,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  input: {
    fontFamily: 'Monocraft',
    fontSize: 16,
    flex: 1,
    lineHeight: 23,

    backgroundColor: '#000000',
    borderColor: '#A0A0A0',
    color: '#F5F5F5',
    borderWidth: 2,
    paddingHorizontal: 16,
    paddingVertical: 9,
    height: 48,
  },
  sendMessageImage: {
    height: 48,
    width: 48,
  },
});

export default ChatBottom;
