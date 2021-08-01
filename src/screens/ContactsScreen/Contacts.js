import React, {useState} from 'react';
import { View, Text, StyleSheet, FlatList, ImageBackground } from 'react-native';
import BottomTab from '../../components/BottomTab';
import PageHeader from '../../components/PageHeader';

import {Container, WhiteContainer} from './styles'

import contactsList from '../../data/contactsList';
import ContactCard from '../../components/ContactCard';
const image = require("../../images/background/bg2.png");

const Profile = (props) => {

    // const [contacts, setContacts] = useState(contactsList)
    
    // function makeContactList(contacts, props){
    //     contacts.forEach(element => {
    //         return ( )
    //     });
    // }

    return (
        <Container>
            <ImageBackground source={image} resizeMode="cover" style={styles.image}>
                <PageHeader label="CONTATOS" navigation={props.navigation} rightIcon name="plus-circle" onPress={()=> props.navigation.navigate("NewContact")}/>
                    <WhiteContainer>
                        <ContactCard {...props}></ContactCard>
                    </WhiteContainer>
            </ImageBackground>
            <BottomTab {...props} page="contacts"></BottomTab>
        </Container>
    );
};

export default Profile;

const styles = StyleSheet.create({
    image: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      },
});

  {/* <FlatList 
            keyExtractor={user => user.id}
            data={contacts}
        /> */}