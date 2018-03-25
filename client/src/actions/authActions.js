import * as auth from '../utils/auth';
import {
    history
} from '../store';

export const loginSuccess = (response) => {
    return {
        type: 'LOGIN_SUCCESS',
        response
    };
};

export const logoutSuccess = () => {
    return {
        type: 'LOGOUT_SUCCESS',
    };
};

export const login = (username) => {
    return dispatch => {
        auth.login(username)
            .then((response) => {
                dispatch(loginSuccess(response));
                history.push('/');
            }).catch((error) => {
                console.log('Err');
            });
    };
};

export const logout = () => {
    return (dispatch, getState) => {
        return auth.logout()
            .then(() => {
                dispatch(logoutSuccess());
                history.push('/login');
            }).catch((error) => {
                console.log('Err');
            });
    };
}