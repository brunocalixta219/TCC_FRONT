import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Profile = (props) => {
    return <View style={styles.container}><Text>Cadastro feito com sucesso!</Text></View>;
};

export default Profile;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});