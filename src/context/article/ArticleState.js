import React, { useReducer } from "react";
import axios from "axios";
import ArticleContext from "./articleContext";
import articleReducer from "./articleReducer";

const ArticleState = (props) => {
  const initialState = {};

  const [state, dispatch] = useReducer(articleReducer, initialState);

  return (
    <ArticleContext.Provider value={{}}>
      {props.children}
    </ArticleContext.Provider>
  );
};

export default ArticleState;
