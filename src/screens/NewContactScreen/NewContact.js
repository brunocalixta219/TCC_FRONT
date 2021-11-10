import React, { useCallback, useContext } from 'react';
import { ImageBackground } from 'react-native';
import { View, Text, StyleSheet } from 'react-native';
import BottomTab from '../../components/BottomTab';
import ImageContainer from '../../components/ImageContainer';
import PageHeader from '../../components/PageHeader';
import UserContext from '../../context/userContext';
import { TextLabel, Input, Button, ButtonText } from './styles';

const NewContact = ({
    route,
    navigation,
    insertContact,
    updateContact,
    nameContact,
    phoneContact,
}) => {
    const image = require('../../images/background/bg2.png');

    const { state, dispatch } = useContext(UserContext);
    const userId = state.userId;

    //const [user, setUser] = useState(route.params ? route.params : []);
    const changeField = (field, { target: { value } }) => {
        updateContact(field, value);
    };

    const addContact = useCallback(() => {
        insertContact(userId);
        navigation.navigate('Main');
    }, []);

    return (
        <View style={styles.container}>
            <ImageBackground
                source={image}
                resizeMode="cover"
                style={styles.image}
            >
                <PageHeader label="NOVO CONTATO" navigation={navigation} />
                <View style={styles.content}>
                    <View style={styles.greyStrip} />
                    <View style={styles.whiteContainer}>
                        <ImageContainer />
                        <View style={styles.inputsContainer}>
                            <TextLabel>Nome do Contato</TextLabel>
                            <Input
                                value={nameContact}
                                onChange={(event) =>
                                    changeField('nameContact', event)
                                }
                            />

                            <TextLabel>Telefone</TextLabel>
                            <Input
                                value={phoneContact}
                                onChange={(event) =>
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

                            <Button onPress={addContact}>
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

export default NewContact;

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
});
