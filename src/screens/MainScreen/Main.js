import React from 'react';
import { ImageBackground } from 'react-native';
import { View, Text, StyleSheet } from 'react-native';
import BottomTab from '../../components/BottomTab';
import PageHeader from '../../components/PageHeader';

const Profile = (props) => {
const image = require('../../images/background/bg2.png')
    return (
    <View style={styles.container}>
        <ImageBackground source={image} resizeMode="cover" style={styles.image}>
            <PageHeader label="PRINCIPAL" navigation={props.navigation} />
                <Text>Tela Principal</Text>
            <BottomTab {...props} page="main"></BottomTab>
        </ImageBackground>
    </View>)
    
    
    ;
};

export default Profile;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    }, 
    image: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      },
});
