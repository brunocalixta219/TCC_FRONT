import React from 'react';
import { View, TouchableHighlight, Text, StyleSheet } from 'react-native';
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import { TouchableWithoutFeedback } from 'react-native';


export default ({page, navigation}) => {
    return (
        <View style = {styles.tabContainer}>
            <View style = {styles.tabIcons}>
                <TouchableWithoutFeedback
                    
                    onPress={() => navigation.navigate("Profile")}>
                         <MaterialCommunityIcons 
                            style = {styles.tabIcon} 
                            name="account" 
                            color={page == "profile" ? "#003F5E" : "grey"} size={50}/>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback 
                    onPress={() => navigation.navigate("Main")}>
                        <MaterialCommunityIcons 
                            style = {styles.tabIcon}
                            name="home" 
                            color={page == "main" ? "#003F5E" : "grey"} size={50}/>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback 
                    onPress={() => navigation.navigate("Contacts")}>
                        <MaterialCommunityIcons 
                            style = {styles.tabIcon} 
                            name="phone" 
                            color={page == "contacts" ? "#003F5E" : "grey"} size={50}/>
                </TouchableWithoutFeedback>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    tabContainer: {
        flex: 1,
        alignSelf: 'center',
        justifyContent: 'center',
        position: 'absolute',
        zIndex: 4,
        bottom: 0,
        backgroundColor: 'white',
        width: '100%',

        borderWidth: 1,
        //borderRadius: 20,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: -10 },
        shadowOpacity: 0.8,
        shadowRadius: 20,
        elevation: 1,
    },
    tabIcons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'center', 
    },
    tabIcon: {
        marginHorizontal: 30,
        paddingVertical: 10,
        paddingHorizontal: 5,
    }
});
