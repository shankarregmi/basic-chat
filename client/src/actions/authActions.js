import * as auth from '../utils/auth';
import {
    history
} from '../store';

export const loginSuccess = (user) => {
    return {
        type: 'LOGIN_SUCCESS',
        user
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
            .then((user) => {
                dispatch(loginSuccess(user));
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