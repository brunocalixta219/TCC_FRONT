import styled from 'styled-components/native';

const Container = styled.View`

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
    margin-bottom: 20%;
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
    align-self: center;
    font-size: 17px;

`

const Button = styled.TouchableHighlight`
  padding: 10px 80px;
  borderRadius: 8px;
  backgroundColor: #02ac60;
  margin: 15px;
  marginHorizontal: 20px;
  marginBottom: 50px;
`;

const ButtonText = styled.Text`
  color: #fff;
  fontWeight: bold;
  fontSize: 16px;
  textAlign: center;
`;

const Input = styled.TextInput`
  width: 90%;
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
