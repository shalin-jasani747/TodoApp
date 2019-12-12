import {Body, Button, Header, Icon, Left, Right, Title} from 'native-base';
import React from 'react';

export default ({headerTitle, onPress}) => {
  return (
    <Header>
      <Left>
        <Button transparent onPress={onPress}>
          <Icon name="arrow-back" />
        </Button>
      </Left>
      <Body>
        <Title>{headerTitle}</Title>
      </Body>
      <Right />
    </Header>
  );
};
