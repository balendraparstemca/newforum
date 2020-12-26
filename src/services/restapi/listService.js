import axios from "axios";
import { toast } from "react-toastify";

const API_URL = process.env.REACT_APP_API_KEY


class ListService {

    

    createList(obj) {
        return axios.post(API_URL + "list/create_list", obj).then((response) => {
            console.log(response.data)
            return response.data;
        });
    }

    updateList(obj) {
        return axios.post(API_URL + "list/update_list", obj).then((response) => {
            console.log(response.data)
            return response.data;
        });
    }

    updateListdetail(obj) {
        return axios.post(API_URL + "list/update_listdetail", obj).then((response) => {
            console.log(response.data)
            return response.data;
        });
    }

    addListAmenties(obj) {
        return axios.post(API_URL + "list/add_list_amenties", obj).then((response) => {
            console.log(response.data)
            return response.data;
        });
    }

    addImage(formData, listid) {
        return axios.post(API_URL + "utilities/list_images/upload/" + listid, formData)

    }

    addlistProfileImage(formData, listid) {
        return axios.post(API_URL + "utilities/listprofile_upload/" + listid, formData)

    }

    removeListImage(obj) {
        return axios.post(API_URL + "utilities/images/delete", obj).then((response)=>{
            return response;
        });

    }

    getlistdetail(obj) {
        return axios.post(API_URL + "list/get_list_detail", obj).then((response) => {
            console.log(response.data)
            return response.data;
        });
    }

    getlistfulldetail(obj) {
        console.log(obj)
        return axios.post(API_URL + "list/get_list_fulldetail", obj).then((response) => {
            console.log(response.data)
            return response.data;
        });
    }

    getlistAmenties(obj) {
        return axios.post(API_URL + "list/get_list_amenties", obj).then((response) => {
            console.log(response.data)
            return response.data;
        });
    }

    getlistImages(obj) {
        return axios.post(API_URL + "list/get_list_image", obj).then((response) => {
            console.log(response.data)
            return response.data;
        });
    }


    maplistAmenties(obj) {
        return axios.post(API_URL + "list/map_list_amenties", obj).then((response) => {
            console.log(response.data)
            return response.data;
        });
    }

    unmaplistAmenties(obj) {
        return axios.post(API_URL + "list/unmap_list_amenties", obj).then((response) => {
            console.log(response.data)
            return response.data;
        });
    }

   addlistshedule(obj) {
        return axios.post(API_URL + "list/add_list_shedule", obj).then((response) => {
            console.log(response.data)
            return response.data;
        });
    }

    getlistshedule(obj) {
        return axios.post(API_URL + "list/get_list_shedule", obj).then((response) => {
            console.log(response.data)
            return response.data;
        });
    }

    removelistshedule(obj) {
        return axios.post(API_URL + "list/remove_list_shedule", obj).then((response) => {
            console.log(response.data)
            return response.data;
        });
    }

    reviewlist(obj) {
        return axios.post(API_URL + "list/rating_listing", obj).then((response) => {
            console.log(response.data)
            return response.data;
        });
    }

    getReviewList(obj) {
        return axios.post(API_URL + "list/get_listrating", obj).then((response) => {
            console.log(response.data)
            return response.data;
        });
    }

    getpeopleviewList(obj) {
        return axios.post(API_URL + "list/people_viewed_list", obj).then((response) => {
            console.log(response.data)
            return response.data;
        });
    }
    
    getsimilarList(obj) {
        return axios.post(API_URL + "list/similar_list", obj).then((response) => {
            console.log(response.data)
            return response.data;
        });
    }

    saveListing(obj) {
        return axios.post(API_URL + "list/save_list", obj).then((response) => {
            console.log(response.data)
            return response.data;
        });
    }

    viewListing(obj) {
        return axios.post(API_URL + "list/view_list", obj).then((response) => {
            console.log(response.data)
            return response.data;
        });
    }

    likeListing(obj) {
        return axios.post(API_URL + "list/like_list", obj).then((response) => {
            console.log(response.data)
            return response.data;
        });
    }

    reportList(obj) {
        return axios.post(API_URL + "list/report_list", obj).then((response) => {
            return response.data;
        });
    }

    getuserList(userid) {
        return axios.get(API_URL + "list/getuser_list/" + userid).then((response) => {
            return response.data;
        });
    }

    getusersavedList(userid) {
        return axios.get(API_URL + "list/getuser_save_list/" + userid).then((response) => {
            return response.data;
        });
    }


    unsaveList(obj) {
        return axios.post(API_URL + "list/unsave_list", obj).then((response) => {
            return response.data;
        });
    }


    getHomeList() {
        return axios.get(API_URL + "list/gethome_list").then((response) => {
            return response.data;
        });
    }

    getCategoryList(catid) {
        return axios.get(API_URL + "list/getcategory_list/" + catid).then((response) => {
            return response.data;
        });
    }


}

export default new ListService();