import React from 'react';
import termText from './termText';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import PageHeader from '../../components/PageHeader';

export default props => {
    return(
        <View style={styles.container}>
            <ScrollView>
            <PageHeader label="TERMOS DE USO" navigation={props.navigation}></PageHeader>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>{termText}</Text> 
                </View>
            </ScrollView>
        </View>
        
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#003f5e',
    },
    textContainer: {
        marginTop: 90,
        flex: 5,
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: '#026db9',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    }, 
    text: {
        color: 'white',
        marginHorizontal: 25,
        marginVertical: 30,
        textAlign: 'justify'
    }
});