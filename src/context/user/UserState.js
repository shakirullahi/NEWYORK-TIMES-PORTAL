import React, { useReducer } from "react";
import UserContext from "./userContext";
import userReducer from "./userReducer";

const UserState = (props) => {
  const initialState = {};

  const [state, dispatch] = useReducer(userReducer, initialState);

  // Register user
  const register = async (formData) => {
    console.log(formData);

    try {
      dispatch({ type: REGISTER_SUCCESS, payload: "" });
    } catch (err) {
      console.log(err);
      dispatch({ type: REGISTER_FAIL, payload: err.response.data.msg });
    }
  };

  // login user
  const login = async (formData) => {
    try {
      dispatch({ type: LOGIN_SUCCESS, payload: "" });
    } catch (err) {
      console.log(err);
      dispatch({ type: LOGIN_FAIL, payload: err.response.data.msg });
    }
  };

  // logout user
  const logout = () => {
    dispatch({ type: LOGOUT });
  };

  return (
    <UserContext.Provider value={{}}>{props.children}</UserContext.Provider>
  );
};

export default UserState;
