import axios from "axios";

const API_URL = "http://localhost:7999/api/v1/common/";

class CommonService {

    getCategory() {
        return axios.get(API_URL + "category").then((response) => {
            console.log(response.data)
            return response.data;
        });
    }

    getAmenties(catid) {
        return axios.get(API_URL + "amenties/" + catid).then((response) => {
            console.log(response.data)
            return response.data;
        });
    }


    

    getRules(obj) {
        return axios.get(API_URL + "rule/" + obj).then((response) => {
            return response.data;
        });
    }

    getCommunityFlair(comid) {
        return axios.get(API_URL + "flair/" + comid).then((response) => {
            console.log(response)
            return response.data;
        });
    }
}

export default new CommonService();