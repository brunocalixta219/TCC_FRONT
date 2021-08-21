import styled from 'styled-components/native';

const Container = styled.View`
    flex: 1;
    height: 90%;
    width: 100%;
    margin-top: 30px;
    background-color: #016DB8;
    border-radius: 15px;
    align-items: center;
    justify-content: flex-start;
    position: absolute;
    bottom: 0;
`
const WhiteContainer = styled.View`
    margin-top: 10%;
    width: 90%;
    background-color: white;
    border-radius: 8px;
    padding: 15px;
    justify-content: center;
    align-items: center;
`
const TextLabel = styled.Text`
    margin-top: 5px;
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
