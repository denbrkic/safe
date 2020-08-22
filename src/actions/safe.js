import { 
    UPDATE_SCREEN_CONTENTS,
    SET_NEW_PASSWORD,
    DISPLAY_STATE,
    START_LOCKING,
    UPDATE_LOCKED_INDICATOR,
    UPDATE_STATE,
    TOGGLE_KEY_INPUT 
} from './types';

/*export const updateScreenContents = (payload) => dispatch => {
    /*fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(serialNumber => {
            dispatch({
                type: FETCH_SERIAL_NUMBER,
                payload: serialNumber,
            })
        })*/
    /*console.log(payload);
}*/

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
