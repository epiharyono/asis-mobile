const initialState = {
  loading: false,
  profiles: [],
  profile: {},
  error: "",
};

export default function profilesReducer(state = initialState, action){
  switch (action.type) {
    case "GET_PROFILE_PENDING":
      state = {...state, loading: true};;
      break;
    case "GET_PROFILE_FULFILLED":
      state = {...state, profile: action.payload.data, loading: false};
      break;
    case "GET_PROFILE_REJECTED":
      state = {...state, error: action.payload};
      break;
    default:
      state;
  }

  return state;
}
