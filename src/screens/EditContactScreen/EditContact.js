import React, { useState } from 'react';
import { ImageBackground } from 'react-native';
import { View, Text, StyleSheet } from 'react-native';
import BottomTab from '../../components/BottomTab';
import PageHeader from '../../components/PageHeader';

const Profile = ({route, navigation}) => {
const image = require('../../images/background/bg2.png')
 
const [user, setUser] = useState(route.params ? route.params : [])
    return (
    <View style={styles.container}>
        <ImageBackground source={image} resizeMode="cover" style={styles.image}>
            <PageHeader label="EDITAR CONTATO" navigation={navigation} />
                <Text>Id: {user.id}</Text>
                <Text>Nome: {user.name}</Text>
                <Text>Phone: {user.phone}</Text>
            <BottomTab navigation={navigation} page="contacts"></BottomTab>
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