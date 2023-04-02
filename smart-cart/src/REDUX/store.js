import {legacy_createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {reducer as mensReducer} from './Men\'s Reducer/reducer';
import {reducer as admin} from "./Admin/Reducer"
import {reducer as womensReducer} from "./WomensReducer/reducer"
import {reducer as signup} from "./Signup/reducer"
import {reducer as login } from "./Login/reducer"
import { deletereducer } from './Admin/Reducer';
import { update } from './Admin/Reducer';
const Root_Reducer = combineReducers({mensReducer, womensReducer,signup,login,admin,deletereducer,update});
const Middleware =  applyMiddleware(thunk);

export const store = legacy_createStore(Root_Reducer,Middleware);

console.log(store.getState());