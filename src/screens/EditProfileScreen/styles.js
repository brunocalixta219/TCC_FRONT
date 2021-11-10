import styled from 'styled-components/native';

const Container = styled.View`
    height: 90%;
    width: 100%;
    margin-top: 30px;
    background-color: #016db8;
    border-radius: 15px;
    align-items: center;
    justify-content: flex-start;
    position: absolute;
    bottom: 0;
`;
const WhiteContainer = styled.View`
    margin-top: 10%;
    width: 90%;
    background-color: white;
    border-radius: 8px;
    padding: 15px;
    justify-content: center;
    align-items: center;
    margin-bottom: 20%;
`;
const TextLabel = styled.Text`
    margin-top: 5px;
    font-weight: bold;
    font-size: 18px;
`;
const TextContainer = styled.View`
    padding-horizontal: 10px;
    justify-content: center;
    width: 100%;
    height: 40px;
    background-color: #e7e7e7;
    border-radius: 8px;
    align-items: center;
`;
const Text = styled.Text`
    align-self: center;
    font-size: 17px;
`;

const Button = styled.TouchableHighlight`
    padding: 10px 80px;
    border-radius: 8px;
    background-color: #02ac60;
    margin: 15px;
    margin-horizontal: 20px;
    margin-bottom: 50px;
`;

const ButtonText = styled.Text`
    color: #fff;
    font-weight: bold;
    font-size: 16px;
    text-align: center;
`;

const Input = styled.TextInput`
    width: 90%;
    padding-horizontal: 20px;
    padding-vertical: 8px;
    border-radius: 5px;
    background-color: #ededed;
    align-self: stretch;
    margin-bottom: 15px;
    margin-horizontal: 20px;
    font-size: 16px;
`;

export {
    Container,
    WhiteContainer,
    TextLabel,
    TextContainer,
    Text,
    Button,
    ButtonText,
    Input,
};
