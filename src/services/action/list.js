import { toast } from 'react-toastify';
import { ADD_LIST_AMENTIES, CREATE_LISTING,GET_LIST_IMAGE, GET_LIST_AMENTIES, GET_LIST_DETAIL, GET_LIST_FULLDETAIL, SET_MESSAGE, UPDATE_LISTINGDETAIL, ADD_LIST_SHEDULE, GET_LIST_SHEDULE } from '../actionType';
import ListService from "../restapi/listService";

export const CreateListing = (obj) => (dispatch) => {

    return ListService.createList(obj).then(
        (response) => {
            if (response.status === 'SUCCESS') {
                dispatch({
                    type: CREATE_LISTING,
                    payload: { list: response.data }
                });

                toast.success(response.message)

            }
            else {
                toast.warning(response.message)

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
            toast.error(message)

            return Promise.reject();
        }
    );

}

export const   UpdateListing = (obj) => (dispatch) => {

    return ListService.updateList(obj).then(
        (response) => {
            if (response.status === 'SUCCESS') {
                dispatch({
                    type: CREATE_LISTING,
                    payload: { list: response.data }
                });

                toast.success(response.message)

            }
            else {
                toast.warning(response.message)

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
            toast.error(message)

            return Promise.reject();
        }
    );

}

export const UpdateListingdetail = (obj) => (dispatch) => {

    return ListService.updateListdetail(obj).then(
        (response) => {
            if (response.status === 'SUCCESS') {
                dispatch({
                    type: UPDATE_LISTINGDETAIL,
                    
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




export const AddListAmenties = (obj) => (dispatch) => {

    return ListService.addListAmenties(obj).then(
        (response) => {
            if (response.status === 'SUCCESS') {
                dispatch({
                    type: ADD_LIST_AMENTIES,
                   
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


export const getListAmenties = (obj) => (dispatch) => {

    return ListService.getlistAmenties(obj).then(
        (response) => {
            if (response.status === 'SUCCESS') {
                dispatch({
                    type: GET_LIST_AMENTIES,
                    payload:{amenties:response.data}
                   
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



export const getListDetail = (obj) => (dispatch) => {
    console.log(obj)

    return ListService.getlistdetail(obj).then(
        (response) => {
            if (response.status === 'SUCCESS') {
                dispatch({
                    type: GET_LIST_DETAIL,
                    payload:{listdetail:response.data}
                   
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




export const getListFullDetail = (obj) => (dispatch) => {

    return ListService.getlistfulldetail(obj).then(
        (response) => {
            if (response.status === 'SUCCESS') {
                dispatch({
                    type: GET_LIST_FULLDETAIL,
                    payload:{listfulldetail:response.data}
                   
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

export const mapAmentiestoList = (obj) => (dispatch) => {

    return ListService.maplistAmenties(obj).then(
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


export const unmapAmentiestoList = (obj) => (dispatch) => {

    return ListService.unmaplistAmenties(obj).then(
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



export const removeImageList = (obj) => (dispatch) => {

    return ListService.removeListImage(obj).then(
        (response) => {
           toast.success(response)

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


export const addImageListprofile = (formdata,listingid) => (dispatch) => {

    return ListService.addlistProfileImage(formdata,listingid).then(
        (response) => {
           toast.success('successfully added image')

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

export const addImageList = (formdata,listingid) => (dispatch) => {

    return ListService.addImage(formdata,listingid).then(
        (response) => {
           toast.success('successfully added image')

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

export const remveListshedule = (obj) => (dispatch) => {

    return ListService.removelistshedule(obj).then(
        (response) => {
           toast.success('successfully added image')

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



export const addListShedule = (obj) => (dispatch) => {

    return ListService.addlistshedule(obj).then(
        (response) => {

            dispatch({
                type: ADD_LIST_SHEDULE,
            
            });
           toast.success('successfully added shedule')

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


export const getListShedule = (obj) => (dispatch) => {

    return ListService.getlistshedule(obj).then(
        (response) => {
            console.log(response.data);

            dispatch({
                type: GET_LIST_SHEDULE,
                payload:{listshedule: response.data}
            
            });
           toast.success(response.message)

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







export const getlistimage = (obj) => (dispatch) => {

    return ListService.getlistImages(obj).then(
        (response) => {
            if (response.status === 'SUCCESS') {
            
                dispatch({
                    type: GET_LIST_IMAGE,
                    payload: { listimage: response.data }
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