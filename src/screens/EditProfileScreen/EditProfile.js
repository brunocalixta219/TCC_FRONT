import React, {useState} from 'react';
import { ImageBackground } from 'react-native';
import { View, StyleSheet, ScrollView} from 'react-native';
import BottomTab from '../../components/BottomTab';
import ImageContainer from '../../components/ImageContainer';
import PageHeader from '../../components/PageHeader';
import { Container, WhiteContainer, TextLabel, TextContainer, Text, TermButton, TermButtonText, TermText, Button, ButtonText, Input } from './styles';

const Profile = (props) => {

const image = require('../../images/background/bg2.png')
const [user, setUser] = useState(props.route.params)


    return (
    <View style={styles.container}>
        <ImageBackground source={image} resizeMode="cover" style={styles.image}>
            <PageHeader label="EDITAR PERFIL" navigation={props.navigation}/>
                <Container>
                    <WhiteContainer>
                        <ImageContainer {...props} editProfile />
                        <ScrollView>
                            <TextLabel>Nome</TextLabel>
                            <Input value={user.name} onChangeText={(newValue) => setUser({...user, name: newValue})}></Input>
                            
                            <TextLabel>Idade</TextLabel>
                            <Input value={user.birthDate} onChangeText={(newValue) => setUser({...user, birthDate: newValue})}></Input>
                                                
                            <TextLabel>Telefone</TextLabel>
                            <Input value={user.phone} onChangeText={(newValue) => setUser({...user, phone: newValue})}></Input>
                            
                            <TextLabel>E-mail</TextLabel>
                            <Input value={user.email} onChangeText={(newValue) => setUser({...user, email: newValue})}></Input>
                            
                            <TextLabel>Sexo</TextLabel>
                            <Input value={user.sex} onChangeText={(newValue) => setUser({...user, sex: newValue})}></Input>
                            
                            <TextLabel>Endereço</TextLabel>
                            <Input value={user.address} onChangeText={(newValue) => setUser({...user, address: newValue})}></Input>
                            
                            <TextLabel>Número</TextLabel>
                            <Input value={user.number} onChangeText={(newValue) => setUser({...user, number: newValue})}></Input>
                            
                            <TextLabel>Complemento</TextLabel>
                            <Input value={user.complement} onChangeText={(newValue) => setUser({...user, complement: newValue})}></Input>
                            
                            <TextLabel>Bairro</TextLabel>
                            <Input value={user.neighborhood} onChangeText={(newValue) => setUser({...user, neighborhood: newValue})}></Input>
                           
                            <TextLabel>Cidade</TextLabel>
                            <Input value={user.city} onChangeText={(newValue) => setUser({...user, city: newValue})}></Input>
                           
                            <TextLabel>Estado</TextLabel>
                            <Input value={user.uf} onChangeText={(newValue) => setUser({...user, uf: newValue})}></Input>

                        <Button onPress={() => props.navigation.navigate("Profile")}>
                            <ButtonText> Finalizar </ButtonText>
                        </Button>
                        </ScrollView>
                        
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