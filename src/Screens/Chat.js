import React from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';
import ChatHeader from '../Components/ChatHeader';
import { StatusBar } from 'expo-status-bar';
import ChatContent from '../Components/ChatContent';
import ChatBottom from '../Components/ChatBottom';
import { GoogleGenerativeAI } from '@google/generative-ai';
import safetySettings from '../../safety-settings.js';
import { useAppContext } from '../Contexts/AppContext.js';

const API_KEY = 'AIzaSyDjS7mk1TBf7CR9ARyruFeu0kS3EAFnFwk';

const Chat = ({ navigation }) => {
  const [chatInstance, setChatInstance] = React.useState(null);
  const [chatHistoryChanged, setChatHistoryChanged] = React.useState(false);
  const { appGlobalData, setAppGlobalData } = useAppContext();

  console.log('appGlobalData', appGlobalData);

  const startChat = async () => {
    const genAI = new GoogleGenerativeAI(API_KEY);
    const model = genAI.getGenerativeModel({
      model: 'gemini-pro',
      safetySettings,
    });
    const chat = model.startChat({
      // Histórico de mensagens passadas
      // history: [
      // {
      //   role: 'user',
      //   parts: 'Hello, I have 2 dogs in my house',
      // },
      // {
      //   role: 'model',
      //   parts: 'Great to meet you. What would you like to know?',
      // },
      // ],
      generationConfig: {
        maxOutputTokens: 1000,
      },
    });
    setChatInstance(chat);

    const newMessage =
      'Aja como um Creeper (mob do Minecraft) e assistente virtual. A partir de agora você está falando com um usuário/cliente. Dê saudações para que o usuário siga com a conversa. Seja breve em sua resposta.';
    try {
      const result = await chat.sendMessage(newMessage);
      const response = await result.response;
      console.log(response.candidates);
      // Remove *, **, e deixa apenas uma quebra de linha por vez
      const text = response.text().replace(/\*\*|\*/g, '');
      // .replace(/(\n{2,})/g, '\n');
      const promptFeedback = response.promptFeedback;
      console.log(text);
      console.log(promptFeedback);

      setChatHistoryChanged((chatHistory) => !chatHistory);
    } catch (error) {
      Alert.alert('Erro:', error);
      console.log('Error:', error);
    }
  };

  React.useEffect(() => {
    console.log('first render App useEffect');
    startChat();
  }, []);

  React.useEffect(() => {
    if (chatInstance !== null) {
      console.log('Carregou a instância do chat, pode enviar mensagens');
    }
  }, [chatInstance]);

  return (
    <>
      <StatusBar hidden={true} />
      <View style={styles.body}>
        <ChatHeader navigation={navigation} />
        <ChatContent
          chatInstance={chatInstance}
          chatHistoryChanged={chatHistoryChanged}
        />
        <ChatBottom
          chatInstance={chatInstance}
          setChatHistoryChanged={setChatHistoryChanged}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  body: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
  },
});

export default Chat;
