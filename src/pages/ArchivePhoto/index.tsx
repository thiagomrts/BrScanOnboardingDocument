import React, { useCallback, useState } from 'react';
import { Image, Text, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ImagePicker from 'react-native-image-picker';
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

import CImg from '../../assets/Doc/DicoIconCamera.png';
import Line from '../../assets/Doc/Line.png';
import ImgBack from '../../assets/IconLeft.png';

const ArchivePhoto: React.FC = () => {
  const navigation = useNavigation();

  const [image, setImage] = useState({});
  /* const [loading, setLoading] = useState(false); */

  const handleUpdateAvatar = useCallback(async () => {
    ImagePicker.showImagePicker(
      {
        title: 'Selecione um arquivo',
        cancelButtonTitle: 'Cancelar',
        takePhotoButtonTitle: 'Usar câmera',
        chooseFromLibraryButtonTitle: 'Escolher da galeria',
      },
      response => {
        if (response.didCancel) {
          return;
        }

        if (response.error) {
          console.log(response.error);

          Alert.alert('Erro ao subir o arquivo');
          return;
        }

        if (response.uri) {
          console.log(response.uri);

          navigation.navigate('Loading');
        } else {
          Alert.alert('Erro ao enviar o arquivo');
          navigation.navigate('ArchivePhoto');
        }
        const source = { uri: response.uri };
        setImage(source);

        console.log(image);

        navigation.navigate('Ok');
      },
    );
  }, [navigation, image]);

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
        <Title>
          Escolha uma opção ao
          {'\n'}
          <Text>selecionar abaixo:</Text>
        </Title>
      </MainContainer>

      <ContainerImg>
        <Image source={Line} style={{ tintColor: '#D4D4D4' }} />
      </ContainerImg>

      <ContainerDocument>
        <DocumentButton onPress={handleUpdateAvatar}>
          <Image source={CImg} style={{ tintColor: '#df1616' }} />
        </DocumentButton>
        <TextButton onPress={handleUpdateAvatar}>
          <TextButtonText>ENVIAR ARQUIVO</TextButtonText>
        </TextButton>
      </ContainerDocument>
    </>
  );
};

export default ArchivePhoto;
