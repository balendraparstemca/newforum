import { toast } from 'react-toastify';
import {GET_NOTIFICATION, ADD_NOTIFICATION, REMOVE_NOTIFICATION, FETCH_AMENTIES, FETCH_CATEGORY, FETCH_COMMUNITYLIST, FETCH_FLAIR_SUCCESS, FETCH_JOINED_COMMUNITYLIST, FETCH_RULE_FAILED, FETCH_RULE_SUCCESS, FETCH_USER_COMMUNITYLIST, SET_MESSAGE } from "../actionType";
import CommonService from "../restapi/commonService";
import communityService from '../restapi/communityService';
import Compress from 'image-compressor';
import { post } from 'axios'

export const MyimageCompressor = file => {
  return new Promise(resolve => {
    new Compress(file, {
      quality: 0.6,
      success: file => resolve(file),
      error: err => console.log(err.message),
    })
  })
}


export const getAddress = async (latitude, longitude) => {
  //let { latitude, longitude } = pos.coords,
  return await post(
    `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=AIzaSyDrvibBwyjEzoTW9WT8Tnw3KBEqR5v-CKg`
  )


  //loc = results[0].formatted_address
  //return loc
}

export const fetchCategory = () => (dispatch) => {
  return CommonService.getCategory().then((response) => {

    if (response.status === 'SUCCESS') {

      dispatch({
        type: FETCH_CATEGORY,
        payload: { category: response.data }
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

      toast.error(message + ' category not fecthed');
      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });

      return Promise.reject();
    }
  );

}


export const fetchAmenties = (catid) => (dispatch) => {
  return CommonService.getAmenties(catid).then(
    (response) => {

      if (response.status === 'SUCCESS') {

        dispatch({
          type: FETCH_AMENTIES,
          payload: { amenties: response.data }
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

export const fetchRules = (obj) => (dispatch) => {
  return CommonService.getRules(obj).then(
    (response) => {

      if (response.status === 'SUCCESS') {

        dispatch({
          type: FETCH_RULE_SUCCESS,
          payload: { rule: response.data }
        });
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
      toast.error(message)

      return Promise.reject();
    }
  );

}


export const fetchFlair = (comid) => (dispatch) => {
  return CommonService.getCommunityFlair(comid).then(
    (response) => {

      if (response.status === 'SUCCESS') {

        dispatch({
          type: FETCH_FLAIR_SUCCESS,
          payload: { flair: response.data }
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


export const fetchCommunityList = (obj) => (dispatch) => {

  return communityService.getComunnityList(obj).then(
    (response) => {
      console.log(response);
      if (response.status === 'SUCCESS') {

        dispatch({
          type: FETCH_COMMUNITYLIST,
          payload: { communitylist: response.data }
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

export const fetchUserCommunityList = (obj) => (dispatch) => {

  return communityService.getUserCreatedCommunityList(obj).then(
    (response) => {

      if (response.status === 'SUCCESS') {

        dispatch({
          type: FETCH_USER_COMMUNITYLIST,
          payload: { communitylist: response.data }
        });

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
      toast.error(message)

      return Promise.reject();
    }
  );

}

export const fetchJoinedCommunityList = (obj) => (dispatch) => {

  return communityService.getUserjoinedCommunityList(obj).then(
    (response) => {

      if (response.status === 'SUCCESS') {

        dispatch({
          type: FETCH_JOINED_COMMUNITYLIST,
          payload: { communitylist: response.data }
        });

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
      toast.error(message)

      return Promise.reject();
    }
  );

}


export const addFlaretags = (obj) => (dispatch) => {

  return CommonService.addFlare(obj).then(
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
      toast.error(message)

      return Promise.reject();
    }
  );

}

export const addNotification = (obj) => (dispatch) => {
  return CommonService.addNotification(obj).then(
      (response) => {
          if (response.status === 'SUCCESS') {

              dispatch({
                  type: ADD_NOTIFICATION,

              });
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
          toast.error(message)


          return Promise.reject();
      }
  );

}


export const removeNotification = (obj) => (dispatch) => {
  return CommonService.removeNotification(obj).then(
      (response) => {
          if (response.status === 'SUCCESS') {

              dispatch({
                  type: REMOVE_NOTIFICATION,
              });
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
          toast.error(message)


          return Promise.reject();
      }
  );

}


export const getNotification = (obj) => (dispatch) => {
  return CommonService.getNotification(obj).then(
      (response) => {
          if (response.status === 'SUCCESS') {

              dispatch({
                  type: GET_NOTIFICATION,
                  payload: { notification: response.data }
              });
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
          toast.error(message)


          return Promise.reject();
      }
  );

}