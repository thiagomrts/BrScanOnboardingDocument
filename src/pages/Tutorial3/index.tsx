import React from 'react';
import { Image, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import {
  ContainerBody,
  Title,
  Description,
  InitiateButton,
  InitiateButtonText,
  ContainerHeader,
  ButtonBack,
  ButtonCancel,
} from './styles';

import Img from '../../assets/Doc/DocIconLuz.png';
import ImgBack from '../../assets/IconLeft.png';

const Tutorial3: React.FC = () => {
  const navigation = useNavigation();
  return (
    <>
      <ContainerHeader>
        <ButtonBack
          onPress={() => {
            navigation.navigate('Tutorial2');
          }}
        >
          <Image source={ImgBack} style={{ tintColor: '#000' }} />
        </ButtonBack>
        <ButtonCancel
          onPress={() => {
            navigation.navigate('Tutorial1');
          }}
        >
          <Icon name="x" size={30} color="#000" />
        </ButtonCancel>
      </ContainerHeader>
      <ContainerBody>
        <Image source={Img} style={{ tintColor: '#000' }} />

        <Title>
          Escolha um local
          {'\n'}
          <Text>iluminado</Text>
        </Title>
        <Description>
          Posicione seu documento em uma
          {'\n'}
          <Text>superfície lisa e, de preferência, escura.</Text>
        </Description>
      </ContainerBody>

      <InitiateButton
        onPress={() => {
          navigation.navigate('Tutorial4');
        }}
      >
        <InitiateButtonText>ENTENDI</InitiateButtonText>
      </InitiateButton>
    </>
  );
};

export default Tutorial3;
