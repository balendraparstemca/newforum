import { ADD_LIST_AMENTIES, ADD_LIST_SHEDULE, CREATE_LISTING, GET_LIST_AMENTIES, GET_LIST_DETAIL, GET_LIST_FULLDETAIL, GET_LIST_IMAGE,GET_LIST_SHEDULE, REMOVE_LIST_SHEDULE, UPDATE_LISTINGDETAIL } from "../actionType";

const initialState = { isCreated: false, listing: null, listdetail: null, listfulldetail: null, listamenties: [], listallimage: [], shedulelist:[]};

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
                shedulelist:payload.listshedule,
            }

        default:
            return state;

    }
}