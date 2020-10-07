import styled from 'styled-components/native';
import { Platform } from 'react-native';

export const ContainerHeader = styled.View`
  justify-content: space-between;
  padding: 10px 10px 0px 10px;
  background-color: #df1616;
`;

export const ButtonBack = styled.TouchableOpacity``;

export const MainContainer = styled.KeyboardAvoidingView.attrs({
  enabled: Platform.OS === 'android',
  behavior: undefined,
})`
  flex: 1;
  background-color: #df1616;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 15px;
  color: white;
  font-family: 'IBMPlexSans';
  text-align: center;
`;

export const ContainerDocument = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  height: 25%;
  padding: 20%;
  background-color: #df1616;
`;

export const TextButton = styled.TouchableOpacity``;

export const TextButtonText = styled.Text`
  color: white;
`;

export const DocumentButton = styled.TouchableOpacity``;

export const ContainerImg = styled.View`
  align-items: center;
  background-color: #df1616;
`;
