import React, { useReducer } from "react";
import UserContext from "./userContext";
import userReducer from "./userReducer";

import {
  REGISTER_SUCCESS,
  LOGIN_SUCCESS,
  LOGOUT_SUCESS,
  PROFILE_UPDATE_SUCCESS,
  ACCOUNT_DELETE_SUCCESS,
  ADD_READ_LATER_SUCCESS,
  REMOVE_READ_LATER_SUCCESS,
} from "../types";

const UserState = (props) => {
  const initialState = {
    user: null,
    token: localStorage.getItem("token"),
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
        formData.readLaterList = [];
        users.push(formData);
        // Re-serialize the array back into a string and store it in localStorage
        localStorage.setItem("users", JSON.stringify(users));
        localStorage.setItem("token", formData.email);

        delete formData.password;

        dispatch({ type: REGISTER_SUCCESS, payload: formData });
      }
    } catch (err) {
      console.log(err);
    }
  };

  // login user
  const login = async (formData) => {
    try {
      var users = [];
      // Parse the serialized data back into an aray of objects
      users = JSON.parse(localStorage.getItem("users")) || [];

      //check for user with email and password
      let userFound = users.filter(
        (user) =>
          user.email === formData.email && user.password === formData.password
      );

      if (userFound.length === 0) {
        alert("Invalid Credentials, Try Again !!");
      } else {
        delete userFound[0].password;
        localStorage.setItem("token", formData.email);

        dispatch({ type: LOGIN_SUCCESS, payload: userFound[0] });
      }
    } catch (err) {
      console.log(err);
    }
  };
  // load user
  const loadUser = async (token) => {
    try {
      var users = [];
      // Parse the serialized data back into an aray of objects
      users = JSON.parse(localStorage.getItem("users")) || [];

      //check for user
      let userFound = users.filter((user) => user.email === token);

      if (userFound.length === 0) {
        alert("Invalid Token !!");
      } else {
        delete userFound[0].password;
        localStorage.setItem("token", token);

        dispatch({ type: LOGIN_SUCCESS, payload: userFound[0] });
      }
    } catch (err) {
      console.log(err);
    }
  };

  // Remove item from later list
  const removeReadLaterItem = (email, slug_name) => {
    // console.log(slug_name);
    try {
      var users = [];
      // Parse the serialized data back into an aray of objects
      users = JSON.parse(localStorage.getItem("users")) || [];

      //check for user with email
      var readLaterList = [];
      users = users.map((user) => {
        if (user.email === email) {
          readLaterList = [...user.readLaterList];

          //remove item form reader list
          user.readLaterList.forEach((item, index) => {
            if (JSON.parse(item).slug_name === slug_name) {
              console.log("aaaaaaaaaaaa");
              readLaterList.splice(index, 1);
            }
          });

          //update readLaterList
          user.readLaterList = [...readLaterList];
          console.log(user);
          console.log(readLaterList);
        }

        return user;
      });

      // Re-serialize the array back into a string and store it in localStorage
      localStorage.setItem("users", JSON.stringify(users));

      dispatch({
        type: REMOVE_READ_LATER_SUCCESS,
        payload: readLaterList,
      });
    } catch (err) {
      console.log(err);
    }
  };

  // add item to later list
  const addReadLaterItem = async (email, article) => {
    try {
      var users = [];
      // Parse the serialized data back into an aray of objects
      users = JSON.parse(localStorage.getItem("users")) || [];

      //check for user with email
      var updatedUser = {};
      users = users.map((user) => {
        if (user.email === email) {
          user = { ...user, readLaterList: [...user.readLaterList, article] };
        }
        updatedUser = { ...user };
        return user;
      });

      // Re-serialize the array back into a string and store it in localStorage
      localStorage.setItem("users", JSON.stringify(users));

      dispatch({
        type: ADD_READ_LATER_SUCCESS,
        payload: updatedUser,
      });
    } catch (err) {
      console.log(err);
    }
  };

  // Edit user
  const updateUserProfile = async (formData) => {
    console.log(formData);

    try {
      var users = [];
      // Parse the serialized data back into an aray of objects
      users = JSON.parse(localStorage.getItem("users")) || [];
      var updatedUser;
      users = users.map((user) => {
        if (user.email === formData.email) {
          updatedUser = [user];
          updatedUser.password = formData.password;
          updatedUser.name = formData.name;

          return updatedUser;
        } else {
          return user;
        }
      });

      // Re-serialize the array back into a string and store it in localStorage
      localStorage.setItem("users", JSON.stringify(users));

      delete updatedUser.password;
      dispatch({ type: PROFILE_UPDATE_SUCCESS, payload: updatedUser });
    } catch (err) {
      console.log(err);
    }
  };

  // delete user
  const deleteAccount = async (email) => {
    console.log(email);

    try {
      var users = [];
      // Parse the serialized data back into an aray of objects
      users = JSON.parse(localStorage.getItem("users")) || [];

      users = users.filter((user) => user.email !== email);

      // Re-serialize the array back into a string and store it in localStorage
      localStorage.setItem("users", JSON.stringify(users));
      localStorage.setItem("token", null);
      dispatch({ type: ACCOUNT_DELETE_SUCCESS });
    } catch (err) {
      console.log(err);
    }
  };

  // logout user
  const logout = () => {
    localStorage.setItem("token", null);
    dispatch({ type: LOGOUT_SUCESS });
  };

  return (
    <UserContext.Provider
      value={{
        user: state.user,
        currentReadLaterPage: state.currentReadLaterPage,
        login,
        logout,
        loadUser,
        register,
        updateUserProfile,
        deleteAccount,
        removeReadLaterItem,
        addReadLaterItem,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserState;
