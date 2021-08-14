import { GET_ARTICLES_SUCCESS, GET_SECTIONS_SUCCESS } from "../types";

const articleReducer = (state, action) => {
  switch (action.type) {
    case GET_ARTICLES_SUCCESS:
      return {
        ...state,
        articles: action.payload.articles,
        section: action.payload.section,
        currentArticlePage: action.payload.currentArticlePage,
      };
    case GET_SECTIONS_SUCCESS:
      return {
        ...state,
        sections: action.payload,
      };
    default:
      return state;
  }
};

export default articleReducer;
