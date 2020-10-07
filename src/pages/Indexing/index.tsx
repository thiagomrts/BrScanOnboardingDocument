import React, { useState, useCallback } from 'react';
import { Image, View, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TextInputMask } from 'react-native-masked-text';
import * as Yup from 'yup';
import {
  Container,
  Title,
  Description,
  InitiateButton,
  InitiateButtonText,
  MainContainer,
  PoliticsInput,
  PoliticsText,
} from './styles';

import Line from '../../assets/Doc/Line.png';

const Indexing: React.FC = () => {
  const [cpf, setCpf] = useState<string>();

  const navigation = useNavigation();

  const handleCpf = useCallback(async () => {
    const schema = Yup.object().shape({
      cpf: Yup.string().required('O campo CPF é obrigatório.').min(14),
    });

    const checkCpfIsValid = await schema.isValid({ cpf });

    if (!checkCpfIsValid) {
      Alert.alert('Erro ao validar o CPF', 'Cheque seus dados');
      return;
    }
    navigation.navigate('Tutorial1');
  }, [cpf, navigation]);

  return (
    <>
      <MainContainer>
        <Container>
          <Title>Para começar, preencha seu CPF abaixo.</Title>
          <View>
            <TextInputMask
              type="cpf"
              value={cpf}
              placeholder="000.000.000-00"
              placeholderTextColor="white"
              onChangeText={text => setCpf(text)}
              style={{ textDecorationColor: 'white', borderColor: 'white' }}
              options={{}}
            />
            <Image source={Line} style={{ tintColor: 'white' }} />
          </View>
          <View>
            <Description>
              Ao continuar você estará de acordo com nossa
            </Description>
            <PoliticsInput>
              <PoliticsText>Política de privacidade</PoliticsText>
            </PoliticsInput>
          </View>
        </Container>
      </MainContainer>
      <InitiateButton onPress={handleCpf}>
        <InitiateButtonText>INICIAR</InitiateButtonText>
      </InitiateButton>
    </>
  );
};

export default Indexing;
