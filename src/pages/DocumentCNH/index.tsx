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

import CNHFrenteImg from '../../assets/Doc/IconCNHFrente.png';
import CNHVersoImg from '../../assets/Doc/IconCNHVerso.png';
import CNHFrenteVersoImg from '../../assets/Doc/IconCNHFrenteVerso.png';
import Line from '../../assets/Doc/Line.png';
import ImgBack from '../../assets/IconLeft.png';

const DocumentCNH: React.FC = () => {
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
        <Title>Escolha como quer enviar o seu CNH.</Title>
      </MainContainer>

      <ContainerDocument>
        <DocumentButton
          onPress={() => {
            navigation.navigate('CapturaCNHFrente');
          }}
        >
          <Image source={CNHFrenteImg} style={{ tintColor: '#fff' }} />
        </DocumentButton>
        <TextButton
          onPress={() => {
            navigation.navigate('CapturaCNHFrente');
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
            navigation.navigate('CapturaCNHVerso');
          }}
        >
          <Image source={CNHVersoImg} style={{ tintColor: '#fff' }} />
        </DocumentButton>
        <TextButton
          onPress={() => {
            navigation.navigate('CapturaCNHVerso');
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
            navigation.navigate('CapturaCNHFrenteVerso');
          }}
        >
          <Image source={CNHFrenteVersoImg} style={{ tintColor: '#fff' }} />
        </DocumentButton>
        <TextButton
          onPress={() => {
            navigation.navigate('CapturaCNHFrenteVerso');
          }}
        >
          <TextButtonText>FRENTE E VERSO</TextButtonText>
        </TextButton>
      </ContainerDocument>
    </>
  );
};

export default DocumentCNH;
