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
    lineStatuses: [{ type: string, id: number, lineId: string, statusSeverity: number, statusSeverityDescription: string, reason: string, created: string, validityPeriods: object[] }],
    routeSections: object[],
    serviceTypes: [{ type: string, name: string, uri: string }],
    crowding: {
        type: string
    },
}

export interface BikePoint {
    type: string,
    id: string,
    url: string,
    commonName: string,
    placeType: string,
    addtionalProperties: string[],
    children: string[],
    childrenUrls: string[],
    lat: number,
    lon: number,
}

export interface FetchServicesAction {
    type: ActionTypes.fetchServices,
    payload: Service[]
}

export const fetchServices = () => {
    const url = 'https://api.tfl.gov.uk/Line/Mode/tube,overground,dlr/Status?detail=true';

    return async (dispatch: Dispatch) => {
        const response = await axios.get<Service[]>(url);

        dispatch<FetchServicesAction>({
            type: ActionTypes.fetchServices,
            payload: response.data
        });
    };
};

export interface FetchSelectedServiceAction {
    type: ActionTypes.fetchSelectedService,
    payload: Service
}

export const fetchSelectedService = (service: Service) => {
    return async (dispatch: Dispatch) => {
        dispatch<FetchSelectedServiceAction>({
            type: ActionTypes.fetchSelectedService,
            payload: service
        });
    };
};

export interface FetchBikePointsAction {
    type: ActionTypes.fetchBikePoints,
    payload: BikePoint[]
}

export const fetchBikePoints = (searchTerm: string) => {
    const url = `https://api.tfl.gov.uk/BikePoint/Search?query=${searchTerm}`;

    return async (dispatch: Dispatch) => {
        const response = await axios.get<BikePoint[]>(url);

        dispatch<FetchBikePointsAction>({
            type: ActionTypes.fetchBikePoints,
            payload: response.data
        });
    };
};

export interface FetchSearchTermAction {
    type: ActionTypes.fetchSearchTerm,
    payload: string
}

export const fetchSearchTerm = (searchTerm: string) => {
    return async (dispatch: Dispatch) => {
        dispatch<FetchSearchTermAction>({
            type: ActionTypes.fetchSearchTerm,
            payload: searchTerm
        });
    };
};

export interface UpdateBikeSwitchAction {
    type: ActionTypes.updateBikeSwitch,
    payload: boolean
}

export const updateBikeSwitch = (update: boolean) => {
    return async (dispatch: Dispatch) => {
        dispatch<UpdateBikeSwitchAction>({
            type: ActionTypes.updateBikeSwitch,
            payload: update
        });
    };
};