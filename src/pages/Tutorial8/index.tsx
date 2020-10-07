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

import Img from '../../assets/Doc/DocIconFrenteDocumento.png';
import ImgBack from '../../assets/IconLeft.png';

const Tutorial8: React.FC = () => {
  const navigation = useNavigation();
  return (
    <>
      <ContainerHeader>
        <ButtonBack
          onPress={() => {
            navigation.navigate('Tutorial7');
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
          Fotografe o verso do
          {'\n'}
          <Text>documento</Text>
        </Title>
        <Description>Use o lado que não possui foto.</Description>
      </ContainerBody>

      <InitiateButton
        onPress={() => {
          navigation.navigate('Document1');
        }}
      >
        <InitiateButtonText>ENTENDI</InitiateButtonText>
      </InitiateButton>
    </>
  );
};

export default Tutorial8;
