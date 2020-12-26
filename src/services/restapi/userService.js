import axios from "axios";

const API_URL = process.env.REACT_APP_API_KEY

class UserService {


  getUserdetail(obj) {
    return axios.post(API_URL + "userdetail", obj).then((response) => {
      console.log(response.data);
      return response.data;
    });
  }

  verifyuser(obj) {
    return axios.post(API_URL + "users/activateuser", obj).then((response) => {
      console.log(response.data);
      return response.data;
    });
  }

 resetUserpassword(obj) {
    return axios.post(API_URL + "users/reset_email", obj).then((response) => {
      console.log(response.data);
      return response.data;
    });
  }

  changePassword(obj) {
    return axios.post(API_URL + "users/change_password", obj).then((response) => {
      console.log(response.data);
      return response.data;
    });
  }

  getUserPostComment(id) {
    return axios.get(API_URL + "user_postcomment/" + id).then((response) => {
      console.log(response);

      return response.data;
    });
  }

  getUserSavedPost(id) {
    return axios.get(API_URL + "saved_posts/" + id).then((response) => {
      console.log(response);

      return response.data;
    });
  }

  unSavePost(id) {
    return axios.get(API_URL + "unsave_posts/" + id).then((response) => {
      console.log(response);

      return response.data;
    });
  }

  deleteComment(id) {
    return axios.get(API_URL + "delete_comment/" + id).then((response) => {
      console.log(response);

      return response.data;
    });
  }

  DeletePosts(id) {
    return axios.get(API_URL + "delete_posts/" + id).then((response) => {
      console.log(response);
      return response.data;
    });
  }

}

export default new UserService();