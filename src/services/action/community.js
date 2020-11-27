import {
    SET_MESSAGE,CREATE_COMMUNITY,JOIN_COMMUNITY, UPDATE_COMMUNITY ,COMMUNITY_RULE, FETCH_COMMUNITY_DETAIL, FETCH_COMMUNITY_MEMBER, LEAVE_COMMUNITY, APPROVE_COMMUNITY,
  } from "../actionType";
  import CommunityService from "../restapi/communityService";
  import {  toast } from 'react-toastify';

  export const createcommunity = (obj) => (dispatch) => {
    return CommunityService.createCommunity(obj).then(
      (response) => {
  
        if (response.status === 'SUCCESS') {
  
          dispatch({
            type: CREATE_COMMUNITY,
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
  
  }
  
  
  
  export const updatecommunity = (obj) => (dispatch) => {
    return CommunityService.updateCommunity(obj).then(
      (response) => {
  
        if (response.status === 'SUCCESS') {
      
  
          dispatch({
            type: UPDATE_COMMUNITY,
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
  
  }
  
  export const Communityrule = (obj) => (dispatch) => {
    return CommunityService.PostCommunityRule(obj).then(
      (response) => {
  
        if (response.status === 'SUCCESS') {
          toast.success(response.message);
          dispatch({
            type: COMMUNITY_RULE,
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
  
  }
  
  export const RemoveCommunityrule = (ruleid) => (dispatch) => {
    return CommunityService.RemoveCommunityRule(ruleid).then(
      (response) => {
  
        if (response.status === 'SUCCESS') {
          toast.success(response.message);
  
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
  
  }
  
  export const joinCommunity = (obj) => (dispatch) => {
    return CommunityService.joinCommunity(obj).then(
      (response) => {
  
        if (response.status === 'SUCCESS') {
          toast.success(response.message);
          dispatch({
            type: JOIN_COMMUNITY,
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
  
  }
  
  
  export const approveCommunity = (obj) => (dispatch) => {
    return CommunityService.approveCommunity(obj).then(
      (response) => {
  
        if (response.status === 'SUCCESS') {
          toast.success(response.message);
          dispatch({
            type: APPROVE_COMMUNITY,
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
  
  }
  
  
  
  export const leaveCommunity = (obj) => (dispatch) => {
    return CommunityService.leaveCommunity(obj).then(
      (response) => {
  
        if (response.status === 'SUCCESS') {
          toast.success(response.message);
          dispatch({
            type: LEAVE_COMMUNITY,
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
  
  }
  
  
  export const communitydetails = (obj) => (dispatch) => {
    return CommunityService.getComunnitydetail(obj).then(
      (response) => {
        console.log(response);
  
        if (response.status === 'SUCCESS') {
  
          dispatch({
            type: FETCH_COMMUNITY_DETAIL,
            payload: { communitydetails: response.data }
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
  
  }
  
  
  export const fetchcommunitymember =  (obj) => (dispatch) => {
    console.log(obj);
    return CommunityService.getCommunityMember(obj).then(
      (response) => {
        console.log(response);
  
        if (response.status === 'SUCCESS') {
  
          dispatch({
            type: FETCH_COMMUNITY_MEMBER,
            payload: { communitymember: response.data }
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
  
  }
   
  
  
  