import styled from 'styled-components/native';

const Container = styled.View`
    margin-top: 100px;
    flex: 5;
    align-items: center;
    justify-content: flex-start;
    background-color: #026db9;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
`;

const Logo = styled.Image`
    height: 30%;
    margin-bottom: 40px;
`;

const SuccessMessage = styled.Text`
    text-align: center;
    color: #08a092;
    font-size: 16px;
    margin-bottom: 15px;
    margin-horizontal: 20px;
`;

const Input = styled.TextInput`
    padding-horizontal: 20px;
    padding-vertical: 8px;
    border-radius: 5px;
    background-color: #ededed;
    align-self: stretch;
    margin-bottom: 15px;
    margin-horizontal: 20px;
    font-size: 16px;
`;

const InputPassword = styled.TextInput`
    flex: 9;
    padding-horizontal: 20px;
    padding-vertical: 8px;
    background-color: #ededed;
    color: #424242;
    margin-left: 20px;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
`;

const ErrorMessage = styled.Text`
    text-align: center;
    color: #ce2029;
    font-size: 16px;
    margin-bottom: 15px;
    margin-horizontal: 20px;
`;

const Button = styled.TouchableHighlight`
    padding: 10px 80px;
    border-radius: 8px;
    background-color: #02ac60;
    margin: 15px;
    margin-horizontal: 20px;
    margin-bottom: 20px;
`;

const ButtonText = styled.Text`
    color: #fff;
    font-weight: bold;
    font-size: 16px;
    text-align: center;
`;

const SignInLink = styled.TouchableHighlight`
    padding: 10px;
    margin-top: 20px;
`;

const SignInLinkText = styled.Text`
    color: #999;
    font-weight: bold;
    font-size: 16px;
    text-align: center;
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
