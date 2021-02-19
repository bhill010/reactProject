import { BikePoint, FetchBikePointsAction } from '../actions';
import { ActionTypes } from '../actions/types';

export const bikePointsReducer = (state: BikePoint[] = [], action: FetchBikePointsAction) => {
    switch(action.type) {
        case ActionTypes.fetchBikePoints:
            return action.payload;
        default:
            return state;
    }
}