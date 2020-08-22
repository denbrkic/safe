import { 
    UPDATE_SCREEN_CONTENTS,
    SET_NEW_PASSWORD,
    DISPLAY_STATE,
    CHANGE_STATE,
    VERIFY_PASSWORD,
    TOGGLE_KEY_INPUT,
    VERIFY_MASTER_PASSWORD 
} from './types';

export const updateScreenContents = (payload) => dispatch => {
    dispatch({
        type: UPDATE_SCREEN_CONTENTS,
        payload: payload,
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
        payload: payload,
    });
}

export const changeState = (payload) => dispatch => {
    dispatch({
        type: CHANGE_STATE,
        payload: payload,
    });
}

export const verifyPassword = () => dispatch => {
    dispatch({
        type: VERIFY_PASSWORD
    });
}

export const verifyMasterPassword = (payload) => dispatch => {
    fetch(`https://9w4qucosgf.execute-api.eu-central-1.amazonaws.com/default/CR-JS_team_M02a?code=${payload}`)
        .then(response => response.json())
        .then(response => {
            console.log(response);
            dispatch({
                type: VERIFY_MASTER_PASSWORD,
                payload: response.sn,
            })
        });
}
