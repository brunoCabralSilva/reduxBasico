import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reduceEx from './reducers/index';

const rootReducer = combineReducers({ reduceEx });

const store = createStore(rootReducer, composeWithDevTools());

export default store;