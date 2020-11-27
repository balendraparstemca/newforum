import {
    CREATE_COMMUNITY, FETCH_COMMUNITYLIST, COMMUNITY_RULE, FETCH_COMMUNITY_DETAIL, FETCH_COMMUNITY_MEMBER, UPDATE_COMMUNITY, JOIN_COMMUNITY, LEAVE_COMMUNITY, APPROVE_COMMUNITY

} from "../actionType";

const initialState = { isCreated: false, isUpdated:false, communitylist: [], communitydetails: [], communitymember: [], isApprove: false, isLeaved: false };

export default function (state = initialState, action) {
    const { type, payload } = action;
    switch (type) {

        case CREATE_COMMUNITY:
            return {
                ...state,
                isCreated: true
            };

        case UPDATE_COMMUNITY:
            return {
                ...state,
                isUpdated: true
            };

        case JOIN_COMMUNITY:
            return {
                ...state,
                isCreated: true
            };

        case LEAVE_COMMUNITY:
            return {
                ...state,
                isLeaved: true
            };

        case APPROVE_COMMUNITY:
            return {
                ...state,
                isApprove: true
            };
            
        case  COMMUNITY_RULE:
            return {
                ...state,
            };

        case FETCH_COMMUNITYLIST:
            return {
                ...state,
                communitylist: payload.communitylist,

            };

        case FETCH_COMMUNITY_DETAIL:
            return {
                ...state,
                communitydetails: payload.communitydetails,

            };

        case FETCH_COMMUNITY_MEMBER:
            return {
                ...state,
                communitymember: payload.communitymember,

            };

        default:
            return state;

    }
}