import {combineReducers} from 'redux';

/* ------------- Assemble The Reducers ------------- */
export default combineReducers({
  todo: require('./ToDoRedux').reducer,
});
