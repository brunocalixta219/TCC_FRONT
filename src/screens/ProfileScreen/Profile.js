import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import BottomTab from '../../components/BottomTab';

const Profile = (props) => {
    return (
    <View style={styles.container}>
        <Text>Tela de Perfil</Text>
        <BottomTab {...props} page="profile"></BottomTab>
    </View>
    );
};

export default Profile;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});