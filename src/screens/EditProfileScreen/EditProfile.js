import React, { useContext, useCallback, useEffect } from 'react';
import { ImageBackground } from 'react-native';
import { View, StyleSheet, ScrollView } from 'react-native';
import BottomTab from '../../components/BottomTab';
import ImageContainer from '../../components/ImageContainer';
import PageHeader from '../../components/PageHeader';
import {
    Container,
    WhiteContainer,
    TextLabel,
    TextContainer,
    Text,
    TermButton,
    TermButtonText,
    TermText,
    Button,
    ButtonText,
    Input,
} from './styles';
import UserContext from '../../context/userContext';

const EditProfile = (props) => {
    const image = require('../../images/background/bg2.png');

    const { state, dispatch } = useContext(UserContext);
    const userId = state.userId;

    const refreshData = useCallback(async () => {
        await props.getOne(userId);
    }, [props.getOne]);

    useEffect(() => {
        refreshData();
    }, [refreshData]);

    async function onChangeCEP(value) {
        props.editCredentials('cep', value);

        const cep = value?.replace(/[^0-9]/g, '');

        if (cep?.length !== 8) {
            return;
        }
        await props.getCEP();
    }

    const changeCredentials = (field, value) => {
        props.editCredentials(field, value);
    };

    return (
        <View style={styles.container}>
            <ImageBackground
                source={image}
                resizeMode="cover"
                style={styles.image}
            >
                <PageHeader
                    label="EDITAR PERFIL"
                    navigation={props.navigation}
                />
                <Container>
                    <WhiteContainer>
                        <ImageContainer {...props} editProfile />
                        <ScrollView>
                            <TextLabel>Nome</TextLabel>
                            <Input
                                value={props.name}
                                onChangeText={(event) =>
                                    changeCredentials('name', event)
                                }
                            ></Input>

                            <TextLabel>Idade</TextLabel>
                            <Input
                                value={props.birthDate}
                                // onChangeText={(newValue) =>

                                // }
                            ></Input>

                            <TextLabel>Telefone</TextLabel>
                            <Input
                                value={props.phone}
                                onChangeText={(event) =>
                                    changeCredentials('phone', event)
                                }
                            ></Input>

                            <TextLabel>E-mail</TextLabel>
                            <Input
                                value={props.email}
                                onChangeText={(event) =>
                                    changeCredentials('email', event)
                                }
                            ></Input>

                            <TextLabel>Sexo</TextLabel>
                            <Input
                                value={props.sex}
                                // onChangeText={(newValue) =>

                                // }
                            ></Input>

                            <TextLabel>Endereço</TextLabel>
                            <Input
                                value={props.street}
                                onChangeText={(event) =>
                                    changeCredentials('street', event)
                                }
                            ></Input>

                            <TextLabel>Número</TextLabel>
                            <Input
                                value={props.number}
                                onChangeText={(event) =>
                                    changeCredentials('number', event)
                                }
                            ></Input>

                            <TextLabel>Complemento</TextLabel>
                            <Input
                                value={props.complement}
                                onChangeText={(event) =>
                                    changeCredentials('complement', event)
                                }
                            ></Input>

                            <TextLabel>Bairro</TextLabel>
                            <Input
                                value={props.neighborhood}
                                onChangeText={(event) =>
                                    changeCredentials('neighborhood', event)
                                }
                            ></Input>

                            <TextLabel>Cidade</TextLabel>
                            <Input
                                value={props.city}
                                onChangeText={(event) =>
                                    changeCredentials('city', event)
                                }
                            ></Input>

                            <TextLabel>Estado</TextLabel>
                            <Input
                                value={props.state}
                                onChangeText={(event) =>
                                    changeCredentials('state', event)
                                }
                            ></Input>

                            <Button
                                onPress={() =>
                                    props.navigation.navigate('Profile')
                                }
                            >
                                <ButtonText> Finalizar </ButtonText>
                            </Button>
                        </ScrollView>
                    </WhiteContainer>
                </Container>
                <BottomTab {...props} page="profile"></BottomTab>
            </ImageBackground>
        </View>
    );
};

export default EditProfile;

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
