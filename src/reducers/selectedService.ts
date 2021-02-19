import { Service, FetchSelectedServiceAction } from '../actions';
import { ActionTypes } from '../actions/types';

export const selectedServiceReducer = (state: Service = 
    {
        type: '', 
        id: '', 
        name: '', 
        modeName: '', 
        disruptions: [''], 
        created: '', 
        modified: '', 
        lineStatuses: [{ 
            type: '', 
            id: -1, 
            lineId: '', 
            statusSeverity: -1, 
            statusSeverityDescription: '', 
            reason: '', 
            created: '', 
            validityPeriods: [{}],
        }],
        routeSections: [{}],
        serviceTypes: [{
            type: '',
            name: '',
            uri: '',
        }],
        crowding: { type: '' }
    }, 
    action: FetchSelectedServiceAction) => {
    switch(action.type) {
        case ActionTypes.fetchSelectedService:
            return action.payload;
        default:
            return state;
    }
}