import gestureHandler from 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import Chat from './src/Screens/Chat.js';
import { useFonts } from 'expo-font';
import React from 'react';
import Config from './src/Screens/Config.js';
import { AppProvider } from './src/Contexts/AppContext.js';

const RootStack = createStackNavigator();

const App = () => {
  const [fontsLoaded] = useFonts({
    Monocraft: require('./assets/fonts/Monocraft.ttf'),
  });

  if (!fontsLoaded) return null;

  const myTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: 'black',
    },
  };

  return (
    <AppProvider>
      <NavigationContainer theme={myTheme}>
        <RootStack.Navigator>
          <RootStack.Group>
            <RootStack.Screen
              name='Chat'
              options={{ headerShown: false }}
              component={Chat}
            />
          </RootStack.Group>
          <RootStack.Group screenOptions={{ presentation: 'modal' }}>
            <RootStack.Screen
              options={{ headerShown: false }}
              name='Config'
              component={Config}
            />
          </RootStack.Group>
        </RootStack.Navigator>
      </NavigationContainer>
    </AppProvider>
  );
};

export default App;
