import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import { Container, Title, Description } from './styles';

const Loading: React.FC = () => {
  return (
    <>
      <Container>
        <Icon name="loader" size={60} color="#000" />

        <Title>Em análise.</Title>
        <Description>Aguarde um instante.</Description>
      </Container>
    </>
  );
};

export default Loading;
