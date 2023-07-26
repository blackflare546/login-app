import { TextInput } from 'react-native';
import styled from 'styled-components/native';

export const LoginContainer = styled.View`
    flex: 1;
    align-items: center;
    padding-horizontal: 20px;
    margin-top: 100px;
    gap: 20px;
`;

export const LoginText = styled.Text`
    font-size: 30px;
    font-weight: 600;
    margin-vertical: 40px;
`;

export const EmailInput = styled(TextInput).attrs(
    {placeholder: "Email"}
)`
    background-color: #fff;
    height: 50px;
    width: 100%;
    border-radius: 10px;
    padding: 10px
`

export const PassInput = styled(TextInput).attrs({
    placeholder: "Password",
    secureTextEntry: true
})`
    backgroundColor: #fff;
    height: 50px;
    width: 100%;
    border-radius: 10px;
    padding: 10px;
`
export const LoginButton = styled.TouchableOpacity`
    margin-top: 25px;
    background-color: #5DB075;
    height: 60px;
    width: 100%;
    border-radius: 40px;
    align-items: center;
    justify-content: center;
`;

export const ButtonText = styled.Text`
    font-size: 24px;
    font-weight: 400;
    color: #fff;
`

export const ForgotPassword = styled.Text`
    color: #5DB075;
    font-size: 18px;
    font-weight: 500;
`