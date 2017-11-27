import axios from 'axios';

import {apiUrl} from '../utils/config';

export function allNontunai(id){
  return {
    type: "ALL_NONTUNAIS",
    payload: axios.get(`${apiUrl}/nontunai/${id}`)
  }
}

export function getNontunai(id){
  return {
    type: "GET_NONTUNAI",
    payload: axios.get(`${apiUrl}/nontunai/${id}/detail`)
  }
}
