import styled from 'styled-components/native';

export const ContainerHeader = styled.View`
  justify-content: space-between;
  flex-direction: row;
  padding: 10px 10px 0px 10px;
`;

export const ButtonBack = styled.TouchableOpacity``;

export const ButtonCancel = styled.TouchableOpacity``;

export const ContainerBody = styled.View`
  flex: 1;
  margin-top: 10%;
  align-items: center;
`;
export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: black;
  font-family: 'IBMPlexSans';
  margin-top: 60px;
  text-align: center;
`;

export const Description = styled.Text`
  font-family: 'IBMPlexSans';
  font-size: 18px;
  color: black;
  text-align: center;
  margin-top: 33px;
`;

export const InitiateButton = styled.TouchableOpacity`
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  background: #df1616;
  padding: 25px;

  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const InitiateButtonText = styled.Text`
  color: white;
  font-size: 13px;
  font-family: 'IBMPlexSans';
`;
