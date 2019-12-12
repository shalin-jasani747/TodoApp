import {Container} from 'native-base';
import React, {useState} from 'react';
import {connect} from 'react-redux';
import {addTodo, toggleTodo, deleteTodo} from '../Redux/Actions';
import AddToDO from './AddToDO';
import CustomHeader from './CustomHeader';
import ToDoList from './ToDoList';
import VisibilityFilter from './VisibilityFilter';

const Redux = ({
  navigation,
  todos,
  addTodos,
  toggleTodos,
  deleteTodos,
  setTodoVisibility,
}) => {
  const [visibilityType, setVisibilityType] = useState('All');
  return (
    <Container>
      <CustomHeader
        headerTitle={'Redux Todos'}
        onPress={() => navigation.goBack()}
      />
      <AddToDO onAddToDo={item => addTodos(item)} />
      <ToDoList
        toDos={todos}
        visibilityType={visibilityType}
        onToggle={id => toggleTodos(id)}
        onDelete={id => deleteTodos(id)}
      />
      <VisibilityFilter
        setVisibilityType={filterType => setVisibilityType(filterType)}
      />
    </Container>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    todos: state.toDos,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addTodos: item => dispatch(addTodo(item)),
    toggleTodos: id => dispatch(toggleTodo(id)),
    deleteTodos: id => dispatch(deleteTodo(id)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Redux);
