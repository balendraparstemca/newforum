import { FETCH_AMENTIES, FETCH_CATEGORY, FETCH_FLAIR_SUCCESS, FETCH_RULE_SUCCESS } from "../actionType";

const initialState = { amenties: [], isFetched: false, category: [],flair:[], rule:[]};

export default function (state = initialState, action) {
    const { type, payload } = action;

    switch (type) {

        case FETCH_CATEGORY:
            return {
                ...state,
                category: payload.category,
            }

        case FETCH_AMENTIES:
            return {
                ...state,
                amenties: payload.amenties,
            };

        case FETCH_RULE_SUCCESS:
            return {
                ...state,
                isFetched: true,
                rule: payload.rule,
            };

        case FETCH_FLAIR_SUCCESS:
            return {

                ...state,
                flair: payload.flair,
            };

        default:
            return state;

    }
}