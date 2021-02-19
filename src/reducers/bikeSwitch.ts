import { fileURLToPath } from 'url';
import { BikePoint, UpdateBikeSwitchAction } from '../actions';
import { ActionTypes } from '../actions/types';

export const bikeSwitchReducer = (state: boolean = false, action: UpdateBikeSwitchAction) => {
    switch(action.type) {
        case ActionTypes.updateBikeSwitch:
            return action.payload;
        default:
            return state;
    }
}