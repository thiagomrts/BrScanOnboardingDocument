import React from 'react';
import { Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {
  MainContainer,
  Title,
  TextButton,
  DocumentButton,
  TextButtonText,
  ContainerDocument,
  ContainerImg,
  ContainerHeader,
  ButtonBack,
} from './styles';

import RGImg from '../../assets/Doc/IconRG.png';
import CNHImg from '../../assets/Doc/IconCNH.png';
import Line from '../../assets/Doc/Line.png';
import ImgBack from '../../assets/IconLeft.png';

const Document1: React.FC = () => {
  const navigation = useNavigation();

  return (
    <>
      <ContainerHeader>
        <ButtonBack
          onPress={() => {
            navigation.navigate('Tutorial1');
          }}
        >
          <Image source={ImgBack} style={{ tintColor: '#fff' }} />
        </ButtonBack>
      </ContainerHeader>

      <MainContainer>
        <Title>Selecione o tipo de dcumento.</Title>
      </MainContainer>

      <ContainerDocument>
        <DocumentButton
          onPress={() => {
            navigation.navigate('DocumentRG');
          }}
        >
          <Image source={RGImg} style={{ tintColor: '#fff' }} />
        </DocumentButton>
        <TextButton
          onPress={() => {
            navigation.navigate('DocumentRG');
          }}
        >
          <TextButtonText>USAR MEU RG</TextButtonText>
        </TextButton>
      </ContainerDocument>

      <ContainerImg>
        <Image source={Line} style={{ tintColor: '#75130F' }} />
      </ContainerImg>

      <ContainerDocument>
        <DocumentButton
          onPress={() => {
            navigation.navigate('DocumentCNH');
          }}
        >
          <Image source={CNHImg} style={{ tintColor: '#fff' }} />
        </DocumentButton>
        <TextButton
          onPress={() => {
            navigation.navigate('DocumentCNH');
          }}
        >
          <TextButtonText>USAR MINHA CNH</TextButtonText>
        </TextButton>
      </ContainerDocument>
    </>
  );
};

export default Document1;
