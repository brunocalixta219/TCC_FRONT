import React, { useContext, useEffect, useState } from 'react';
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

    const url =
        'https://api.thingspeak.com/channels/1548049/feeds.json?results=1';

    const { state, dispatch } = useContext(UserContext);

    useEffect(() => {
        dispatch({
            type: 'setUserId',
            payload: userId,
        });
    }, [userId]);

    useEffect(() => {
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
