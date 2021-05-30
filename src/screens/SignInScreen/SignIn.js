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
    SignUpLink,
    SignUpLinkText,
} from './styles';

export default class SignIn extends Component {
    static navigationOptions = {
        header: null,
    };

    static propTypes = {
        navigation: PropTypes.shape({
            navigate: PropTypes.func,
            dispatch: PropTypes.func,
        }).isRequired,
        signIn: PropTypes.func,
        resetData: PropTypes.func,
    };

    state = {
        email: '',
        password: '',
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

    handleCreateAccountPress = () => {
        this.props.navigation.navigate('SignUp');
    };

    handleSignInPress = async () => {
        const { signIn, resetData } = this.props;

        if (this.props.email.length === 0 || this.props.password.length === 0) {
            this.setState(
                { error: 'Preencha usuário e senha para continuar!' },
                () => false
            );
        } else {
            try {
                const response = await signIn();

                if (response.status !== 200) {
                    this.setState('Usuário ou senha incorretos!');
                    return;
                }

                this.props.navigation.navigate('Main', {
                    token: response.data.token,
                });
            } catch (_err) {
                console.log('ERRO', _err);
                this.setState({
                    error: 'Houve um problema com o login, verifique suas credenciais!',
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
                {this.state.error.length !== 0 && (
                    <ErrorMessage>{this.state.error}</ErrorMessage>
                )}
                <Button onPress={this.handleSignInPress}>
                    <ButtonText>Entrar</ButtonText>
                </Button>
                <SignUpLink onPress={this.handleCreateAccountPress}>
                    <SignUpLinkText>Criar conta</SignUpLinkText>
                </SignUpLink>
            </Container>
        );
    }
}
