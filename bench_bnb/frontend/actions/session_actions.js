export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRET_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

import * as sessionUtils from '../util/session_api_util';

// regular actions
const receiveCurrentUser = (currentUser) => {
    return {
        type: RECEIVE_CURRENT_USER,
        currentUser
    };
};

const logoutCurrentUser = () => {
    return {
        type: LOGOUT_CURRENT_USER
    };
};

const receiveErrors = (errors) => {
    console.log(errors);
    return {
        type: RECEIVE_ERRORS,
        errors
    };
};

// thunk action creators
export const login = (user) => (dispatch) => (
    sessionUtils.login(user)
        .then(user => dispatch(receiveCurrentUser(user)),
            err => dispatch(receiveErrors(err.responseJSON)))
);

export const logout = () => (dispatch) => (
    sessionUtils.logout()
        .then(() => dispatch(logoutCurrentUser()))
);

export const signup = (user) => (dispatch) => (
    sessionUtils.signup(user)
        .then(user => dispatch(receiveCurrentUser(user)),
            err => {
                console.log(err);
                dispatch(receiveErrors(err.responseJSON))
            })
);
