import {createStore, applyMiddleware} from 'redux';
import rootReducer from './reducers';
import api from '../api';
import thunk from 'redux-thunk';
const store = createStore(
  rootReducer,
  applyMiddleware(thunk.withExtraArgument(api)),
);
export default store;
