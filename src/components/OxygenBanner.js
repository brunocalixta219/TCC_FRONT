import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default props => {
    return (
        <View style={[styles.container, styles.boxShadow]}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>Saturação do Oxigênio</Text>
            </View>
            <View style={styles.mainContainer}>
                <View style={styles.valueContainer}>
                    <Text style={styles.value}>095</Text>
                    <Text style={{fontSize: 40, marginLeft: 10, color: '#012C2F', fontWeight: 'bold'}}>%</Text>
                </View>
                <View style={styles.label}>
                    <Text style={{fontSize: 30, paddingVertical: "10%", fontWeight: 'bold'}}>SPO2</Text>
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
        height: "32%",
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
      titleContainer: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: '10%',
      }, 
    labelContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        flex: 1,
        paddingHorizontal: '6%',
    }, 
    mainContainer: {
        flex: 3,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    title:{
        fontWeight: 'bold',
        fontSize: 16,
    }, 
    valueContainer: {
        flex: 1.4,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    }, 
    label: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'flex-end'
    }, 
    value: {
        fontSize: 70,
        fontWeight: 'bold',
        color: '#01737E',
    }
      
});