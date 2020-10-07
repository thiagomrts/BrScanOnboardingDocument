import styled from 'styled-components/native';
import { Platform } from 'react-native';

export const ContainerHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px 25px 0px 60px;
  background-color: #000;
`;

export const ButtonBack = styled.TouchableOpacity``;

export const MainContainer = styled.KeyboardAvoidingView.attrs({
  enabled: Platform.OS === 'android',
  behavior: undefined,
})`
  flex: 1;
  background-color: #000;
  justify-content: center;
  align-items: center;

  padding: 20px 25px 35px 30px; ;
`;

export const ImageContainer = styled.View`
  height: 100%;
  width: 100%;

  align-items: center;
  justify-content: center;
  background-color: white;
`;

export const ButtonCaptar = styled.TouchableOpacity``;

export const Title = styled.Text`
  font-size: 16px;
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
