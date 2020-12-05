import axios from "axios";


const API_URL = "http://localhost:7999/api/v1/";

class PostService {
  createPost(obj) {
    return axios.post(API_URL + "createpost", obj).then((response) => {
      console.log(response);

      return response.data;
    });
  }

  updatePost(obj) {
    return axios.post(API_URL + "updatepost", obj).then((response) => {
      console.log(response);

      return response.data;
    });
  }

  savePost(obj) {
    return axios.post(API_URL + "save_post", obj).then((response) => {
      console.log(response);

      return response.data;
    });
  }

  CommentVote(obj) {
    return axios.post(API_URL + "commentvote", obj).then((response) => {
      console.log(response);

      return response.data;
    });
  }

  reportPost(obj) {
    return axios.post(API_URL + "report_post", obj).then((response) => {
      console.log(response);

      return response.data;
    });
  }

  PostComment(obj) {
    return axios.post(API_URL + "post_comment", obj).then((response) => {
      console.log(response);
      return response.data;
    });
  }

  getCommunityPost(id) {
    return axios.get(API_URL + "community_posts/" + id).then((response) => {
      console.log(response);

      return response.data;
    });
  }

  getUserPost(id) {
    return axios.get(API_URL + "user_posts/" + id).then((response) => {
      console.log(response);

      return response.data;
    });
  }

  getHomePost() {
    return axios.get(API_URL + "home_posts").then((response) => {
      console.log(response);

      return response.data;
    });
  }

  getPostDetail(obj) {
    return axios.post(API_URL + "post_detail", obj).then((response) => {
      console.log(response);

      return response.data;
    });
  }


  getPostComment(postid) {
    return axios.get(API_URL + "fetchpost-comment/" + postid).then((response) => {
      console.log(response);

      return response.data;
    });
  }

  postUpvote(obj)
  {
    return axios.post(API_URL + "upvote",obj).then((response) => {
      console.log(response);
      
      return response.data;
    });
  }

  postDownvote(obj)
  {
    return axios.post(API_URL + "downvote",obj).then((response) => {
      console.log(response);

      return response.data;
    });
  }

  postRemovevote(obj)
  {
    return axios.post(API_URL + "removevote",obj).then((response) => {
      console.log(response);

      return response.data;
    });
  }

  postRemoveComment(commentid)
  {
    return axios.get(API_URL + "delete_comment/" + commentid).then((response) => {
      console.log(response);

      return response.data;
    });
  }



}

export default new PostService();