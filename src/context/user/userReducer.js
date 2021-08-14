import {
  REGISTER_SUCCESS,
  LOGIN_SUCCESS,
  LOGOUT_SUCESS,
  PROFILE_UPDATE_SUCCESS,
  ACCOUNT_DELETE_SUCCESS,
  REMOVE_READ_LATER_SUCCESS,
  ADD_READ_LATER_SUCCESS,
} from "../types";

const userReducer = (state, action) => {
  switch (action.type) {
    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
    case PROFILE_UPDATE_SUCCESS:
    case ADD_READ_LATER_SUCCESS:
      return {
        ...state,
        user: action.payload,
        token: action.payload.email,
      };
    case LOGOUT_SUCESS:
    case ACCOUNT_DELETE_SUCCESS:
      return {
        ...state,
        user: null,
        token: null,
      };
    case REMOVE_READ_LATER_SUCCESS:
      return {
        ...state,
        user: { ...state.user, readLaterList: { ...action.payload } },
      };
    default:
      return state;
  }
};

export default userReducer;
