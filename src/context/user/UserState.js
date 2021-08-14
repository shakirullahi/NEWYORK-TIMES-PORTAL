import React, { useReducer } from "react";
import UserContext from "./userContext";
import userReducer from "./userReducer";

import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
} from "../types";

const UserState = (props) => {
  const initialState = {
    user: null,
    readLaterList: [],
    currentReadLaterPage: 1,
  };

  const [state, dispatch] = useReducer(userReducer, initialState);

  // Register user
  const register = async (formData) => {
    console.log(formData);

    try {
      var users = [];
      // Parse the serialized data back into an aray of objects
      users = JSON.parse(localStorage.getItem("users")) || [];

      //check for existing email id
      let userFound = users.some((user) => user.email === formData.email);

      if (userFound) {
        alert("Email address already exist !!");
      } else {
        // Push the new data (whether it be an object or anything else) onto the array
        users.push(formData);
        // Re-serialize the array back into a string and store it in localStorage
        localStorage.setItem("users", JSON.stringify(users));

        dispatch({ type: REGISTER_SUCCESS, payload: "" });
      }
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
