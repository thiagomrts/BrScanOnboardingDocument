import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import {
  Container,
  Title,
  Description,
  InitiateButton,
  InitiateButtonText,
} from './styles';

const Ok: React.FC = () => {
  const navigation = useNavigation();
  return (
    <>
      <Container>
        <Icon name="check" size={80} color="#000" />

        <Title>Pronto !</Title>
        <Description>Seu documento foi recebido</Description>
      </Container>

      <InitiateButton
        onPress={() => {
          navigation.navigate('Home');
        }}
      >
        <InitiateButtonText>FINALIZAR</InitiateButtonText>
      </InitiateButton>
    </>
  );
};

export default Ok;
