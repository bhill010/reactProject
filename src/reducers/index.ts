import { combineReducers } from 'redux';
import { servicesReducer } from './services';
import { selectedServiceReducer } from './selectedService';
import { Service } from '../actions';

export interface StoreState {
    services: Service[];
    selectedService: Service;
}

export const reducers = combineReducers<StoreState>({
    services: servicesReducer,
    selectedService: selectedServiceReducer,
});