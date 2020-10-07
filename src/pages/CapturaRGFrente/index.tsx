import React from 'react';
import { Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';
import {
  MainContainer,
  Title,
  ContainerHeader,
  ButtonBack,
  ImageContainer,
  ButtonCaptar,
} from './styles';

import btnCapturar from '../../assets/BotaoCaptar.png';

const CapturaRGFrente: React.FC = () => {
  const navigation = useNavigation();

  return (
    <>
      <ContainerHeader>
        <Title>Aperte o botão para captar a foto</Title>
        <ButtonBack
          onPress={() => {
            navigation.navigate('DocumentRG');
          }}
        >
          <Icon name="x" size={30} color="#fff" />
        </ButtonBack>
      </ContainerHeader>

      <MainContainer>
        <ImageContainer>
          <ButtonCaptar
            onPress={() => {
              navigation.navigate('ArchivePhoto');
            }}
          >
            <Image source={btnCapturar} />
          </ButtonCaptar>
        </ImageContainer>
      </MainContainer>
    </>
  );
};

export default CapturaRGFrente;
