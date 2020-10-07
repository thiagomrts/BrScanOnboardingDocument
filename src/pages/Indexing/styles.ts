import styled from 'styled-components/native';
import { Platform } from 'react-native';

export const MainContainer = styled.KeyboardAvoidingView.attrs({
  enabled: Platform.OS === 'android',
  behavior: undefined,
})`
  flex: 1;
  background-color: #df1616;
  padding: 115px 25px;
  justify-content: center;
  align-items: center;
`;
export const Container = styled.View`
  flex: 1;
  justify-content: space-between;
  flex-direction: column;
  background-color: #df1616;
`;
export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: white;
  font-family: 'IBMPlexSans';
  text-align: left;
`;

export const TextInput = styled.TextInput`
  color: #fff;
  font-size: 16px;
  font-family: 'IBMPlexSans';
`;

export const Description = styled.Text`
  font-family: 'IBMPlexSans';
  font-size: 13px;
  color: black;
  text-align: center;
`;

export const PoliticsInput = styled.TouchableOpacity`
  align-items: center;
`;

export const PoliticsText = styled.Text`
  color: white;
  font-size: 13px;
  text-decoration: underline;
  margin-top: 5px;
`;

export const InitiateButton = styled.TouchableOpacity`
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  background: white;
  padding: 25px;

  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const InitiateButtonText = styled.Text`
  color: #df1616;
  font-size: 13px;
  font-family: 'IBMPlexSans';
`;
