import {legacy_createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {reducer as mensReducer} from './Men\'s Reducer/reducer';
import {reducer as womensReducer} from "./WomensReducer/reducer"
import {reducer as signup} from "./Signup/reducer"
import {reducer as login } from "./Login/reducer"
const Root_Reducer = combineReducers({mensReducer, womensReducer,signup,login});
const Middleware =  applyMiddleware(thunk);

export const store = legacy_createStore(Root_Reducer,Middleware);

console.log(store.getState());