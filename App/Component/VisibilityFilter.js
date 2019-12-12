import {Button, Footer, FooterTab, Text} from 'native-base';
import React from 'react';

const VisibilityButton = ({title, onPress}) => {
  return (
    <FooterTab>
      <Button onPress={onPress}>
        <Text>{title}</Text>
      </Button>
    </FooterTab>
  );
};

export default ({setVisibilityType}) => {
  return (
    <Footer>
      <VisibilityButton title="All" onPress={() => setVisibilityType('All')} />
      <VisibilityButton
        title="Active"
        onPress={() => setVisibilityType('Active')}
      />
      <VisibilityButton
        title="Completed"
        onPress={() => setVisibilityType('Completed')}
      />
    </Footer>
  );
};
