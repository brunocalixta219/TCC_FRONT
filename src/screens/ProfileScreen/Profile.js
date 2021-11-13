import React, { useContext, useCallback, useEffect } from 'react';
import { ImageBackground } from 'react-native';
import { View, StyleSheet, PixelRatio } from 'react-native';
import BottomTab from '../../components/BottomTab';
import ImageContainer from '../../components/ImageContainer';
import PageHeader from '../../components/PageHeader';
import moment from 'moment';
import {
    Container,
    WhiteContainer,
    TextLabel,
    TextContainer,
    Text,
    TermButton,
    TermButtonText,
    TermText,
} from './styles';
import UserContext from '../../context/userContext';

const Profile = (props) => {
    const image = require('../../images/background/bg2.png');

    const { state, dispatch } = useContext(UserContext);
    const userId = state.userId;

    const refreshData = useCallback(async () => {
        await props.getOne(userId);
    }, [props.getOne]);

    useEffect(() => {
        refreshData();
    }, [refreshData]);

    return (
        <View style={styles.container}>
            <ImageBackground
                source={image}
                resizeMode="cover"
                style={styles.image}
            >
                <PageHeader
                    label="PERFIL"
                    navigation={props.navigation}
                    route={props.route}
                    rightIcon
                    name="pencil"
                    onPress={() => props.navigation.navigate('EditProfile')}
                />
                <Container>
                    <WhiteContainer>
                        <ImageContainer {...props} />
                        <TextLabel>Nome</TextLabel>
                        <TextContainer>
                            <Text>{props.name} </Text>
                        </TextContainer>

                        <TextLabel>Data de Nascimento</TextLabel>
                        <TextContainer>
                            <Text>
                                {moment(props.birthDate).format(
                                    'D [/] MM [/] YYYY'
                                )}
                            </Text>
                        </TextContainer>

                        <TextLabel>Telefone</TextLabel>
                        <TextContainer>
                            <Text>{`(${props.phone.substring(
                                0,
                                2
                            )}) ${props.phone.substring(
                                2,
                                7
                            )}-${props.phone.substring(7)}`}</Text>
                        </TextContainer>

                        <TextLabel>E-mail</TextLabel>
                        <TextContainer>
                            <Text>{props.email}</Text>
                        </TextContainer>

                        <TermText>termos de uso do H-WATCH.</TermText>
                        <TermButton
                            onPress={() => props.navigation.navigate('Terms')}
                        >
                            <TermButtonText>
                                Clique aqui para mais informações
                            </TermButtonText>
                        </TermButton>
                    </WhiteContainer>
                </Container>
                <BottomTab {...props} page="profile"></BottomTab>
            </ImageBackground>
        </View>
    );
};

export default Profile;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    image: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
