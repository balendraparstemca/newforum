import { ADD_NOTIFICATION, GET_NOTIFICATION, REMOVE_NOTIFICATION } from "../actionType";


const initialState = {
    notifications: []
};

export default function notification(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {

        case ADD_NOTIFICATION: {
            return { ...state }
        }

        case REMOVE_NOTIFICATION: {

            return { ...state }
        }

        case GET_NOTIFICATION: {

            return {
                ...state,
                notifications: payload.notification
            }
        }

        default:
            return state;

    }
}