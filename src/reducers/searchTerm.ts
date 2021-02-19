import { FetchSearchTermAction } from '../actions';
import { ActionTypes } from '../actions/types';

export const searchTermReducer = (state: string = '', action: FetchSearchTermAction) => {
    switch(action.type) {
        case ActionTypes.fetchSearchTerm:
            return action.payload;
        default:
            return state;
    }
}