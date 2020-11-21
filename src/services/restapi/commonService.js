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
}

export default new CommonService();