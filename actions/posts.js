import axios from 'axios';

import {apiUrl} from '../utils/config';

export function allPosts(){
  return {
    type: "ALL_POSTS",
    // payload: axios.get(`${apiUrl}/posts`)
    payload: axios.get(`${apiUrl}/get_lra/23`)
  }
}

export function getPost(id){
  return {
    type: "GET_POST",
    payload: axios.get(`${apiUrl}/posts/${id}`)
  }
}
