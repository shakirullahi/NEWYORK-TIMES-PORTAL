import React, { useReducer } from "react";
import axios from "axios";
import ArticleContext from "./articleContext";
import articleReducer from "./articleReducer";
import {
  GET_ARTICLES_SUCCESS,
  GET_SECTIONS_SUCCESS,
  // FILTER_ARTICLES_SUCCESS,
} from "../types";

const ArticleState = (props) => {
  const initialState = {
    articles: null,
    sections: null,
    section: null,
    currentArticlePage: 1,
  };

  //get articles
  const getArticles = async (section, currentArticlePage) => {
    if (!section) {
      section = "all";
    }
    let offset = (currentArticlePage - 1) * 20 + 1;
    try {
      const res = await axios.get(
        `https://api.nytimes.com/svc/news/v3/content/all/${section}.json?limit=20?offset=${offset}?api-key=uR1j3A82i48Cvvn6A4pQRWBCIhUCIvG7`
      );
      console.log(res.data.results);
      dispatch({
        type: GET_ARTICLES_SUCCESS,
        payload: {
          articles: res.data.results,
          section,
          currentArticlePage,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  //get sections
  const getSections = async () => {
    try {
      const res = await axios.get(
        `https://api.nytimes.com/svc/news/v3/content/section-list.json?api-key=uR1j3A82i48Cvvn6A4pQRWBCIhUCIvG7`
      );
      console.log(res.data.results);
      dispatch({
        type: GET_SECTIONS_SUCCESS,
        payload: res.data.results,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const [state, dispatch] = useReducer(articleReducer, initialState);

  return (
    <ArticleContext.Provider
      value={{
        articles: state.articles,
        sections: state.sections,
        section: state.section,
        currentArticlePage: state.currentArticlePage,
        getArticles,
        getSections,
      }}
    >
      {props.children}
    </ArticleContext.Provider>
  );
};

export default ArticleState;
