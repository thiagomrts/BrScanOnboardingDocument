import React, { useCallback } from 'react';
import { Image, Text, PermissionsAndroid, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {
  ContainerBody,
  Title,
  InitiateButton,
  InitiateButtonText,
  ContainerHeader,
  ButtonBack,
} from './styles';

import Img from '../../assets/Doc/DocIconAcessoCamera.png';
import ImgBack from '../../assets/IconLeft.png';

const Tutorial2: React.FC = () => {
  const navigation = useNavigation();

  const requestCameraPermission = useCallback(async () => {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA,
      {
        title: 'Permissão de câmera',
        message: 'O app precisa de acesso a câmera.',
        buttonNeutral: 'Pergunte-me depois',
        buttonNegative: 'Cancelar',
        buttonPositive: 'Ok',
      },
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      Alert.alert('Acesso liberado');
    } else {
      Alert.alert('Permissão negada');
    }
    navigation.navigate('Tutorial3');
  }, [navigation]);

  return (
    <>
      <ContainerHeader>
        <ButtonBack
          onPress={() => {
            navigation.navigate('Tutorial1');
          }}
        >
          <Image source={ImgBack} style={{ tintColor: '#000' }} />
        </ButtonBack>
      </ContainerHeader>
      <ContainerBody>
        <Image source={Img} style={{ tintColor: '#000' }} />
        <Title>
          <Text>Você precisa liberar o</Text>
          {'\n'}
          <Text>acesso a câmera para</Text>
          {'\n'}
          <Text>fotografar os documentos.</Text>
        </Title>
      </ContainerBody>

      <InitiateButton onPress={requestCameraPermission}>
        <InitiateButtonText>AUTORIZAR</InitiateButtonText>
      </InitiateButton>
    </>
  );
};

export default Tutorial2;
