import axios from 'axios';

import {apiUrl} from '../utils/config';

export function getProfile(id){
  return {
    type: "GET_PROFILE",
    payload: axios.get(`${apiUrl}/get_profile/${id}`)
  }
}
