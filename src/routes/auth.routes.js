import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {SignIn, SignUp} from '../screens';

const AuthStack = createNativeStackNavigator();

const AuthRoutes = () => (
  <AuthStack.Navigator
    /*     initialRouteName="SignIn" */
    screenOptions={{
      headerShown: false,
    }}>
    <AuthStack.Screen name="SignIn" component={SignIn} />
    <AuthStack.Screen name="SignUp" component={SignUp} />
  </AuthStack.Navigator>
);

export default AuthRoutes;
