import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
    StatusBar,
    View,
    StyleSheet,
    ImageBackground,
    Text,
    TouchableWithoutFeedback,
    ScrollView,
    CheckBox,
    Picker,
    TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';
import 'moment/locale/pt-br';
import { TextInputMask } from 'react-native-masked-text';
import {
    Container,
    Logo,
    Input,
    InputPassword,
    ErrorMessage,
    Button,
    ButtonText,
    SignInLink,
    SignInLinkText,
} from './styles';
import PageHeader from '../../components/PageHeader';

export default function SignUp({
    email,
    password,
    confirmPassword,
    name,
    street,
    phone,
    number,
    complement,
    cep,
    neighborhood,
    city,
    state,
    editCredentials,
    getCEP,
    navigation,
    signUp,
}) {
    const image = require('../../images/background/bg2.png');

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [isSelected, setIsSelected] = useState(false);
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [date, setDate] = useState(new Date());
    const [birthDate, setBirthDate] = useState('');
    const [sex, setSex] = useState('');
    const [error, setError] = useState('');

    async function onChangeCEP(value) {
        editCredentials('cep', value);

        const cep = value?.replace(/[^0-9]/g, '');

        if (cep?.length !== 8) {
            return;
        }
        await getCEP();
    }

    const getDatePicker = () => {
        let datePicker = (
            <DateTimePicker
                value={date}
                onChange={(evt, selectedDate) => {
                    let currentDate = selectedDate || date
                    setDate(currentDate);
                    setShowDatePicker(false);
                    setBirthDate(currentDate);
                }}
                mode="date"
                placeholder="Digite uma data"
            />
        );

        if (Platform.OS === 'android') {
            datePicker = (
                <View>
                    <TouchableOpacity
                        onPress={() => setShowDatePicker(true)}
                    >
                        <Text style={styles.date}>
                            {date == birthDate
                                ? moment(birthDate).format('D [/] MM [/] YYYY')
                                : 'Selecione uma data'}
                        </Text>
                    </TouchableOpacity>
                    {showDatePicker && datePicker}
                </View>
            );
        }

        return datePicker;
    };

    const changePasswordView = () => {
        setShowPassword(!showPassword);
    };

    const changeSelected = () => {
        setIsSelected(!isSelected);
    };

    const changeConfirmPasswordView = () => {
        setShowConfirmPassword(!showConfirmPassword);
    };

    const changeCredentials = (field, value) => {
        editCredentials(field, value);
    };

    const handleTermsPress = () => {
        navigation.navigate('Terms');
    };

    const handleSignUpPress = async () => {
        if (email.length === 0 || password.length === 0) {
            setError('Preencha todos os campos para continuar!');
        } else {
            try {
                const response = await signUp();

                if (response.status !== 200) {
                    setError('Senhas não coincidem!');
                    return;
                }

                navigation.navigate('Main', {
                    token: response.data.token,
                });
            } catch (_err) {
                console.log('ERRO', _err);
                setError(
                    'Houve um problema com o cadastro, verifique os dados preenchidos!'
                );
            }
        }
    };

    return (
        <View style={styles.mainContainer}>
            <ImageBackground
                source={image}
                resizeMode="stretch"
                style={styles.image}
            >
                <ScrollView>
                <PageHeader
                    label="CADASTRO"
                    navigation={navigation}
                ></PageHeader>
                    <Container>
                        <Text style={styles.text}>
                            Para dar sequência em seu cadastro, precisamos de
                            algumas informações:
                        </Text>
                        <View style={styles.middleContainer}>
                            <Text style={styles.label}>Nome</Text>
                            <Input
                                placeholder="Digite aqui"
                                value={name}
                                onChangeText={(event) =>
                                    changeCredentials('name', event)
                                }
                                autoCapitalize="none"
                                autoCorrect={false}
                            />
                            <Text style={styles.label}>Data de Nascimento</Text>
                            <View style={styles.datePicker}>
                                {getDatePicker()}
                            </View>
                            <Text style={styles.label}>Sexo</Text>
                            <View style={styles.picker}>
                                <Picker
                                    selectedValue={sex}
                                    style={{ flex: 1 }}
                                    onChangeText={(event) =>
                                        changeCredentials('sex', event)
                                    }
                                >
                                    <Picker.Item label="Selecione" value="0" />
                                    <Picker.Item label="Feminino" value="f" />
                                    <Picker.Item label="Masculino" value="m" />
                                </Picker>
                            </View>
                            <Text style={styles.label}>Telefone</Text>
                            <TextInputMask
                                placeholder="Digite aqui"
                                style={styles.input}
                                type={'cel-phone'}
                                options={{
                                    maskType: 'BRL',
                                    withDDD: true,
                                    dddMask: '(99) ',
                                }}
                                value={phone}
                                onChangeText={(event) =>
                                    changeCredentials('phone', event)
                                }
                            />
                            <Text style={styles.label}>CEP</Text>
                            <TextInputMask
                                placeholder="Digite aqui"
                                style={styles.input}
                                type={'zip-code'}
                                value={cep}
                                onChangeText={onChangeCEP}
                            />
                            <Text style={styles.label}>Endereço</Text>
                            <Input
                                placeholder="Digite aqui"
                                value={street}
                                onChangeText={(event) =>
                                    changeCredentials('street', event)
                                }
                                autoCapitalize="none"
                                autoCorrect={false}
                            />
                            <Text style={styles.label}>Número</Text>
                            <Input
                                placeholder="Digite aqui"
                                value={number}
                                onChangeText={(event) =>
                                    changeCredentials('number', event)
                                }
                                autoCapitalize="none"
                                autoCorrect={false}
                            />
                            <Text style={styles.label}>Complemento</Text>
                            <Input
                                placeholder="Digite aqui"
                                value={complement}
                                onChangeText={(event) =>
                                    changeCredentials('complement', event)
                                }
                                autoCapitalize="none"
                                autoCorrect={false}
                            />
                            <Text style={styles.label}>Bairro</Text>
                            <Input
                                placeholder="Digite aqui"
                                value={neighborhood}
                                onChangeText={(event) =>
                                    changeCredentials('neighborhood', event)
                                }
                                autoCapitalize="none"
                                autoCorrect={false}
                            />
                            <Text style={styles.label}>Cidade</Text>
                            <Input
                                placeholder="Digite aqui"
                                value={city}
                                onChangeText={(event) =>
                                    changeCredentials('city', event)
                                }
                                autoCapitalize="none"
                                autoCorrect={false}
                            />
                            <Text style={styles.label}>Estado</Text>
                            <Input
                                placeholder="Digite aqui"
                                value={state}
                                onChangeText={(event) =>
                                    changeCredentials('state', event)
                                }
                                autoCapitalize="none"
                                autoCorrect={false}
                            />

                            <Text style={styles.label}>Email</Text>
                            <Input
                                placeholder="Digite aqui"
                                value={email}
                                onChangeText={(event) =>
                                    changeCredentials('email', event)
                                }
                                autoCapitalize="none"
                                autoCorrect={false}
                            />

                            <Text style={styles.label}>Senha</Text>
                            <View style={styles.inputView}>
                                <InputPassword
                                    placeholder="Digite aqui"
                                    value={password}
                                    onChangeText={(event) =>
                                        changeCredentials('password', event)
                                    }
                                    autoCapitalize="none"
                                    autoCorrect={false}
                                    secureTextEntry={
                                        showPassword ? false : true
                                    }
                                />
                                <TouchableWithoutFeedback
                                    onPress={changePasswordView}
                                >
                                    <View style={styles.inputIcon}>
                                        <Icon
                                            name={
                                                showPassword
                                                    ? 'eye'
                                                    : 'eye-slash'
                                            }
                                            size={20}
                                        />
                                    </View>
                                </TouchableWithoutFeedback>
                            </View>
                            <Text style={styles.label}>Confirmar Senha</Text>
                            <View style={styles.inputView}>
                                <InputPassword
                                    placeholder="Digite aqui"
                                    value={confirmPassword}
                                    onChangeText={(event) =>
                                        changeCredentials(
                                            'confirmPassword',
                                            event
                                        )
                                    }
                                    autoCapitalize="none"
                                    autoCorrect={false}
                                    secureTextEntry={
                                        showConfirmPassword ? false : true
                                    }
                                />
                                <TouchableWithoutFeedback
                                    onPress={changeConfirmPasswordView}
                                >
                                    <View style={styles.inputIcon}>
                                        <Icon
                                            name={
                                                showPassword
                                                    ? 'eye'
                                                    : 'eye-slash'
                                            }
                                            size={20}
                                        />
                                    </View>
                                </TouchableWithoutFeedback>
                            </View>
                            {error.length !== 0 && (
                                <ErrorMessage>{error}</ErrorMessage>
                            )}

                            <View style={styles.checkboxContainer}>
                                <CheckBox
                                    value={isSelected}
                                    onValueChange={changeSelected}
                                    style={styles.checkbox}
                                />
                                <View>
                                    <Text style={styles.labelTermos}>
                                        Estou de acordo com os termos de uso.
                                    </Text>
                                    <Text
                                        style={[
                                            styles.labelTermos,
                                            { fontWeight: 'bold' },
                                        ]}
                                        onPress={handleTermsPress}
                                    >
                                        Clique aqui para mais informações.
                                    </Text>
                                </View>
                            </View>
                            <Button onPress={handleSignUpPress}>
                                <ButtonText>Concluir</ButtonText>
                            </Button>
                        </View>
                    </Container>
                </ScrollView>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
    },
    pageHeader: {
        padding: 50,
        flex: 1,
    },
    middleContainer: {
        flex: 1,
        paddingTop: 20,
        backgroundColor: 'white',
        marginHorizontal: 30,
        borderRadius: 20,
        paddingBottom: 15,
        alignSelf: 'stretch',
        marginBottom: 20,
    },
    image: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        margin: 30,
        color: 'white',
        fontWeight: 'bold',
        fontSize: 15,
        flexWrap: 'wrap',
    },
    label: {
        alignSelf: 'flex-start',
        marginLeft: 20,
        color: '#616161',
        fontSize: 20,
        fontWeight: 'bold',
        flexWrap: 'wrap',
    },
    inputView: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 20,
    },
    inputIcon: {
        flex: 1,
        backgroundColor: '#ededed',
        justifyContent: 'center',
        alignSelf: 'stretch',
        borderTopRightRadius: 5,
        borderBottomRightRadius: 5,
    },
    checkboxContainer: {
        flexDirection: 'row',
        margin: 20,
        marginLeft: 0,
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
        transform: [{ scaleX: 2 }, { scaleY: 2 }],
    },
    checkbox: {
        width: 20,
        height: 20,
        // padding: 10,
        alignSelf: 'center',
    },
    labelTermos: {
        alignSelf: 'flex-start',
        marginLeft: 10,
        color: 'black',
        fontSize: 7,
        flexWrap: 'wrap',
    },
    picker: {
        borderRadius: 5,
        backgroundColor: '#ededed',
        alignSelf: 'stretch',
        marginBottom: 15,
        marginHorizontal: 20,
        fontSize: 16,
    },
    datePicker: {
        fontSize: 20,
        paddingVertical: 13,
        alignSelf: 'stretch',
        backgroundColor: '#ededed',
        marginHorizontal: 20,
        borderRadius: 5,
    },
    date: {
        marginLeft: 10,
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
