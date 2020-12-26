import { toast } from 'react-toastify';
import { LOGIN_SUCCESS,UPDATE_PROFILE, LOGOUT, REGISTER_SUCCESS, SET_MESSAGE } from '../actionType';
import AuthService from "../restapi/authService";

export const registerUser = (firstname, lastname, username, email, password) => (dispatch) => {

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

                if (response) {
                    localStorage.setItem("user", JSON.stringify(response.data));
                }

                toast.success(response.message);


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
                toast.error(response.message);

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
            toast.error(message);
            dispatch({
                type: SET_MESSAGE,
                payload: message,
            });

            return Promise.reject();
        }
    );
};

export const Logoutuser = (obj) => (dispatch) => {
    return AuthService.logoutUser(obj).then(
        (response) => {
            if (response.status === 'SUCCESS') {
               
                dispatch({
                    type: LOGOUT,
                });

                localStorage.removeItem("user");
                toast.success(response.message)
            }
            else {
                toast.error(response.message)

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
            toast.error(message)

            return Promise.reject();
        }
    );

};



export const addImageprofile = (formdata, userid) => (dispatch) => {

    return AuthService.addProfileImage(formdata, userid).then(
        (response) => {
            toast.success('successfully added image')

            return Promise.resolve();
        },
        (error) => {

            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();
            toast.error(message)

            return Promise.reject();
        }
    );

}


export const userUpdate = (obj) => (dispatch) => {
    return AuthService.updateProfile(obj).then(
        (response) => {
            

            if (response.status === 'SUCCESS') {

                toast.error(response.message)

            }
            else {

                toast.error(response.message)
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
            toast.error(message)


            return Promise.reject();
        }
    );

}

export const userVerify = (obj) => (dispatch) => {
    return AuthService.userverification(obj).then(
        (response) => {
            

            if (response.status === 'SUCCESS') {

                toast.error(response.message)

            }
            else {

                toast.error(response.message)
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
            toast.error(message)


            return Promise.reject();
        }
    );

}
