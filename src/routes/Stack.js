import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// auth screens
import SignIn from '../screens/SignInScreen/';
import SignUp from '../screens/SignUpScreen/';
import Terms from '../screens/TermsScreen/Terms';

// app screens
import Contacts from '../screens/ContactsScreen/';
import Main from '../screens/MainScreen/';
import Profile from '../screens/ProfileScreen/';
import EditProfile from '../screens/EditProfileScreen/';
import NewContact from '../screens/NewContactScreen/';
import EditContact from '../screens/EditContactScreen/';
import EditPhoto from '../screens/EditPhotoScreen/EditPhoto';

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

        <Stack.Screen name="Terms">
            {(props) => <Terms {...props} />}
        </Stack.Screen>

        <Stack.Screen name="Main" options={{ animationEnabled: false }}>
            {(props) => <Main {...props} />}
        </Stack.Screen>

        <Stack.Screen name="Profile" options={{ animationEnabled: false }}>
            {(props) => <Profile {...props} />}
        </Stack.Screen>

        <Stack.Screen name="EditProfile" options={{ animationEnabled: false }}>
            {(props) => <EditProfile {...props} />}
        </Stack.Screen>

        <Stack.Screen name="Contacts" options={{ animationEnabled: false }}>
            {(props) => <Contacts {...props} />}
        </Stack.Screen>

        <Stack.Screen name="NewContact" options={{ animationEnabled: false }}>
            {(props) => <NewContact {...props} />}
        </Stack.Screen>

        <Stack.Screen name="EditContact" options={{ animationEnabled: false }}>
            {(props) => <EditContact {...props} />}
        </Stack.Screen>

        <Stack.Screen name="EditPhoto" options={{ animationEnabled: false }}>
            {(props) => <EditPhoto {...props} />}
        </Stack.Screen>
    </Stack.Navigator>
);
