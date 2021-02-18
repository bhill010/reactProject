import axios from 'axios';
import { Action, Dispatch } from 'redux';
import { ActionTypes } from './types';

export interface Service {
    type: string,
    id: string,
    name: string,
    modeName: string,
    disruptions: string[],
    created: string,
    modified: string,
    lineStatuses: object[],
    routeSections: object[],
    serviceTypes: object[],
    crowding: {
        type: string
    }
}

export interface FetchServicesAction {
    type: ActionTypes.fetchServices,
    payload: Service[]
}

const url = 'https://api.tfl.gov.uk/Line/Mode/tube,overground,dlr/Status?detail=true';

export const fetchServices = () => {
    return async (dispatch: Dispatch) => {
        const response = await axios.get<Service[]>(url);

        dispatch<FetchServicesAction>({
            type: ActionTypes.fetchServices,
            payload: response.data
        });
    };
};