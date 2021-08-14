import React, { useEffect, useState, useContext, Fragment } from "react";
import ArticleContext from "../../context/article/articleContext";
import Sections from "../section/Sections";
import ArticleItem from "./ArticleItem";

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

  useEffect(() => {
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
          <h2 className='header'>Article List</h2>

          {articles !== null &&
            articles.map((article) => (
              <ArticleItem article={article} key={article.slug_name} />
            ))}
        </div>
        <ul className='pagination'>
          <li className={currentArticlePage == 1 ? "active" : "waves-effect"}>
            <a href='#!' page={1} onClick={onPageChange}>
              1
            </a>
          </li>
          <li className={currentArticlePage == 2 ? "active" : "waves-effect"}>
            <a href='#!' page={2} onClick={onPageChange}>
              2
            </a>
          </li>
          <li className={currentArticlePage == 3 ? "active" : "waves-effect"}>
            <a href='#!' page={3} onClick={onPageChange}>
              3
            </a>
          </li>
          <li className={currentArticlePage == 4 ? "active" : "waves-effect"}>
            <a href='#!' page={4} onClick={onPageChange}>
              4
            </a>
          </li>
          <li className={currentArticlePage == 5 ? "active" : "waves-effect"}>
            <a href='#!' page={5} onClick={onPageChange}>
              5
            </a>
          </li>
        </ul>
      </div>
      <div className='row'></div>
    </Fragment>
  );
};

export default Home;
