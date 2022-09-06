import React, {useState} from 'react';
import {ThemeProvider} from 'styled-components';
/* import {createDrawerNavigator} from '@react-navigation/drawer'; */
import {NavigationContainer} from '@react-navigation/native';
import {View, StatusBar, Text} from 'react-native';
import { Provider } from 'react-native-paper';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
/* import AppLoading from 'expo-app-loading'; */
/* import {HomeScreen, SplashScreen} from './screens'; */
/*  import {HomeScreen} from './screens'; */
import {theme} from './src/styles/theme';
/*  import StoryBook from '../storybook';  */
import Routes from './src/routes';
import { LogBox } from 'react-native';

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
]);

const App = () => {
  let [fontsLoaded] = useFonts({
    'Montserrat-Bold': require('./assets/fonts/Montserrat-Bold.ttf'),
    'Montserrat-Medium': require('./assets/fonts/Montserrat-Medium.ttf'),
    'Montserrat-Regular': require('./assets/fonts/Montserrat-Regular.ttf'),
    'Montserrat-SemiBold': require('./assets/fonts/Montserrat-SemiBold.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
        <View style={{flex: 1, backgroundColor: '#f8f8f8'}}>
          <Provider>
             <Routes />
            {/* <Text>uee</Text> */}
          </Provider>
        </View>
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;
