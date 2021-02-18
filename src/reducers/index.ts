import { combineReducers } from 'redux';
import { servicesReducer } from './services';
import { Service } from '../actions';

export interface StoreState {
    services: Service[];
}

export const reducers = combineReducers<StoreState>({
    services: servicesReducer
});