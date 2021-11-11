import React from 'react';
import { StatusBar } from 'react-native';
import { View, Text, StyleSheet, SafeAreaView, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


export default props => {
const img = require('../images/background/bg1.png')
    return (
        <SafeAreaView style={styles.pageHeader}>
            <StatusBar style="light" />
            <Icon
        name="arrow-circle-left"
        size={50}
        style={styles.icon}
        onPress = {()=>props.navigation.goBack()}
      />
            <Text style={styles.label}>{props.label}</Text>
            {props.rightIcon? <Icon
        name={props.name}
        size={50}
        style={styles.rightIcon}
        onPress = {props.onPress}
      /> : <></>}
            
      </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    pageHeader: {
        padding: 35,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: "100%",
        position: 'absolute',
        maxHeight: 50,
        top: 0,
        zIndex: 2,
    },
    label: {
        fontSize: 25,
        color: 'white',
        fontWeight: 'bold',

    }, 
    icon: {
        color: 'white',
        justifyContent: 'flex-start',
        position: 'absolute',
        left: 30,
    },
    rightIcon: {
        color: 'white',
        justifyContent: 'flex-end',
        position: 'absolute',
        right: 30,
    }, 
     image: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        //height: '100%',
    },
});