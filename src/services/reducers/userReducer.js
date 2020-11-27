import { FETCH_USER_DETAIL, FETCH_USER_POST_COMMENT, FETCH_USER_SAVED_POST } from "../actionType";

const initialState = { isFetched: false, udetails: [], userpostcomment: [], savedposts:[] };

export default function (state = initialState, action) {
    const { type, payload } = action;
    switch (type) {

        case FETCH_USER_DETAIL:
            return {
                ...state,
                isFetched: true,
                udetails: payload.userdetails,

            };

        case FETCH_USER_POST_COMMENT:
            return {
                ...state,
                userpostcomment: payload.upostcomment,

            };

        case FETCH_USER_SAVED_POST:
            return {
                ...state,
                savedposts: payload.savedpost,

            };

        default:
            return state;

    }
}