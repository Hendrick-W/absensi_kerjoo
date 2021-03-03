/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useEffect} from 'react';
import {Provider, useSelector, useDispatch} from 'react-redux'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider} from 'react-native-safe-area-context';

import store from './src/store'
import SplashScreen from './src/screens/Splash_Screen'
import LoginPage from './src/screens/Login'
import MainNavigation from './src/navigation/MainNavigation'

const Stack = createStackNavigator()

const App: () => React$Node = () => {
  const {access_token} = useSelector(state=>state.user)
  const [hideSplash, setHideSplash] = useState(false);
  useEffect(()=>{
    let timer = setTimeout(()=>{
      setHideSplash(true)
    }, 1000)

    return () => {
      clearTimeout(timer)
    }
  },[])
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator headerMode='none'>
          {hideSplash == false &&
            <Stack.Screen name="SplashScreen" component={SplashScreen}/>
          }
          {access_token.length == 0 &&
            <Stack.Screen name="Login" component={LoginPage}/>
          }
          {access_token.length != 0 &&
            <Stack.Screen name="MainPage" component={MainNavigation}/>
          }
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default () => {
  return(
  <Provider store={store}>
    <App/>
  </Provider>
  )
};
