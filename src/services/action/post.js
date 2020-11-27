import {
    SET_MESSAGE,CREATE_POST,FETCH_POST_COMMENT,POST_COMMENT, FETCH_POST_DETAIL,FETCH_COMMUNITY_POST,FETCH_USER_POST, POST_UPVOTE, POST_DOWNVOTE, SAVE_POST, REPORT_POST
} from "../actionType";
import PostService from "../restapi/postService";
import {  toast } from 'react-toastify';
export const createpost = (obj) => (dispatch) => {
    
    return PostService.createPost(obj).then(
        (response) => {
          
            if (response.status === 'SUCCESS') {
                
              dispatch({
                type: CREATE_POST,
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

export const fetchCommunityPost = (id) => (dispatch) => {
  return PostService.getCommunityPost(id).then(
    (response) => {
 
      if (response.status === 'SUCCESS') {

        dispatch({
          type: FETCH_COMMUNITY_POST,
          payload: { posts: response.data }
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

export const fetchUserPost = (id) => (dispatch) => {
  return PostService.getUserPost(id).then(
    (response) => {
 
      if (response.status === 'SUCCESS') {

        dispatch({
          type: FETCH_USER_POST,
          payload: { posts: response.data }
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


export const fetcPostDetail = (obj) => (dispatch) => {
  console.log(obj);
  return PostService.getPostDetail(obj).then(
    (response) => {
   console.log(response);
      if (response.status === 'SUCCESS') {

        dispatch({
          type:  FETCH_POST_DETAIL,
          payload: { postdetail: response.data }
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


export const postComment = (obj) => (dispatch) => {
    
  return PostService.PostComment(obj).then(
      (response) => {
     
        
          if (response.status === 'SUCCESS') {
            toast.success(response.message);
            dispatch({
              type: POST_COMMENT,
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

export const savePost = (obj) => (dispatch) => {
    
  return PostService.savePost(obj).then(
      (response) => {
     
        
          if (response.status === 'SUCCESS') {
            toast.success(response.message);
            dispatch({
              type: SAVE_POST,
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


export const reportPost = (obj) => (dispatch) => {
    
  return PostService.reportPost(obj).then(
      (response) => {
     
        
          if (response.status === 'SUCCESS') {
            toast.success(response.message);
            dispatch({
              type: REPORT_POST,
            });
    
            
          }
          else {
            toast.error(response.message);
       
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




export const FetchpostComment = (postid) => (dispatch) => {
    
  return PostService.getPostComment(postid).then(
      (response) => {
        
          if (response.status === 'SUCCESS') {
              
            dispatch({
              type: FETCH_POST_COMMENT,
              payload:{comments:response.data}
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



export const postUpvote = (obj) => (dispatch) => {
    
  return PostService.postUpvote(obj).then(
      (response) => {
        
          if (response.status === 'SUCCESS') {
            toast.success(response.message);
              
            dispatch({
              type: POST_UPVOTE,
            });
    
            dispatch({
              type: SET_MESSAGE,
              payload: response.message,
            });
    
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
         
          dispatch({
            type: SET_MESSAGE,
            payload: message,
          });
    
          return Promise.reject();
        }
      );

}


export const postDownvote = (obj) => (dispatch) => {
    
  return PostService.postDownvote(obj).then(
      (response) => {
        
          if (response.status === 'SUCCESS') {
            toast.success(response.message);
            dispatch({
              type: POST_DOWNVOTE,
            });
    
            dispatch({
              type: SET_MESSAGE,
              payload: response.message,
            });
    
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
         
          dispatch({
            type: SET_MESSAGE,
            payload: message,
          });
    
          return Promise.reject();
        }
      );

}



export const postCommentvote = (obj) => (dispatch) => {
    
  return PostService.CommentVote(obj).then(
      (response) => {
        
          if (response.status === 'SUCCESS') {
              
            toast.success(response.message)
    
          }
          else {
          
            toast.error(response.message)
    
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
            toast.success(message)
         
    
          return Promise.reject();
        }
      );

}

export const postCommentdelete = (commentid) => (dispatch) => {
    
  return PostService.postRemoveComment(commentid).then(
      (response) => {
        
          if (response.status === 'SUCCESS') {
              
            toast.success(response.message)
    
          }
          else {
          
            toast.error(response.message)
    
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
            toast.success(message)
         
    
          return Promise.reject();
        }
      );

}



export const postUpdate = (obj) => (dispatch) => {
    
  return PostService.updatePost(obj).then(
      (response) => {
        
          if (response.status === 'SUCCESS') {
              
            toast.success(response.message);
          }
          else {
           
            toast.success(response.message);
    
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