import axios from 'axios';
import { Dispatch } from 'redux';

interface Service {
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

const url = 'https://api.tfl.gov.uk/Line/Mode/tube,overground,dlr/Status?detail=true';

export const fetchServices = () => {
    return async (dispatch: Dispatch) => {
        const response = await axios.get<Service[]>(url);

        dispatch({
            type: 'FETCH_SERVICES',
            payload: response.data
        });
    };
};