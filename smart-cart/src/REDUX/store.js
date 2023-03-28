import {legacy_createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

// const Root_Reducer = combineReducers()
// const Middlwware =  applyMiddleware(thunk);
export const store = legacy_createStore();



