import React from 'react';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import ReduxSauce from '../Component/ReduxSauce';
import rootReducer from '../ReduxSauce';

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default ({navigation}) => {
  return (
    <Provider store={store}>
      <ReduxSauce navigation={navigation} />
    </Provider>
  );
};
