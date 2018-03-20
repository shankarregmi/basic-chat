import * as auth from '../utils/auth';

export const loginSuccess = (user) => {
    return {
        type: LOGIN_SUCCESS,
        user
    };
};

export const login = (username) => {
    return (dispatch, getState) => {
        return auth.login(username)
            .then((data) => {
                dispatch(loginSuccess(data));
                cb();
            }).catch((error) => {
                dispatch(loginFailed(error, intl(localeMessages)
                    .formatMessage(messages.email_password_dont_match)));
            });
    };
};

export const logout = () => {
    auth.logout();
}