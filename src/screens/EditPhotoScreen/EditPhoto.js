import React from 'react';
import { ImageBackground } from 'react-native';
import { View, Text, StyleSheet } from 'react-native';
import BottomTab from '../../components/BottomTab';
import PageHeader from '../../components/PageHeader';

const EditPhoto = (props) => {
    const image = require('../../images/background/bg2.png');
    return (
        <View style={styles.container}>
            <ImageBackground
                source={image}
                resizeMode="cover"
                style={styles.image}
            >
                <PageHeader label="EDITAR FOTO" navigation={props.navigation} />
                <Text>New Contact</Text>
                <BottomTab {...props} page="profile"></BottomTab>
            </ImageBackground>
        </View>
    );
};

export default EditPhoto;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    image: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
