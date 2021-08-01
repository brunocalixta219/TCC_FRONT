import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// auth screens
import SignIn from '../screens/SignInScreen/SignIn';
import SignUp from '../screens/SignUpScreen/SignUp';
import Terms from '../screens/TermsScreen/Terms';

// app screens
import Main from '../screens/MainScreen/Main';
import Profile from '../screens/ProfileScreen/Profile';
import EditProfile from '../screens/EditProfileScreen/EditProfile';
import Contacts from '../screens/ContactsScreen/Contacts';
import NewContact from '../screens/NewContactScreen/NewContact';
import EditContact from '../screens/EditContactScreen/EditContact';
import EditPhoto from '../screens/EditPhotoScreen/EditPhoto';

const Stack = createStackNavigator();

export default (props) => (
    <Stack.Navigator
        initialRouteName="Profile"
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

        <Stack.Screen name="Main"  options={{animationEnabled: false}}>
            {(props) => <Main {...props} />}
        </Stack.Screen>

        <Stack.Screen name="Profile" options={{animationEnabled: false}}>
            {(props) => <Profile {...props} />}
        </Stack.Screen>
        
        <Stack.Screen name="EditProfile" options={{animationEnabled: false}}>
            {(props) => <EditProfile {...props} />}
        </Stack.Screen>

        <Stack.Screen name="Contacts"  options={{animationEnabled: false}}>
            {(props) => <Contacts {...props} />}
        </Stack.Screen>

        <Stack.Screen name="NewContact"  options={{animationEnabled: false}}>
            {(props) => <NewContact {...props} />}
        </Stack.Screen>

        <Stack.Screen name="EditContact"  options={{animationEnabled: false}}>
            {(props) => <EditContact {...props} />}
        </Stack.Screen>

        <Stack.Screen name="EditPhoto"  options={{animationEnabled: false}}>
            {(props) => <EditPhoto {...props} />}
        </Stack.Screen>

    </Stack.Navigator>
);
