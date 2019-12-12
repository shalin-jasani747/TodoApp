import * as _ from 'lodash';
import {Icon, Left, ListItem, Right, Text} from 'native-base';
import React from 'react';
import {FlatList} from 'react-native';
import styles from './Style/ToDoList';

const TodoListItem = ({item, onToggle, onDelete}) => {
  return (
    <ListItem noIndent>
      <Left>
        <Text style={[item.completed ? styles.completeText : {}]}>
          {item.text}
        </Text>
      </Left>
      <Right style={styles.iconView}>
        <Icon
          style={[item.completed ? styles.completeIcon : styles.incompleteIcon]}
          type="MaterialCommunityIcons"
          name="playlist-check"
          onPress={() => onToggle(item.id)}
        />
        <Icon
          style={styles.deleteIcon}
          type="MaterialCommunityIcons"
          name="playlist-remove"
          onPress={() => onDelete(item.id)}
        />
      </Right>
    </ListItem>
  );
};

const filterTodos = (toDos, visibilityType) =>
  _.filter(toDos, todo =>
    visibilityType === 'All'
      ? toDos
      : visibilityType === 'Active'
      ? !todo.completed
      : todo.completed,
  );

export default ({toDos, visibilityType, onToggle, onDelete}) => {
  return (
    <FlatList
      data={filterTodos(toDos, visibilityType)}
      renderItem={({item}) => (
        <TodoListItem item={item} onToggle={onToggle} onDelete={onDelete} />
      )}
      keyExtractor={item => `${item.id}`}
    />
  );
};
