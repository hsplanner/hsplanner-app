import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

const App = createNativeStackNavigator();

import {
  Main,
  Calendar,
  Explore,
  Students,
  SignUp
} from '../screens';

const AppRoutes = () => {
  return (
    <App.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Main">
      <App.Screen
        name="Main"
        component={Main}
      />
      <App.Screen
        name="Explore"
        component={Explore}
      />
      <App.Screen
        name="Calendar"
        component={Calendar}
      />
      <App.Screen
        name="Students"
        component={Students}
      />
      <App.Screen name="SignUp" component={SignUp} />
    </App.Navigator>
  );
};

export default AppRoutes;
