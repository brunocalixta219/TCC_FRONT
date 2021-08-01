import styled from 'styled-components/native';

const Container = styled.View`
    flex: 1;
    height: 100%;
    width: 100%;
    margin-top: 30px;
    background-color: #016DB8;
    border-radius: 8px;
    align-items: center;
`
const WhiteContainer = styled.View`
    flex: 1;
    height: 70%;
    width: 80%;
    background-color: white;
    border-radius: 8px;
    margin-bottom: 100px;
    margin-top: 10px;
    padding: 15px;
    padding-top: 60px;
    align-items: center;
`
const TextLabel = styled.Text`
    margin-top: 5px;
    font-family: roboto;
    font-weight: bold;
    font-size: 18px;
`
const TextContainer = styled.View`
    padding-horizontal: 10px;
    justify-content: center;
    width: 100%;
    height: 40px;
    background-color: #E7E7E7;
    border-radius: 8px;
    align-items: center;

`
const Text = styled.Text`
    font-size: 17px;
    font-family: roboto;

`

const TermText = styled.Text`
    margin-top: 10px;
    font-weight: bold;
`





const TermButton = styled.TouchableOpacity`
    align-items: center;
    padding-horizontal: 10px;
    background: #013E5D;
    width: 80%;
    border-radius: 8px;
`
const TermButtonText = styled.Text`
    align-items: center;
    color: white;
`


export {
    Container,
    WhiteContainer,
    TextLabel, 
    TextContainer,
    Text, 
    TermButton, 
    TermButtonText,
    TermText
};
