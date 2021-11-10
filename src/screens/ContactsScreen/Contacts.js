import React, { useContext, useCallback, useEffect } from 'react';
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    ImageBackground,
} from 'react-native';
import BottomTab from '../../components/BottomTab';
import PageHeader from '../../components/PageHeader';
import UserContext from '../../context/userContext';
import { Container, WhiteContainer } from './styles';

import ContactCard from '../../components/ContactCard';
const image = require('../../images/background/bg2.png');

const Contact = (props) => {
    const { state, dispatch } = useContext(UserContext);
    const userId = state.userId;

    const refreshTableData = useCallback(async () => {
        await props.getContacts(userId);
    }, [props.getContacts]);

    useEffect(() => {
        refreshTableData();
    }, [refreshTableData]);

    return (
        <Container>
            <ImageBackground
                source={image}
                resizeMode="cover"
                style={styles.image}
            >
                <PageHeader
                    label="CONTATOS"
                    navigation={props.navigation}
                    rightIcon
                    name="plus-circle"
                    onPress={() => props.navigation.navigate('NewContact')}
                />
                <WhiteContainer>
                    <ContactCard
                        {...props}
                        contactList={props.contactList}
                        deleteContact={props.deleteContact}
                        refreshTableData={refreshTableData}
                    ></ContactCard>
                </WhiteContainer>
            </ImageBackground>
            <BottomTab {...props} page="contacts"></BottomTab>
        </Container>
    );
};

export default Contact;

const styles = StyleSheet.create({
    image: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
