import { FETCH_SERIAL_NUMBER } from '../actions/types';

const initialState = {
    states: [],
    currentStateId: 1,
    currentStatus: 'Ready',
    currentIndicator: 'Unlocked',
    currentPassword: '',
    enteredPassword: '',
    enteredMasterCode: '',
    serialNumber: '4815162342'
};

export default function(state = initialState, action) {
    switch(action.type) {
        case FETCH_SERIAL_NUMBER:
            return {
                ...state,
                items: action.payload
            };
        default:
            return state;
    }
}
