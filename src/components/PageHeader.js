import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default props => {
    return (
        <View style={styles.pageHeader}><Icon
        name="arrow-circle-left"
        size={55}
        style={styles.icon}
        onPress = {()=>props.navigation.goBack()}
      /><Text style={styles.label}>{props.label}</Text></View>
    )
}

const styles = StyleSheet.create({
    pageHeader: {
        padding: 50,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: "100%",
    },
    label: {
        fontSize: 30,
        color: 'white',
        fontWeight: 'bold',

    }, 
    icon: {
        color: 'white',
        justifyContent: 'flex-start',
        position: 'absolute',
        left: 30,
    }
});