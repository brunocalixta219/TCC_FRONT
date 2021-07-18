import styled from 'styled-components';

const Container = styled.View`
  flex: 5;
  alignItems: center;
  justifyContent: flex-start;
  backgroundColor: #026db9;
  borderTopLeftRadius: 20px;
  borderTopRightRadius: 20px;
`;

const Logo = styled.Image`
  height: 30%;
  marginBottom: 40px;
`;

const SuccessMessage = styled.Text`
  textAlign: center;
  color: #08a092;
  fontSize: 16px;
  marginBottom: 15px;
  marginHorizontal: 20px;
`;

const Input = styled.TextInput`
  paddingHorizontal: 20px;
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

const SignInLink = styled.TouchableHighlight`
  padding: 10px;
  marginTop: 20px;
`;

const SignInLinkText = styled.Text`
  color: #999;
  fontWeight: bold;
  fontSize: 16px;
  textAlign: center;
`;

export {
  Container,
  Logo,
  SuccessMessage,
  Input,
  InputPassword,
  ErrorMessage,
  Button,
  ButtonText,
  SignInLink,
  SignInLinkText,
};