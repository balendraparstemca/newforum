import {
    SET_MESSAGE,FETCH_USER_DETAIL,FETCH_USER_POST_COMMENT, FETCH_USER_SAVED_POST
} from "../actionType";
import UserService from "../restapi/userService";

import {  toast } from 'react-toastify';
export const userdetails = (obj) => (dispatch) => {
  return UserService.getUserdetail(obj).then(
      (response) => {
        console.log(response);
        
          if (response.status === 'SUCCESS') {
              
            dispatch({
              type: FETCH_USER_DETAIL,
              payload:{userdetails:response.data}
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


export const FetchUserpostComment = (userid) => (dispatch) => {
    
  return UserService.getUserPostComment(userid).then(
      (response) => {
        
          if (response.status === 'SUCCESS') {
          
            dispatch({
              type: FETCH_USER_POST_COMMENT,
              payload:{upostcomment:response.data}
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
            toast.error(message);
         
          dispatch({
            type: SET_MESSAGE,
            payload: message,
          });
    
          return Promise.reject();
        }
      );

}

export const FetchUserSavedpost = (userid) => (dispatch) => {
    
  return UserService.getUserSavedPost(userid).then(
      (response) => {
        
          if (response.status === 'SUCCESS') {
            toast.success(response.message);
            dispatch({
              type: FETCH_USER_SAVED_POST,
              payload:{savedpost:response.data}
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
            toast.error(message);
         
          dispatch({
            type: SET_MESSAGE,
            payload: message,
          });
    
          return Promise.reject();
        }
      );

}


export const UnSaveposts = (userid) => (dispatch) => {
    
  return UserService.unSavePost(userid).then(
      (response) => {
        
          if (response.status === 'SUCCESS') {
            toast.success(response.message);

    
          }
          else {
            toast.success(response.message);
           
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
        
    
          return Promise.reject();
        }
      );

}


export const Deletecomments = (commentid) => (dispatch) => {
    
  return UserService.deleteComment(commentid).then(
      (response) => {
        
          if (response.status === 'SUCCESS') {
            toast.success(response.message);

    
          }
          else {
            toast.success(response.message);
           
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
        
    
          return Promise.reject();
        }
      );

}


export const DeletePosts = (postid) => (dispatch) => {
    
  return UserService.DeletePosts(postid).then(
      (response) => {
        
          if (response.status === 'SUCCESS') {
            toast.success(response.message);

    
          }
          else {
            toast.success(response.message);
           
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
        
    
          return Promise.reject();
        }
      );

}