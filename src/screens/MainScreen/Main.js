import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import BottomTab from '../../components/BottomTab';

const Main = (props) => {
    return (
    <View style={styles.container}>
        <Text>Tela Principal</Text>
        <BottomTab {...props} page="home"></BottomTab>
    </View>
    )
};

export default Main;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});
