import React, { useContext, useCallback, useEffect, useState } from 'react';
import { ImageBackground } from 'react-native';
import { View, StyleSheet, ScrollView } from 'react-native';
import BottomTab from '../../components/BottomTab';
import PageHeader from '../../components/PageHeader';
import { TextInputMask } from 'react-native-masked-text';
import {
    Container,
    WhiteContainer,
    TextLabel,
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

    const _updateProfile = useCallback(() => {
        props.updateProfile(userId);
        props.navigation.navigate('Main');
    }, [props.updateProfile]);

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
                        {/* <ImageContainer {...props} editProfile /> */}
                        <ScrollView>
                            <TextLabel>Telefone</TextLabel>
                            <TextInputMask
                                placeholder="Digite aqui"
                                style={styles.input}
                                type={'cel-phone'}
                                options={{
                                    maskType: 'BRL',
                                    withDDD: true,
                                    dddMask: '(99) ',
                                }}
                                value={props.phone}
                                onChangeText={(event) =>
                                    changeCredentials('phone', event)
                                }
                            />

                            <TextLabel>CEP</TextLabel>
                            <TextInputMask
                                placeholder="Digite aqui"
                                style={styles.input}
                                type={'zip-code'}
                                value={props.cep}
                                onChangeText={onChangeCEP}
                            />

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

                            <Button onPress={_updateProfile}>
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
    input: {
        paddingHorizontal: 20,
        paddingVertical: 8,
        borderRadius: 5,
        backgroundColor: '#ededed',
        alignSelf: 'stretch',
        marginBottom: 15,
        marginHorizontal: 20,
        fontSize: 16,
    },
});
