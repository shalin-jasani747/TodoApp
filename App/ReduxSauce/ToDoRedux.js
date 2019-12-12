import * as _ from 'lodash';
import {createActions, createReducer} from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* ------------- Types and Action Creators ------------- */

const {Types, Creators} = createActions({
  addTodo: ['todo'],
  deleteTodo: ['id'],
  toggleTodo: ['id'],
});

export const ToDoTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  toDos: [],
});

/* ------------- Reducers ------------- */

export const addTodo = (state, {todo}) =>
  state.merge({toDos: [...state.toDos, todo]});

export const deleteTodo = (state, {id}) =>
  state.merge({toDos: _.reject(state.toDos, item => item.id === id)});

export const toggleTodo = (state, {id}) => {
  const index = _.findIndex(state.toDos, item => item.id === id);
  const updatedTodoData = _.values({
    ...state.toDos,
    [index]: {
      ...state.toDos[index],
      completed: !state.toDos[index].completed,
    },
  });
  return state.merge({
    toDos: updatedTodoData,
  });
};

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.ADD_TODO]: addTodo,
  [Types.DELETE_TODO]: deleteTodo,
  [Types.TOGGLE_TODO]: toggleTodo,
});
