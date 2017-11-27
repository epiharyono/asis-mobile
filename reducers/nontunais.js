const initialState = {
  loading: false,
  nontunais: [],
  nontunai: {},
  error: "",
};

export default function nontunaisReducer(state = initialState, action){
  switch (action.type) {
    case "ALL_NONTUNAIS_PENDING":
      state = {...state, loading: true};
      break;
    case "ALL_NONTUNAIS_FULFILLED":
      state = {...state, loading: false, nontunais: action.payload.data};
      break;
    case "ALL_NONTUNAIS_REJECTED":
      state = {...state, loading: false, error: action.payload};
      break;
    case "GET_NONTUNAI_PENDING":
      state = {...state, loading: true};;
      break;
    case "GET_NONTUNAI_FULFILLED":
      state = {...state, nontunais: action.payload.data, loading: false};
      break;
    case "GET_NONTUNAI_REJECTED":
      state = {...state, error: action.payload};
      break;
    default:
      state;
  }

  return state;
}
