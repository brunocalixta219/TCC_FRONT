import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Main = (props) => {
    return <View style={styles.container}><Text>Login feito com sucesso!</Text></View>;
};

export default Main;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});
