import React, { Component } from "react";
import PropTypes from "prop-types";
import Icon from 'react-native-vector-icons/FontAwesome';
import { StatusBar, View, StyleSheet, ImageBackground, Text, TouchableWithoutFeedback } from "react-native";
import {
  Container,
  Logo,
  Input,
  InputPassword,
  ErrorMessage,
  Button,
  ButtonText,
  SignUpLink,
  SignUpLinkText,
} from "./styles";

const image = require("../../images/background/bg1.png");

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
    email: "",
    password: "",
    error: "",
    showPassword: false,
  };

  handleEmailChange = (email) => {
    const { editCredentials } = this.props;
    editCredentials("email", email);
  };

  handlePasswordChange = (password) => {
    const { editCredentials } = this.props;
    editCredentials("password", password);
  };

  handleCreateAccountPress = () => {
    this.props.navigation.navigate("SignUp");
  };

  // handleSignInPress = async () => {
  //   const { signIn, resetData } = this.props;

  //   if (this.props.email.length === 0 || this.props.password.length === 0) {
  //     this.setState(
  //       { error: "Preencha usuário e senha para continuar!" },
  //       () => false
  //     );
  //   } else {
  //     try {
  //       const response = await signIn();

  //       if (response.status !== 200) {
  //         this.setState("Usuário ou senha incorretos!");
  //         return;
  //       }

  //       this.props.navigation.navigate("Main", {
  //         token: response.data.token,
  //       });
  //     } catch (_err) {
  //       console.log("ERRO", _err);
  //       this.setState({
  //         error: "Houve um problema com o login, verifique suas credenciais!",
  //       });
  //     }
  //   }
  // };

  handleSignInPress = () => this.props.navigation.navigate("Main")


  changePasswordView = () => {
    this.setState({showPassword: !this.state.showPassword})
  }

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={image} resizeMode="cover" style={styles.image}>
          <Container>
            <StatusBar hidden />
            <Logo
              source={require("../../images/logo/logo1.png")}
              resizeMode="contain"
            />
            <Text style={styles.label}>Email</Text>
            <Input
              value={this.props.email}
              onChangeText={this.handleEmailChange}
              autoCapitalize="none"
              autoCorrect={false}
            />
            <Text style={styles.label}>Senha</Text>
            <View style={styles.inputView}>
              <InputPassword
                value={this.props.password}
                onChangeText={this.handlePasswordChange}
                autoCapitalize="none"
                autoCorrect={false}
                secureTextEntry = {this.state.showPassword? false : true}
              />
              <TouchableWithoutFeedback onPress={this.changePasswordView}>
                <View style={styles.inputIcon}>
                <Icon
                  name={this.state.showPassword ? "eye" : "eye-slash"}
                  size={20}
                />
                </View>
              </TouchableWithoutFeedback>
            </View>
            
            {this.state.error.length !== 0 && (
              <ErrorMessage>{this.state.error}</ErrorMessage>
            )}
            <Button onPress={this.handleSignInPress}>
              <ButtonText>Entrar</ButtonText>
            </Button>
          </Container>
          <SignUpLink
            onPress={this.handleCreateAccountPress}
            style={styles.signUpButton}
          >
            <SignUpLinkText style={styles.text}>Criar conta</SignUpLinkText>
          </SignUpLink>
        </ImageBackground>
      </View>

  
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "white",
  },
  signUpButton: {
    padding: 10,
    paddingLeft: 60,
    paddingRight: 60,
    backgroundColor: "#fd9202",
    borderRadius: 8,
    color: "white",

    shadowColor: "#FFF",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  label: {
    alignSelf: 'flex-start',
    marginLeft: 20,
    color: '#616161',
    fontSize: 20,
    fontWeight: 'bold',
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
  
});
