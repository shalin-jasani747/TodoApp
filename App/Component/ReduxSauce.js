import {Container} from 'native-base';
import React, {useState} from 'react';
import {connect} from 'react-redux';
import ToDoActions from '../ReduxSauce/ToDoRedux';
import AddToDO from './AddToDO';
import CustomHeader from './CustomHeader';
import ToDoList from './ToDoList';
import VisibilityFilter from './VisibilityFilter';

const ReduxSauce = ({
  navigation,
  todos,
  addTodo,
  toggleTodo,
  deleteTodo,
  setTodoVisibility,
}) => {
  const [visibilityType, setVisibilityType] = useState('All');
  return (
    <Container>
      <CustomHeader
        headerTitle={'ReduxSauce Todos'}
        onPress={() => navigation.goBack()}
      />
      <AddToDO onAddToDo={item => addTodo(item)} />
      <ToDoList
        toDos={todos}
        visibilityType={visibilityType}
        onToggle={id => toggleTodo(id)}
        onDelete={id => deleteTodo(id)}
      />
      <VisibilityFilter
        setVisibilityType={filterType => setVisibilityType(filterType)}
      />
    </Container>
  );
};

const mapStateToProps = (state, ownProps) => {
  console.log(state);
  return {
    todos: state.todo.toDos,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addTodo: item => dispatch(ToDoActions.addTodo(item)),
    toggleTodo: id => dispatch(ToDoActions.toggleTodo(id)),
    deleteTodo: id => dispatch(ToDoActions.deleteTodo(id)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ReduxSauce);
