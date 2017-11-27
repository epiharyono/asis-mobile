const initialState = {
  loading: false,
  sppds: [],
  sppd: {},
  error: "",
};

export default function sppdsReducer(state = initialState, action){
  switch (action.type) {
    case "ALL_SPPDS_PENDING":
      state = {...state, loading: true};
      break;
    case "ALL_SPPDS_FULFILLED":
      state = {...state, loading: false, sppds: action.payload.data};
      break;
    case "ALL_SPPDS_REJECTED":
      state = {...state, loading: false, error: action.payload};
      break;
    case "GET_SPPD_PENDING":
      state = {...state, loading: true};;
      break;
    case "GET_SPPD_FULFILLED":
      state = {...state, sppd: action.payload.data, loading: false};
      break;
    case "GET_SPPD_REJECTED":
      state = {...state, error: action.payload};
      break;
    default:
      state;
  }

  return state;
}
