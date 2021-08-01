import React from 'react';
import { TouchableOpacity } from 'react-native';
import { View, Text, StyleSheet, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default props => {
const image = require('../images/avatar.png')
    return (
        <View styles={styles.circleContainer}>
            <Image source={image} resizeMode="cover" style={styles.image}></Image>
            <TouchableOpacity  
                style={styles.iconContainer}
                onPress={()=> props.navigation.navigate("EditPhoto")}>
                {props.editProfile? <Icon
                    name="camera"
                    size={30}
                    style={styles.icon}
                    onPress = {()=>props.navigation.goBack()}
                /> : <></>}
            </TouchableOpacity>  
        </View>
    )
}

const styles = StyleSheet.create({
    circleContainer: {
        backgroundColor: 'white',
        borderRadius: 50,
        position: 'absolute',
        

    }, 
    image: {
        top: 90,
        width: 100, 
        height: 100, 
        borderRadius: 50,
        zIndex: 3,
    }, 
    icon: {
        position: 'absolute',
        zIndex: 5,
        color: 'black',
    }, 

    iconContainer: {
        padding: 5,   
        position: 'absolute',
        alignSelf: 'flex-end',
        right: 10,
        justifyContent: 'center',
        zIndex: 4,
        top: 170,
    }
});