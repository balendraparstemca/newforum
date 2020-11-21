import { FETCH_AMENTIES, FETCH_CATEGORY } from "../actionType";

const initialState = { amenties: [], isFetched: false, category: [] };

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

        default:
            return state;

    }
}