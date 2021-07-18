import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SignIn from '../screens/SignInScreen';
import SignUp from '../screens/SignUpScreen';
import Main from '../screens/Main';
import Profile from '../screens/Profile';

const Stack = createStackNavigator();

export default (props) => (
    <Stack.Navigator
        initialRouteName="SignIn"
        screenOptions={{ headerShown: false }}
    >
        <Stack.Screen name="SignIn">
            {(props) => {
                return <SignIn {...props} />;
            }}
        </Stack.Screen>

        <Stack.Screen name="SignUp">
            {(props) => <SignUp {...props} />}
        </Stack.Screen>

        <Stack.Screen name="Main">
            {(props) => <Main {...props} />}
        </Stack.Screen>

        <Stack.Screen name="Profile">
            {(props) => <Profile {...props} />}
        </Stack.Screen>
    </Stack.Navigator>
);
