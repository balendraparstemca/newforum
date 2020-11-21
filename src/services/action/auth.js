import { toast } from 'react-toastify';
import { LOGIN_SUCCESS, LOGOUT, REGISTER_SUCCESS, SET_MESSAGE } from '../actionType';
import AuthService from "../restapi/authService";

export const registerUser = (firstname,lastname,username, email, password) => (dispatch) => {

    return AuthService.register(firstname, lastname, username, email, password).then(
        (response) => {
            if (response.status === 'SUCCESS') {
                dispatch({
                    type: REGISTER_SUCCESS,
                });

                dispatch({
                    type: SET_MESSAGE,
                    payload: response.message,
                });

            }
            else {

                dispatch({
                    type: SET_MESSAGE,
                    payload: response.message,
                });


            }

            return Promise.resolve();
        },
        (error) => {

            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();

            dispatch({
                type: SET_MESSAGE,
                payload: message,
            });

            return Promise.reject();
        }
    );

};

export const login = (username, password) => (dispatch) => {
    return AuthService.login(username, password).then(
        (response) => {
            if (response.status === 'SUCCESS') {

                if (response.data.session_token) {
                    localStorage.setItem("user", JSON.stringify(response.data));
                }


                dispatch({
                    type: LOGIN_SUCCESS,
                    payload: { user: response.data },
                });
                dispatch({
                    type: SET_MESSAGE,
                    payload: response.message,
                });


            }
            else {

                dispatch({
                    type: SET_MESSAGE,
                    payload: response.message,
                });

            }

            return Promise.resolve();
        },
        (error) => {
            console.log(error);
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();

            dispatch({
                type: SET_MESSAGE,
                payload: message,
            });

            return Promise.reject();
        }
    );
};

export const logout = () => (dispatch) => {
    AuthService.logout();
    toast.success("logout successfully");
    dispatch({
        type: LOGOUT,
    });
};
