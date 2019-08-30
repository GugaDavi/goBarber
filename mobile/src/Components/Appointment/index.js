import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons';

import { Container, Left, Avatar, Info, Name, Time } from './styles';

export default function Appointment() {
  return (
    <Container>
      <Left>
        <Avatar
          source={{ uri: 'http://api.adorable.io/avatar/50/rocketseat.png' }}
        />

        <Info>
          <Name>Gustavo Davi</Name>
          <Time>em 3 horas</Time>
        </Info>
      </Left>

      <TouchableOpacity onPress={() => {}}>
        <Icon name="event-busy" size={20} color="#f64c75" />
      </TouchableOpacity>
    </Container>
  );
}