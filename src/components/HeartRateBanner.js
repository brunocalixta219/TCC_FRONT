import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default props => {

const icon = require('../images/heart.png')

    return (
        <View style={[styles.container, styles.boxShadow]}>
             <View style={styles.titleContainer}>
                <Text style={styles.title}>Frequência Cardíaca</Text>
            </View>
            <View style={styles.mainContainer}>
                <View style={styles.imageContainer}>
                    <Image source={icon} resizeMode='contain' style={styles.image} />
                </View>
                <View style={[styles.imageContainer]}>
                    <Text style={[styles.valueText, {paddingVertical: '20%'}]}>095</Text>
                </View>
                <View style={[styles.imageContainer, styles.bpmLabel]}>
                    <Text style={styles.labelValueText}>BPM</Text>
                </View>
            </View>

            <View style={styles.labelContainer}>
                <Text>Última atualização:</Text>
                <Text>12/06/2021</Text>
                <Text>13:54PM</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        borderRadius: 10,
        width: "90%",
        height: "25%",
    }, 
    boxShadow: {
        shadowColor: "rgba(0,0,0,0.48)",
        shadowOffset: {
          width: 1,
          height: 3,
        },
        shadowOpacity: 3,
        shadowRadius: 7,
        elevation: 5,
      },
    mainContainer: {
        flex: 2.5,
        flexDirection: 'row',
        justifyContent: 'center',
        //backgroundColor: 'red'
    },
    labelContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        flex: 1,
        paddingHorizontal: '6%',
    }, 
    image: {
        width: '60%',
        height: '100%',
    }, 
    imageContainer: {
        flex: 1,
        width: '50%',
        //height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    }, 
    valueText: {
        fontSize: 60,
        fontWeight: 'bold',
    }, 
    labelValueText: {
        color: '#ED6B4C',
        fontSize: 18,
        fontWeight: 'bold',
    }, 
    bpmLabel: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
        //paddingLeft: '10%'
    }, 
    titleContainer: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: '10%',
      }, 
      title:{
        fontWeight: 'bold',
        fontSize: 16,
    }, 


});