import { ADD_LIST_AMENTIES, ADD_LIST_SHEDULE, CREATE_LISTING, GET_CATEGORY_LIST, GET_HOME_LIST, GET_LIST_AMENTIES, GET_LIST_DETAIL, GET_LIST_FULLDETAIL, GET_LIST_IMAGE, GET_LIST_REVIEW, GET_LIST_SHEDULE, GET_PEOPLE_VIEWED_LIST, GET_SIMILAR_LIST, GET_USER_LIST, GET_USER_SAVE_LIST, POST_LIST_REVIEW, REMOVE_LIST_SHEDULE, UPDATE_LISTINGDETAIL } from "../actionType";

const initialState = { isCreated: false, listing: null, listdetail: null, listfulldetail: null, listamenties: [], listallimage: [], shedulelist: [], allreviewlist: [], alluserlist: [], usersavedlist: [], lists: [], categorylists: [], viewedlists: [], similarlists:[] };

export default function (state = initialState, action) {
    const { type, payload } = action;

    switch (type) {

        case CREATE_LISTING:
            return {
                ...state,
                listing: payload.list,
                isCreated: true
            }

        case UPDATE_LISTINGDETAIL:
            return {
                ...state,
            }

        case ADD_LIST_AMENTIES:
            return {
                ...state,
            }

        case GET_LIST_AMENTIES:
            return {
                ...state,
                listamenties: payload.amenties,
            }

        case GET_LIST_DETAIL:
            return {
                ...state,
                listdetail: payload.listdetail,
            }

        case GET_LIST_FULLDETAIL:
            return {
                ...state,
                listfulldetail: payload.listfulldetail,
            }

        case GET_LIST_IMAGE:
            return {
                ...state,
                listallimage: payload.listimage,
            }

        case ADD_LIST_SHEDULE:
            return {
                ...state,
            }

        case REMOVE_LIST_SHEDULE:
            return {
                ...state,
            }

        case GET_LIST_SHEDULE:
            return {
                ...state,
                shedulelist: payload.listshedule,
            }

        case GET_LIST_REVIEW:
            return {
                ...state,
                allreviewlist: payload.reviewlist,
            }

        case GET_USER_LIST:
            return {
                ...state,
                alluserlist: payload.userlist,
            }

        case GET_USER_SAVE_LIST:
            return {
                ...state,
                usersavedlist: payload.savedlist,
            }

        case GET_HOME_LIST:
            return {
                ...state,
                lists: payload.homelist,
            }


        case GET_CATEGORY_LIST:
            return {
                ...state,
                categorylists: payload.catlist,
            }

        case GET_PEOPLE_VIEWED_LIST:
            return {
                ...state,
                viewedlists: payload.viewlist,
            }

        case GET_SIMILAR_LIST:
            return {
                ...state,
                similarlists: payload.similarlist,
            }

        case POST_LIST_REVIEW:
            return {
                ...state,

            }

        default:
            return state;

    }
}