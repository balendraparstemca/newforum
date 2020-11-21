import axios from "axios";

const API_URL = "http://localhost:7999/api/v1/";

class AuthService {
  login(email_id, password) {
    return axios
      .post(API_URL + "signin", { email_id, password })
      .then((response) => {
       return response.data;
      });
  }

  logout() {
    localStorage.removeItem("user");
  }

  register(first_name,last_name,user_name, email_id, password) {
    return axios.post(API_URL + "signup", {
      first_name,
      last_name,
      user_name,
      email_id,
      password,
    }).then((response) => {
   
      return response.data;
    });;
  }
}

export default new AuthService();