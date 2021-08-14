import {
  REGISTER_SUCCESS,
  LOGIN_SUCCESS,
  LOGOUT,
  PROFILE_UPDATE_SUCCESS,
  ACCOUNT_DELETE_SUCCESS,
  REMOVE_READ_LATER_SUCCESS,
  ADD_READ_LATER_SUCCESS
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
      };
    case LOGOUT:
    case ACCOUNT_DELETE_SUCCESS:
      return {
        ...state,
        user: null,
      };
    case REMOVE_READ_LATER_SUCCESS:
      return {
        ...state,
        user = {...user, readLaterList:{...action.payload}},
      };
    default:
      return state;
  }
};

export default userReducer;
