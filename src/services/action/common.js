import { toast } from 'react-toastify';
import { FETCH_AMENTIES, FETCH_CATEGORY, SET_MESSAGE } from "../actionType";
import CommonService from "../restapi/commonService";

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