import {createStore,combineReducers,applyMiddleware} from 'redux';
import thunk from '@reduxjs/toolkit';
import {reducer} from './Reducer';

const rootReducer=combineReducers({reducer});
export const store=createStore(
    rootReducer,applyMiddleware(thunk))
