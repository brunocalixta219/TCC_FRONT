import React from 'react';
import { ImageBackground } from 'react-native';
import { View, StyleSheet, PixelRatio } from 'react-native';
import BottomTab from '../../components/BottomTab';
import ImageContainer from '../../components/ImageContainer';
import PageHeader from '../../components/PageHeader';
import { Container, WhiteContainer, TextLabel, TextContainer, Text, TermButton, TermButtonText, TermText } from './styles';

const Profile = (props) => {
const image = require('../../images/background/bg2.png')

const {user} = require('../../data/user')

    return (
    <View style={styles.container}>
        <ImageBackground source={image} resizeMode="cover" style={styles.image}>
            <PageHeader label="PERFIL" navigation={props.navigation} route={props.route} rightIcon name="pencil" onPress={() => props.navigation.navigate("EditProfile", user)} />
                <ImageContainer {...props}/>
                <Container>
                    <WhiteContainer>
                        <TextLabel>Nome</TextLabel>
                        <TextContainer><Text>{user.name} </Text></TextContainer>
                        
                        <TextLabel>Idade</TextLabel>
                        <TextContainer><Text>{user.age}</Text></TextContainer>
                                              
                        <TextLabel>Telefone</TextLabel>
                        <TextContainer><Text>{user.phone}</Text></TextContainer>
                        
                        <TextLabel>E-mail</TextLabel>
                        <TextContainer><Text>{user.email}</Text></TextContainer>
                    
                    
                        <TermText>termos de uso do H-WATCH.</TermText>
                        <TermButton onPress={() => props.navigation.navigate("Terms")}>
                            <TermButtonText>Clique aqui para mais informações</TermButtonText>
                        </TermButton>
                    </WhiteContainer>
                </Container>
            <BottomTab {...props} page="profile"></BottomTab>
        </ImageBackground>
    </View>)
    
    
    ;
};

export default Profile;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    }, 
    image: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      },
});