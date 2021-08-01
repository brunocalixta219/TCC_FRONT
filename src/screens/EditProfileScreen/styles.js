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
    text-align: center;
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
    align-self: center;
    font-size: 17px;
    font-family: roboto;

`

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

export {
    Container,
    WhiteContainer,
    TextLabel, 
    TextContainer,
    Text, 
    Button, 
    ButtonText,
    Input

};
