import React from 'react';
import { Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {
  Container,
  Title,
  Description,
  InitiateButton,
  InitiateButtonText,
} from './styles';

import homeImg from '../../assets/IconHome.png';

const Home: React.FC = () => {
  const navigation = useNavigation();
  return (
    <>
      <Container>
        <Image source={homeImg} style={{ tintColor: '#000' }} />

        <Title>BrSafe</Title>
        <Description>Bioface</Description>
      </Container>

      <InitiateButton
        onPress={() => {
          navigation.navigate('Indexing');
        }}
      >
        <InitiateButtonText>INICIAR</InitiateButtonText>
      </InitiateButton>
    </>
  );
};

export default Home;
