import { toast } from 'react-toastify';
import { ADD_LIST_AMENTIES, CREATE_LISTING, GET_LIST_IMAGE, GET_LIST_AMENTIES, GET_LIST_DETAIL, GET_LIST_FULLDETAIL, SET_MESSAGE, UPDATE_LISTINGDETAIL, ADD_LIST_SHEDULE, GET_LIST_SHEDULE, POST_LIST_REVIEW, GET_LIST_REVIEW, GET_USER_LIST, GET_USER_SAVE_LIST, GET_HOME_LIST, GET_CATEGORY_LIST } from '../actionType';
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

export const UpdateListing = (obj) => (dispatch) => {

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
                    payload: { amenties: response.data }

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
                    payload: { listdetail: response.data }

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
                    payload: { listfulldetail: response.data }

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


export const addImageListprofile = (formdata, listingid) => (dispatch) => {

    return ListService.addlistProfileImage(formdata, listingid).then(
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

export const addImageList = (formdata, listingid) => (dispatch) => {

    return ListService.addImage(formdata, listingid).then(
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



export const saveList = (obj) => (dispatch) => {

    return ListService.saveListing(obj).then(
        (response) => {
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


export const reportList = (obj) => (dispatch) => {

    return ListService.reportList(obj).then(
        (response) => {
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
                payload: { listshedule: response.data }

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


export const addListReview = (obj) => (dispatch) => {

    return ListService.reviewlist(obj).then(
        (response) => {

            dispatch({
                type: POST_LIST_REVIEW,

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


export const userUnsaveList = (obj) => (dispatch) => {

    return ListService.unsaveList(obj).then(
        (response) => {

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


export const gethomeList = () => (dispatch) => {

    return ListService.getHomeList().then(
        (response) => {
            console.log(response.data)

            dispatch({
                type: GET_HOME_LIST,
                payload: { homelist: response.data }

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


export const getlistreview = (obj) => (dispatch) => {

    return ListService.getReviewList(obj).then(
        (response) => {
            if (response.status === 'SUCCESS') {

                dispatch({
                    type: GET_LIST_REVIEW,
                    payload: { reviewlist: response.data }
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




export const getuserlist = (id) => (dispatch) => {

    return ListService.getuserList(id).then(
        (response) => {
            if (response.status === 'SUCCESS') {

                dispatch({
                    type: GET_USER_LIST,
                    payload: { userlist: response.data }
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




export const getusersavedlist = (id) => (dispatch) => {

    return ListService.getusersavedList(id).then(
        (response) => {
            if (response.status === 'SUCCESS') {

                dispatch({
                    type: GET_USER_SAVE_LIST,
                    payload: { savedlist: response.data }
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





export const getCategorylist = (id) => (dispatch) => {

    return ListService.getCategoryList(id).then(
        (response) => {
            if (response.status === 'SUCCESS') {

                dispatch({
                    type: GET_CATEGORY_LIST,
                    payload: { catlist: response.data }
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