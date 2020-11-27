import { CREATE_POST, FETCH_HOME_POST, SAVE_POST, FETCH_POST_COMMENT, FETCH_POST_DETAIL, POST_COMMENT, FETCH_COMMUNITY_POST, FETCH_USER_POST, POST_UPVOTE, POST_DOWNVOTE, REPORT_POST } from "../actionType";

const initialState = { isCreated: false, posts: [], isFetched: false, isposted: false, postsdetail: [], postcomment: [], upvoted: false, downvoted: false, removevoted: false };

export default function (state = initialState, action) {
    const { type, payload } = action;
    switch (type) {

        case CREATE_POST:
            return {
                ...state,
                isCreated: true
            };

        case FETCH_COMMUNITY_POST:
            return {
                ...state,
                isFetched: true,
                posts: payload.posts
            };

        case FETCH_HOME_POST:
            return {
                ...state,
                isFetched: true,
                posts: payload.posts
            };

        case FETCH_USER_POST:
            return {
                ...state,
                isFetched: true,
                posts: payload.posts
            };

        case FETCH_POST_DETAIL:
            return {
                ...state,
                isFetched: true,
                postsdetail: payload.postdetail
            };

        case POST_COMMENT:
            return {
                ...state,
                isposted: true,

            };

        case FETCH_POST_COMMENT:
            return {
                ...state,
                postcomment: payload.comments,

            };

        case POST_UPVOTE:
            return {
                ...state,
                upvoted: true

            };

        case POST_DOWNVOTE:
            return {
                ...state,
                downvoted: true

            };


        case SAVE_POST:
            return {
                ...state

            };

        case REPORT_POST:
            return {
                ...state

            };

        default:
            return state;

    }
}