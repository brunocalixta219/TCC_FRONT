import styled from "styled-components";

const Container = styled.View`
  alignItems: center;
  justifyContent: center;
  backgroundColor: white;
  height: 70%;
  width: 80%;
  borderRadius: 8px;
  paddingBottom: 15px;
`;

const Logo = styled.Image`
  height: 50%;
  width: 50%;
  marginBottom: 20px;
`;

const Input = styled.TextInput`
  paddingHorizontal: 30px;
  paddingVertical: 8px;
  borderRadius: 5px;
  backgroundColor: #ededed;
  alignSelf: stretch;
  marginBottom: 15px;
  marginHorizontal: 20px;
  fontSize: 16px;
`;

const InputPassword = styled.TextInput`
flex: 9;
paddingHorizontal: 20px;
paddingVertical: 8px;
backgroundColor: #ededed;
color: #424242;
marginLeft: 20px;
borderTopLeftRadius: 5px;
borderBottomLeftRadius: 5px;
`;

const ErrorMessage = styled.Text`
  textAlign: center;
  color: #ce2029;
  fontSize: 16px;
  marginBottom: 15px;
  marginHorizontal: 20px;
`;

const Button = styled.TouchableHighlight`
  padding: 10px 80px;
  borderRadius: 8px;
  backgroundColor: #02ac60;
  margin: 15px;
  marginHorizontal: 20px;
  marginBottom: 20px;
`;

const ButtonText = styled.Text`
  color: #fff;
  fontWeight: bold;
  fontSize: 16px;
  textAlign: center;
`;

const SignUpLink = styled.TouchableHighlight`
  padding: 10px;
  marginTop: 20px;
`;

const SignUpLinkText = styled.Text`
  color: #999;
  fontWeight: bold;
  fontSize: 16px;
  textAlign: center;
`;

export {
  Container,
  Logo,
  Input,
  InputPassword,
  ErrorMessage,
  Button,
  ButtonText,
  SignUpLink,
  SignUpLinkText,
};
