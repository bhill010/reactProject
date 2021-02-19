import { Service, FetchServicesAction } from '../actions';
import { ActionTypes } from '../actions/types';

export const servicesReducer = (state: Service[] = [], action: FetchServicesAction) => {
    switch(action.type) {
        case ActionTypes.fetchServices:
            return action.payload;
        default:
            return state;
    }
}