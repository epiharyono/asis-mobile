const initialState = {
  loading: false,
  realisasis: [],
  error: "",
};

export default function realisasiReducer(state = initialState, action){
  switch (action.type) {
    case "GET_LRA_PENDING":
      state = {...state, loading: true};;
      break;
    case "GET_LRA_FULFILLED":
      state = {...state, realisasis: action.payload.data, loading: false};
      break;
    case "GET_LRA_REJECTED":
      state = {...state, error: action.payload};
      break;
    default:
      state;
  }

  return state;
}
