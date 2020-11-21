import axios from "axios";
import { toast } from "react-toastify";

const API_URL = "http://localhost:7999/api/v1/list/";

class ListService {

    createList(obj) {
        return axios.post(API_URL + "create_list", obj).then((response) => {
            console.log(response.data)
            return response.data;
        });
    }

    updateList(obj) {
        return axios.post(API_URL + "update_list", obj).then((response) => {
            console.log(response.data)
            return response.data;
        });
    }

    updateListdetail(obj) {
        return axios.post(API_URL + "update_listdetail", obj).then((response) => {
            console.log(response.data)
            return response.data;
        });
    }

    addListAmenties(obj) {
        return axios.post(API_URL + "add_list_amenties", obj).then((response) => {
            console.log(response.data)
            return response.data;
        });
    }

    addImage(formData, listid) {
        return axios.post("http://localhost:7999/api/v1/utilities/list_images/upload/" + listid, formData)

    }

    addlistProfileImage(formData, listid) {
        return axios.post("http://localhost:7999/api/v1/utilities/listprofile_upload/" + listid, formData)

    }

    removeListImage(obj) {
        return axios.post("http://localhost:7999/api/v1/utilities/images/delete", obj).then((response)=>{
            return response;
        });

    }

    getlistdetail(obj) {
        return axios.post(API_URL + "get_list_detail", obj).then((response) => {
            console.log(response.data)
            return response.data;
        });
    }

    getlistfulldetail(obj) {
        console.log(obj)
        return axios.post(API_URL + "get_list_fulldetail", obj).then((response) => {
            console.log(response.data)
            return response.data;
        });
    }

    getlistAmenties(obj) {
        return axios.post(API_URL + "get_list_amenties", obj).then((response) => {
            console.log(response.data)
            return response.data;
        });
    }

    getlistImages(obj) {
        return axios.post(API_URL + "get_list_image", obj).then((response) => {
            console.log(response.data)
            return response.data;
        });
    }


    maplistAmenties(obj) {
        return axios.post(API_URL + "map_list_amenties", obj).then((response) => {
            console.log(response.data)
            return response.data;
        });
    }

    unmaplistAmenties(obj) {
        return axios.post(API_URL + "unmap_list_amenties", obj).then((response) => {
            console.log(response.data)
            return response.data;
        });
    }

   addlistshedule(obj) {
        return axios.post(API_URL + "add_list_shedule", obj).then((response) => {
            console.log(response.data)
            return response.data;
        });
    }

    getlistshedule(obj) {
        return axios.post(API_URL + "get_list_shedule", obj).then((response) => {
            console.log(response.data)
            return response.data;
        });
    }

    removelistshedule(obj) {
        return axios.post(API_URL + "remove_list_shedule", obj).then((response) => {
            console.log(response.data)
            return response.data;
        });
    }

}

export default new ListService();