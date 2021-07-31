import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import BottomTab from '../../components/BottomTab';

const Profile = (props) => {
    return (
    <View style={styles.container}>
        <Text>Tela de Contatos</Text>
        <BottomTab {...props} page="contacts"></BottomTab>
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