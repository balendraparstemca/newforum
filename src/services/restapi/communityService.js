import axios from "axios";

const API_URL = "http://localhost:7999/api/v1/";

class CommunityService {

  createCommunity(obj) {
    return axios.post(API_URL + "createcommunity", obj).then((response) => {
      return response.data;
    });
  }

  updateCommunity(obj) {
    return axios.post(API_URL + "update_community", obj).then((response) => {
      return response.data;
    });
  }

  joinCommunity(obj) {
    return axios.post(API_URL + "join_community", obj).then((response) => {
      return response.data;
    });
  }

  approveCommunity(obj) {
    return axios.post(API_URL + "approve_community", obj).then((response) => {
      return response.data;
    });
  }

  leaveCommunity(obj) {
    return axios.post(API_URL + "leave_community", obj).then((response) => {
      return response.data;
    });
  }

  PostCommunityRule(obj) {
    return axios.post(API_URL + "community_rule", obj).then((response) => {
      return response.data;
    });
  }

  RemoveCommunityRule(ruleid) {
    return axios.get(API_URL + "delete_rule/" + ruleid).then((response) => {
      return response.data;
    });

  }



  getComunnitydetail(obj) {
    return axios.post(API_URL + "communitydetail", obj).then((response) => {
      console.log(response.data);
      return response.data;
    });
  }

  getComunnityList(obj) {
    return axios.post(API_URL + 'community', obj).then((response) => {
      console.log(response.data);
      return response.data;
    });
  }

  getCommunityMember(obj) {
    return axios.post(API_URL + 'community_member', obj).then((response) => {
      console.log(response.data);
      return response.data;
    });
  }

}

export default new CommunityService();