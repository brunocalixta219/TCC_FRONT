import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";

import SignIn from '../screens/SignInScreen/SignIn';
import SignUp from '../screens/SignUpScreen/SignUp';
import Main from '../screens/Main';

import PassoStack from '../routes/PassoStack'

const Stack = createStackNavigator();

export default (props) => (
  <Stack.Navigator
  initialRouteName="SignIn"
  screenOptions={{ headerShown: false }}
>
  <Stack.Screen name="SignIn">
    {(props) => (
        <SignIn {...props} />
    )}
  </Stack.Screen>

  <Stack.Screen name="SignUp">
    {(props) => (
        <SignUp {...props} />
    )}
  </Stack.Screen>

</Stack.Navigator>
);