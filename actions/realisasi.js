import axios from 'axios';

import {apiUrl} from '../utils/config';

export function getLra(id){
  return {
    type: "GET_LRA",
    payload: axios.get(`${apiUrl}/get_lra/${id}`)
  }
}
