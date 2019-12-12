import {now} from 'lodash';
import {Form, Icon, Input, Item} from 'native-base';
import React, {useState} from 'react';

const createToDo = (name, setItemName) => {
  setItemName('');
  return {
    id: now(),
    text: name,
    completed: false,
  };
};

export default ({onAddToDo}) => {
  const [itemName, setItemName] = useState('');
  return (
    <Form>
      <Item>
        <Input
          placeholder="Start adding..."
          value={itemName}
          onChangeText={text => setItemName(text)}
        />
        <Icon
          type="MaterialIcons"
          name="playlist-add"
          onPress={() =>
            itemName.trim() !== ''
              ? onAddToDo(createToDo(itemName, setItemName))
              : null
          }
        />
      </Item>
    </Form>
  );
};
