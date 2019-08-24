import React from 'react';
import { Text } from 'react-native';

import Background from '~/Components/Background';
import Input from '~/Components/Input';
import Button from '~/Components/Button';

// import { Container } from './styles';

export default function SignIn() {
  return (
    <Background>
      <Text>SignIn</Text>

      <Input icon="call" placeholder="Digite seu nome" />
      <Button>Entrar</Button>
    </Background>
  );
}
