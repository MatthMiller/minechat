import React from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';
import ChatHeader from '../Components/ChatHeader';
import { StatusBar } from 'expo-status-bar';
import ChatContent from '../Components/ChatContent';
import ChatBottom from '../Components/ChatBottom';
import { GoogleGenerativeAI } from '@google/generative-ai';
import safetySettings from '../../safety-settings.js';
import { useAppContext } from '../Contexts/AppContext.js';
import AsyncStorage from '@react-native-async-storage/async-storage';
import entityMap from '../../entity-map.js';

const API_KEY = process.env.EXPO_PUBLIC_API_KEY;

console.log('.env?', process.env.EXPO_PUBLIC_API_KEY);

const Chat = ({ navigation }) => {
  const [chatInstance, setChatInstance] = React.useState(null);
  const [chatHistoryChanged, setChatHistoryChanged] = React.useState(false);
  const {
    appGlobalData,
    setAppGlobalData,
    shouldResetContext,
    setShouldResetContext,
  } = useAppContext();

  const startChat = async () => {
    const hasSelectedEntity = await AsyncStorage.getItem('selected-entity');

    if (!hasSelectedEntity?.length || hasSelectedEntity === null) {
      await AsyncStorage.setItem('selected-entity', '2');
    }

    const genAI = new GoogleGenerativeAI(API_KEY);
    const model = genAI.getGenerativeModel({
      model: 'gemini-pro',
      safetySettings,
    });
    const chat = model.startChat({
      generationConfig: {
        maxOutputTokens: 1000,
      },
    });
    setChatInstance(chat);

    // do AsyncStorage
    const selectedEntityId = await AsyncStorage.getItem('selected-entity');
    // Se tiver no estado global usar dele. Senão, do AsyncStorage
    const entity = appGlobalData
      ? appGlobalData
      : entityMap.filter((actualEntity) => {
          return actualEntity.id === Number(selectedEntityId);
        })[0];
    setAppGlobalData(entity);
    const newMessage = entity.prompt;

    try {
      await chat.sendMessage(newMessage);
      setChatHistoryChanged((chatHistory) => !chatHistory);
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    startChat();
    const focusReference = navigation.addListener('focus', () => {
      setChatHistoryChanged((previousValue) => !previousValue);
      console.log('Caiu aqui?', shouldResetContext);
      // if (shouldResetContext) {
      // startChat();
      // setShouldResetContext(false);
      // }
    });
    return focusReference; // removed on unmount
  }, []);

  React.useEffect(() => {
    console.log('shouldReset no chat:', shouldResetContext);
    startChat();

    if (shouldResetContext) {
      setShouldResetContext(false);
    }
  }, [shouldResetContext]);

  // React.useEffect(() => {
  //   if (chatInstance !== null) {
  //     setCanGlobalUpdate(chatInstance);
  //   }
  // }, [chatInstance]);

  React.useEffect(() => {
    if (chatInstance && appGlobalData) {
      console.log('Mudou o appGlobalData');
      startChat();
    }
  }, [appGlobalData]);

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
