import React, { useEffect, useState, useContext, Fragment } from "react";
import ArticleContext from "../../context/article/articleContext";
import Sections from "../section/Sections";
import ArticleItem from "./ArticleItem";

const pages = [];
const Home = (props) => {
  const articleContext = useContext(ArticleContext);
  const {
    articles,
    section,
    sections,
    currentArticlePage,
    getArticles,
    getSections,
  } = articleContext;

  var count = 0;
  useEffect(() => {
    if (pages.length === 0) {
      for (let i = 1; i < 500; i += 20) {
        count++;
        pages.push(count);
      }
    }
    if (articles === null) {
      getArticles(null, 1);
      console.log("==================");
    }
    if (sections === null) {
      console.log("+++++++++++++++++++====");
      getSections();
    }
  }, [articles, sections]);

  const onPageChange = (e) => {
    getArticles(section, e.target.getAttribute("page"));
  };

  return (
    <Fragment>
      <div className='row'>
        <div className='col s3'>{sections !== null && <Sections />}</div>

        <div className='col s9'>
          <h4 className='header'>Article List</h4>

          {articles !== null &&
            articles.map((article, index) => (
              <ArticleItem article={article} key={index} />
            ))}
        </div>
        <ul className='pagination'>
          {pages.map((item) => (
            <li
              key={item}
              className={currentArticlePage == item ? "active" : "waves-effect"}
            >
              <a href='#!' page={item} onClick={onPageChange}>
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className='row'></div>
    </Fragment>
  );
};

export default Home;
