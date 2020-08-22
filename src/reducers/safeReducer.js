import { 
    UPDATE_SCREEN_CONTENTS,
    TOGGLE_KEY_INPUT,
    SET_NEW_PASSWORD,
    DISPLAY_STATE
} from '../actions/types';

const initialState = {
    states: [
        {
            id: 1,
            indicator: 'Unlocked',
            status: 'Ready'
        },
        {
            id: 2,
            indicator: 'Unlocked',
            status: 'Locking...'
        },
        {
            id: 3,
            indicator: 'Locked',
            status: ''
        },
        {
            id: 4,
            indicator: 'Locked',
            status: 'Unlocking...'
        },
        {
            id: 5,
            indicator: 'Locked',
            status: 'Error'
        },
        {
            id: 6,
            indicator: 'Locked',
            status: 'Service'
        },
        {
            id: 7,
            indicator: 'Locked',
            status: 'Validating...'
        }
    ],
    currentStateId: 1,
    currentIndicator: '',
    currentPassword: '',
    enteredPassword: '',
    enteredMasterCode: '',
    serialNumber: '4815162342',
    currentScreenContents: '',
    keyInputDisabled: false,
};

export default function(state = initialState, action) {
    switch(action.type) {
        case UPDATE_SCREEN_CONTENTS:
            const currentInput = state.currentScreenContents === 'Ready' ? '' :  state.currentScreenContents;
            return {
                ...state,
                currentScreenContents: currentInput + action.payload
            };
        case TOGGLE_KEY_INPUT:
            return {
                ...state,
                keyInputDisabled: !state.keyInputDisabled
            };
        case SET_NEW_PASSWORD:
            return {
                ...state,
                currentPassword: state.currentScreenContents
            };
        case DISPLAY_STATE:
            const currentState = state.states.find(st => st.id === action.payload);
            return {
                ...state,
                currentScreenContents: currentState.status,
                currentIndicator: currentState.indicator
            };
        default:
            return state;
    }
}
