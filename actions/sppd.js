import axios from 'axios';

import {apiUrl} from '../utils/config';

export function allSPPD(id){
  return {
    type: "ALL_SPPDS",
    payload: axios.get(`${apiUrl}/sp2ds/${id}`)
  }
}

export function getSPPD(id){
  return {
    type: "GET_SPPD",
    payload: axios.get(`${apiUrl}/users/${id}`)
  }
}
