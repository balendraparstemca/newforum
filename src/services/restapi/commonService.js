import axios from "axios";

const API_URL = process.env.REACT_APP_API_KEY

class CommonService {

    getCategory() {
        return axios.get(API_URL + "common/category").then((response) => {
            console.log(response.data)
            return response.data;
        });
    }

    getAmenties(catid) {
        return axios.get(API_URL + "common/amenties/" + catid).then((response) => {
            console.log(response.data)
            return response.data;
        });
    }


    addFlare(obj) {
        return axios.post(API_URL + "common/add_flare", obj).then((response) => {
            return response.data;
        });
    }

    getRules(obj) {
        return axios.get(API_URL + "common/rule/" + obj).then((response) => {
            return response.data;
        });
    }

    getCommunityFlair(comid) {
        return axios.get(API_URL + "common/flair/" + comid).then((response) => {
            console.log(response)
            return response.data;
        });
    }

    
    getNotification(obj) {
        return axios.post(API_URL + "common/get_notification", obj ).then((response) => {
            console.log(response.data)
            return response.data;
        });
    }

    addNotification(obj) {
        return axios.post(API_URL + "common/add_notification", obj ).then((response) => {
            return response.data;
        });
    }

    removeNotification(obj) {
        return axios.post(API_URL + "common/remove_notification", obj ).then((response) => {
            return response.data;
        });
    }

}

export default new CommonService();