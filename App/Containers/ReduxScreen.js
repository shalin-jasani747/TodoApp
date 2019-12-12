import React from 'react';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import Redux from '../Component/Redux';
import rootReducer from '../Redux';

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default ({navigation}) => {
  return (
    <Provider store={store}>
      <Redux navigation={navigation} />
    </Provider>
  );
};
