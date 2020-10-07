import React from 'react';
import { Image, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {
  Container,
  Title,
  Description,
  InitiateButton,
  InitiateButtonText,
} from './styles';

import Img from '../../assets/Doc/DocIconFrenteDocumento.png';

const Tutorial1: React.FC = () => {
  const navigation = useNavigation();
  return (
    <>
      <Container>
        <Image source={Img} style={{ tintColor: '#000' }} />

        <Title>Vamos Lá!</Title>
        <Description>
          Tenha seus documentos em mãos,
          {'\n'}
          <Text>RG ou CNH.</Text>
        </Description>
      </Container>

      <InitiateButton
        onPress={() => {
          navigation.navigate('Tutorial2');
        }}
      >
        <InitiateButtonText>AVANÇAR</InitiateButtonText>
      </InitiateButton>
    </>
  );
};

export default Tutorial1;
