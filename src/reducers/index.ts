import { combineReducers } from 'redux';
import { servicesReducer } from './services';
import { selectedServiceReducer } from './selectedService';
import { bikePointsReducer } from './bikePoints';
import { searchTermReducer } from './searchTerm';
import { Service, BikePoint } from '../actions';
import { bikeSwitchReducer } from './bikeSwitch';


export interface StoreState {
    services: Service[];
    selectedService: Service;
    bikePoints: BikePoint[];
    searchTerm: string;
    bikeSwitch: boolean;
}

export const reducers = combineReducers<StoreState>({
    services: servicesReducer,
    selectedService: selectedServiceReducer,
    bikePoints: bikePointsReducer,
    searchTerm: searchTermReducer,
    bikeSwitch: bikeSwitchReducer,
});