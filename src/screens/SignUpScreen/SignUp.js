import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StatusBar } from 'react-native';
import {
    Container,
    Logo,
    Input,
    ErrorMessage,
    Button,
    ButtonText,
    SignInLink,
    SignInLinkText,
} from './styles';

export default class SignUp extends Component {
    static navigationOptions = {
        header: null,
    };

    static propTypes = {
        navigation: PropTypes.shape({
            navigate: PropTypes.func,
            dispatch: PropTypes.func,
            goBack: PropTypes.func,
        }).isRequired,
        signUp: PropTypes.func,
        resetData: PropTypes.func,
    };

    state = {
        email: '',
        password: '',
        confirmPassword: '',
        error: '',
    };

    handleEmailChange = (email) => {
        const { editCredentials } = this.props;
        editCredentials('email', email);
    };

    handlePasswordChange = (password) => {
        const { editCredentials } = this.props;
        editCredentials('password', password);
    };

    handleConfirmPasswordChange = (confirmPassword) => {
        const { editCredentials } = this.props;
        editCredentials('confirmPassword', confirmPassword);
    };

    handleBackToLoginPress = () => {
        this.props.navigation.goBack();
    };

    handleSignUpPress = async () => {
        const { signUp, resetData } = this.props;

        if (this.props.email.length === 0 || this.props.password.length === 0) {
            this.setState(
                { error: 'Preencha todos os campos para continuar!' },
                () => false
            );
        } else {
            try {
                const response = await signUp();

                if (response.status !== 200) {
                    this.setState('Senhas não coincidem!');
                    return;
                }

                this.props.navigation.navigate('Main', {
                    token: response.data.token,
                });
            } catch (_err) {
                console.log('ERRO', _err);
                this.setState({
                    error: 'Houve um problema com o cadastro, verifique os dados preenchidos!',
                });
            }
        }
    };

    render() {
        return (
            <Container>
                <StatusBar hidden />
                <Logo
                    source={require('../../images/logo_FEI.png')}
                    resizeMode="contain"
                />
                <Input
                    placeholder="Endereço de e-mail"
                    value={this.props.email}
                    onChangeText={this.handleEmailChange}
                    autoCapitalize="none"
                    autoCorrect={false}
                />
                <Input
                    placeholder="Senha"
                    value={this.props.password}
                    onChangeText={this.handlePasswordChange}
                    autoCapitalize="none"
                    autoCorrect={false}
                    secureTextEntry
                />
                <Input
                    placeholder="Confirmar Senha"
                    value={this.props.confirmPassword}
                    onChangeText={this.handleConfirmPasswordChange}
                    autoCapitalize="none"
                    autoCorrect={false}
                    secureTextEntry
                />
                {this.state.error.length !== 0 && (
                    <ErrorMessage>{this.state.error}</ErrorMessage>
                )}
                <Button onPress={this.handleSignUpPress}>
                    <ButtonText>Criar conta</ButtonText>
                </Button>
                <SignInLink onPress={this.handleBackToLoginPress}>
                    <SignInLinkText>Voltar ao login</SignInLinkText>
                </SignInLink>
            </Container>
        );
    }
}
