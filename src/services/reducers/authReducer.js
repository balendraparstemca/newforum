import { REGISTER_SUCCESS,LOGIN_SUCCESS,LOGOUT } from "../actionType";

const userdetails = JSON.parse(localStorage.getItem("user"));

const initialState = (userdetails) ? { isLoggedIn: true, userdetails, isSignup: false }
    : { isLoggedIn: false, userdetails: null, isSignup: false };

export default function (state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case REGISTER_SUCCESS:
            return {
                ...state,
                isSignup: true,
            };

        case LOGIN_SUCCESS:
            return {
                ...state,
                isLoggedIn: true,
                userdetails: payload.user,
            };

        case LOGOUT:
            return {
                ...state,
                isSignup: false,
                isLoggedIn: false,
                userdetails: null,
            };
        default:
            return state;
    }
}
