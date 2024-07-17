import {
  FETCH_USERS,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAIL,
} from "../actions/user";

const initialState = {
  loading: false,
  data: [],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS:
      return {
        ...state,
        loading: true,
      };
    case FETCH_USERS_SUCCESS:
      return {
        data: action.payload,
        loading: false,
      };
    case FETCH_USERS_FAIL:
      return {
        data: [],
        loading: false,
      };
    default:
      return state;
  }
};

export default usersReducer;
