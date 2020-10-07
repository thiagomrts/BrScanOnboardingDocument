import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
export const Title = styled.Text`
  font-size: 28px;
  font-weight: bold;
  color: black;
  font-family: 'IBMPlexSans';
  margin-top: 20px;
  text-align: center;
`;

export const Description = styled.Text`
  font-family: 'IBMPlexSans';
  font-size: 18px;
  color: black;
  text-align: center;
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
