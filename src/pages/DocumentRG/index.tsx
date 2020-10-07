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

import RGFrenteImg from '../../assets/Doc/IconRGFrente.png';
import RGVersoImg from '../../assets/Doc/IconRGVerso.png';
import RGFrenteVersoImg from '../../assets/Doc/IconRGFrenteVerso.png';
import Line from '../../assets/Doc/Line.png';
import ImgBack from '../../assets/IconLeft.png';

const DocumentRG: React.FC = () => {
  const navigation = useNavigation();

  return (
    <>
      <ContainerHeader>
        <ButtonBack
          onPress={() => {
            navigation.navigate('Document1');
          }}
        >
          <Image source={ImgBack} style={{ tintColor: '#fff' }} />
        </ButtonBack>
      </ContainerHeader>

      <MainContainer>
        <Title>Escolha como quer enviar o seu RG.</Title>
      </MainContainer>

      <ContainerDocument>
        <DocumentButton
          onPress={() => {
            navigation.navigate('CapturaRGFrente');
          }}
        >
          <Image source={RGFrenteImg} style={{ tintColor: '#fff' }} />
        </DocumentButton>
        <TextButton
          onPress={() => {
            navigation.navigate('CapturaRGFrente');
          }}
        >
          <TextButtonText>FOTO DA FRENTE</TextButtonText>
        </TextButton>
      </ContainerDocument>

      <ContainerImg>
        <Image source={Line} style={{ tintColor: '#A82920' }} />
      </ContainerImg>

      <ContainerDocument>
        <DocumentButton
          onPress={() => {
            navigation.navigate('CapturaRGVerso');
          }}
        >
          <Image source={RGVersoImg} style={{ tintColor: '#fff' }} />
        </DocumentButton>
        <TextButton
          onPress={() => {
            navigation.navigate('CapturaRGVerso');
          }}
        >
          <TextButtonText>FOTO DO VERSO</TextButtonText>
        </TextButton>
      </ContainerDocument>

      <ContainerImg>
        <Image source={Line} style={{ tintColor: '#75130F' }} />
      </ContainerImg>

      <ContainerDocument>
        <DocumentButton
          onPress={() => {
            navigation.navigate('CapturaRGFrenteVerso');
          }}
        >
          <Image source={RGFrenteVersoImg} style={{ tintColor: '#fff' }} />
        </DocumentButton>
        <TextButton
          onPress={() => {
            navigation.navigate('CapturaRGFrenteVerso');
          }}
        >
          <TextButtonText>FRENTE E VERSO</TextButtonText>
        </TextButton>
      </ContainerDocument>
    </>
  );
};

export default DocumentRG;
