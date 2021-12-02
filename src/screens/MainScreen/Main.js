import React, { useCallback, useContext, useEffect, useState } from 'react';
import { Image } from 'react-native';
import { ImageBackground } from 'react-native';
import { View, StyleSheet, SafeAreaView } from 'react-native';
import UserContext from '../../context/userContext';
import BottomTab from '../../components/BottomTab';
import HeartRateBanner from '../../components/HeartRateBanner';
import OxygenBanner from '../../components/OxygenBanner';
import axios from 'axios';
//import PressionBanner from '../../components/PressionBanner';

const Main = (props) => {
    const image = require('../../images/background/bg2.png');
    const logo = require('../../images/logo/logo1.png');
    const userId = props.route.params.userId;

    const [data, setData] = useState([]);
    const [envioSms, setEnvioSms] = useState(true);

    const url =
        'https://api.thingspeak.com/channels/1538952/feeds.json?results=1';

    const { state, dispatch } = useContext(UserContext);

    useEffect(() => {
        dispatch({
            type: 'setUserId',
            payload: userId,
        });
    }, [userId]);

    useEffect(() => {
        props.getOne(userId);
        props.getContacts(userId);
        axios
            .get(url)
            .then((response) => {
                setData(response.data.feeds[0]);
            })
            .catch((error) => console.log(error));
    }, []);

    setInterval(function () {
        axios
            .get(url)
            .then((response) => {
                setData(response.data.feeds[0]);
            })
            .catch((error) => console.log(error));
    }, 15000);

    useEffect(() => {
        if (envioSms) {
            if (
                data.field6 === '1' || //Queda
                data.field5 < '90' || //SO2
                data.field4 < '60' || //BPM
                data.field4 > '99' //BPM 99
            ) {
                const queda = data.field6 === '1' ? 'SIM' : 'NÃO';

                axios({
                    url: 'https://api.zenvia.com/v2/channels/sms/messages',
                    method: 'post',
                    headers: {
                        'X-API-TOKEN': 'nZEy9FwOkcpYfokFYmvtiiPwyn713mSq3fvE',
                    },
                    data: {
                        from: `55${props.contactList.contacts[0].phone}`,
                        to: `55${props.contactList.contacts[0].phone}`,
                        contents: [
                            {
                                type: 'text',
                                text: `HWATCH: \nURGENTE!!! ${props.name} ESTÁ COM PROBLEMAS \nQueda: ${queda} \nSO2: ${data.field5} \nBPM: ${data.field4} \nRiscos: SO2 abaixo de 90 - Hipoxemia \nBPM abaixo de 60 - Braquicardia \nBPM acima de 100 - Taquicardia`,
                            },
                        ],
                    },
                });
                setEnvioSms(false);
            }
        }
    }, [data, props.contactList]);

    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground
                source={image}
                resizeMode="cover"
                style={styles.image}
            >
                <View style={styles.content}>
                    <View style={styles.logoContainer}>
                        <Image
                            source={logo}
                            resizeMode="contain"
                            style={styles.imageLogo}
                        />
                    </View>
                    <View style={styles.banners}>
                        <HeartRateBanner data={data} />
                        {/* <PressionBanner /> */}
                        <OxygenBanner data={data} />
                        <View style={styles.greyStrip} />
                    </View>
                </View>
                <BottomTab {...props} page="main"></BottomTab>
            </ImageBackground>
        </SafeAreaView>
    );
};

export default Main;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        flex: 1,
        paddingVertical: '15%',
        alignItems: 'center',
    },
    image: {
        flex: 1,
    },
    logoContainer: {
        width: '35%',
        height: '22%',
        backgroundColor: 'white',
        borderRadius: 8,
        alignItems: 'center',
    },
    imageLogo: {
        width: '90%',
        height: '90%',
    },
    banners: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        paddingVertical: '8%',
        justifyContent: 'flex-start',
    },
    greyStrip: {
        height: '100%',
        width: '100%',
        backgroundColor: '#EDEDED',
        position: 'absolute',
        zIndex: 1,
        bottom: 0,
    },
});
