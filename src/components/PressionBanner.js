import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default props => {

    const image = require('../images/pressure.png')
    return (
        <View style={[styles.container, styles.boxShadow]}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>Pressão Arterial</Text>
            </View>
            
            <View style={styles.mainContainer}>
                <View style={styles.valueRow}>
                    <View style={styles.valueCell}>
                        <View>
                            <Text style={styles.label}>SYS</Text>
                            <Text style={styles.label}>mmHg</Text>
                        </View>
                        <Text style={[{color: '#00812A', fontSize: 36}, styles.label]}>119</Text>
                    </View>
                    <View style={styles.valueCell}>
                        <View>
                            <Text style={styles.label}>DIA</Text>
                            <Text style={styles.label}>mmHg</Text>
                        </View>
                        <Text style={[{color: '#CC4B69', fontSize: 36}, styles.label]}>91</Text>
                    </View>
                </View>
                <View style={[styles.valueRow]}>
                    <View style={styles.valueCell}>
                        <View>
                            <Text style={styles.label}>Pulso</Text>
                            <Text style={styles.label}>/min</Text>
                        </View>
                        <Text style={[{color: '#000000', fontSize: 36}, styles.label]}>111</Text>
                    </View>
                    <View style={[styles.valueCell]}>
                        <Image source={image} resizeMode='contain' style={{width: '80%', marginTop: 12}} />
                    </View>
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
    mainContainer: {
        flex: 2.5,
        justifyContent: 'center',
    },
    labelContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        flex: 1,
        paddingHorizontal: '6%',
    },
    titleContainer: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: '10%',
      },
    valueRow: {
        flex: 1,
        flexDirection: 'row'
    }, 
    valueCell: {
        flex: 1, 
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingHorizontal: "5%",
        paddingVertical: '2%'
    }, 
    label: {
        fontWeight: 'bold'
    }, 
    title:{
        fontWeight: 'bold',
        fontSize: 16,
    }, 

    
    
});