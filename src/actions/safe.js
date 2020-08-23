import { 
    UPDATE_SCREEN_CONTENTS,
    SET_NEW_PASSWORD,
    DISPLAY_STATE,
    CHANGE_STATE,
    VERIFY_PASSWORD,
    TOGGLE_KEY_INPUT,
    VERIFY_MASTER_PASSWORD,
    DEVICE_ON
} from './types';

export const updateScreenContents = (payload) => dispatch => {
    dispatch({
        type: UPDATE_SCREEN_CONTENTS,
        payload
    });
}

export const toggleKeyInput = () => dispatch => {
    dispatch({
        type: TOGGLE_KEY_INPUT
    });
}

export const setNewPassword = () => dispatch => {
    dispatch({
        type: SET_NEW_PASSWORD
    });
}

export const displayState = (payload) => dispatch => {
    dispatch({
        type: DISPLAY_STATE,
        payload
    });
}

export const changeState = (payload) => dispatch => {
    dispatch({
        type: CHANGE_STATE,
        payload
    });
}

export const verifyPassword = () => dispatch => {
    dispatch({
        type: VERIFY_PASSWORD
    });
}

export const verifyMasterPassword = (payload) => async (dispatch) => {
    try {
        const response = await fetch(`https://9w4qucosgf.execute-api.eu-central-1.amazonaws.com/default/CR-JS_team_M02a?code=${payload}`);
        const serialNumber = await response.json();
        console.log(serialNumber);
        dispatch({
            type: VERIFY_MASTER_PASSWORD,
            payload: serialNumber.sn,
        })
    } catch (err) {
        console.error('There is a server problem. Please try again later.', err);
    }
}

export const deviceOn = (payload) => dispatch => {
    dispatch({
        type: DEVICE_ON,
        payload
    });
}
