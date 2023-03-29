import {legacy_createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {reducer as mensReducer} from './Men\'s Reducer/reducer';

const Root_Reducer = combineReducers({mensReducer});
const Middlwware =  applyMiddleware(thunk);

export const store = legacy_createStore(Root_Reducer,Middlwware);



console.log(store.getState());