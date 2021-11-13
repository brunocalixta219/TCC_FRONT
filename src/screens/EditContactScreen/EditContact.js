import React, { useCallback, useEffect } from 'react';
import { ImageBackground } from 'react-native';
import { View, Text, StyleSheet } from 'react-native';
import BottomTab from '../../components/BottomTab';
import ImageContainer from '../../components/ImageContainer';
import PageHeader from '../../components/PageHeader';
import { TextInputMask } from 'react-native-masked-text';
import { TextLabel, Input, Button, ButtonText } from './styles';

const EditContact = ({
    route,
    navigation,
    nameContact,
    phoneContact,
    getContact,
    updateDataContact,
    updateContact,
}) => {
    const image = require('../../images/background/bg2.png');
    const contactId = route.params._id;

    const changeField = (field, value) => {
        updateContact(field, value);
    };

    const refreshInputData = useCallback(async () => {
        await getContact(contactId);
    }, [getContact]);

    useEffect(() => {
        refreshInputData();
    }, [refreshInputData]);

    const _updateDataContact = useCallback(() => {
        updateDataContact(contactId);
        navigation.navigate('Main');
    }, [updateDataContact]);

    return (
        <View style={styles.container}>
            <ImageBackground
                source={image}
                resizeMode="cover"
                style={styles.image}
            >
                <PageHeader label="EDITAR CONTATO" navigation={navigation} />
                <View style={styles.content}>
                    <View style={styles.greyStrip} />
                    <View style={styles.whiteContainer}>
                        <ImageContainer />
                        <View style={styles.inputsContainer}>
                            <TextLabel>Nome do Contato</TextLabel>
                            <Input
                                value={nameContact}
                                onChangeText={(event) =>
                                    changeField('nameContact', event)
                                }
                            />

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
                                value={phoneContact}
                                onChangeText={(event) =>
                                    changeField('phoneContact', event)
                                }
                            />
                        </View>
                        <View style={styles.warningContainer}>
                            <Text style={{ fontWeight: 'bold', fontSize: 28 }}>
                                AVISO
                            </Text>
                            <Text
                                style={{
                                    textAlign: 'justify',
                                    marginTop: '5%',
                                }}
                            >
                                Estaremos acionando este contato em algum caso
                                de emergência, com base em seu monitoramento.
                            </Text>

                            <Button onPress={_updateDataContact}>
                                <ButtonText>Concluir</ButtonText>
                            </Button>
                        </View>
                    </View>
                </View>

                <BottomTab navigation={navigation} page="contacts"></BottomTab>
            </ImageBackground>
        </View>
    );
};

export default EditContact;

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
    greyStrip: {
        height: '70%',
        width: '100%',
        backgroundColor: '#EDEDED',
        position: 'absolute',
        zIndex: 0,
        bottom: 0,
    },
    content: {
        flex: 1,
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    whiteContainer: {
        //flex: 1,
        alignItems: 'center',
        backgroundColor: 'white',
        width: '85%',
        borderRadius: 8,
        paddingVertical: '5%',
    },
    inputsContainer: {
        width: '90%',
    },
    warningContainer: {
        width: '90%',
        alignItems: 'center',
        marginTop: '8%',
    },
    input: {
        paddingHorizontal: 10,
        justifyContent: 'center',
        width: '100%',
        height: 40,
        backgroundColor: '#e7e7e7',
        borderRadius: 8,
        alignItems: 'center',
        textAlignVertical: 'center',
    },
});
