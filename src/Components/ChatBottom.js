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
import { useAppContext } from '../Contexts/AppContext';
import ElevatedButton from './ElevatedButton';

const ChatBottom = ({ chatInstance, setChatHistoryChanged }) => {
  const [actualPrompt, setActualPrompt] = React.useState('');
  const [canSendMessage, setCanSendMessage] = React.useState(false);
  const [isLoadingResponse, setIsLoadingResponse] = React.useState(false);
  const { appGlobalData, setAppGlobalData } = useAppContext();

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
      // try {
      //   setIsLoadingResponse(true);
      //   const promptMessage = actualPrompt;
      //   setActualPrompt('');
      //   const result = await chatInstance.sendMessage(promptMessage);
      //   const response = await result.response;
      //   const text = response.text();

      //   const promptFeedback = response.promptFeedback;
      //   console.log(promptFeedback);

      //   console.log('user:', promptMessage + '\nresponse:', text);

      //   setChatHistoryChanged((previousValue) => !previousValue);
      //   const newHistory = await chatInstance.getHistory();
      //   console.log(newHistory);
      //   setIsLoadingResponse(false);
      // } catch (error) {
      //   Alert.alert('Erro:', error);
      //   console.log('Error:', error);
      //   setIsLoadingResponse(false);
      //   return;
      // }

      const promptMessage = actualPrompt;
      setActualPrompt('');
      let success = false;
      while (!success) {
        try {
          setIsLoadingResponse(true);
          await chatInstance.sendMessage(promptMessage);
          success = true;
        } catch (error) {
          console.log(error);
          ToastAndroid.show(
            `Mensagem inválida/proibida, tente novamente.`,
            ToastAndroid.LONG
          );
        } finally {
          setIsLoadingResponse(false);
          setChatHistoryChanged((chatHistory) => !chatHistory);
        }
      }
    } else {
      ToastAndroid.show(`Campo de texto vazio.`, ToastAndroid.SHORT);
    }
  };

  return (
    <ImageBackground
      source={
        appGlobalData
          ? appGlobalData.downTile
          : require('../../assets/blocks/block_placeholder.png')
      }
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
          onSubmitEditing={handleSendMessage}
        />

        {canSendMessage && !isLoadingResponse ? (
          <ElevatedButton
            onPressHandler={handleSendMessage}
            height={48}
            width={48}
            borderWidth={3}
          >
            <Image
              source={require('../../assets/icons/send_message.png')}
              style={styles.sendMessageIcon}
            />
          </ElevatedButton>
        ) : (
          <ElevatedButton
            dontAnimate={true}
            height={48}
            width={48}
            borderWidth={3}
          >
            <Image
              source={require('../../assets/icons/loading_spinner.gif')}
              style={styles.loadingIcon}
            />
          </ElevatedButton>
        )}
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
  sendMessageIcon: {
    width: 32,
    height: 32,
  },
  loadingIcon: {
    // Reticências
    // width: 26,
    // height: 4,

    // .gif
    // width: 31,
    width: 23.25,

    // height: 34.5,
    height: 25.875,
  },
});

export default ChatBottom;
