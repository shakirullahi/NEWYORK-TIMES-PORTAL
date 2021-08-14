import React, { useEffect, useState, useContext } from "react";
import ArticleContext from "../../context/article/articleContext";

const Home = (props) => {
  const [pageNumber, setPageNumber] = useState(1);
  const [sectionName, setSectionName] = useState("");
  const articleContext = useContext(ArticleContext);
  const {
    articles,
    sections,
    section,
    currentArticlePage,
    getArticles,
    getSections,
  } = articleContext;

  useEffect(() => {
    getArticles(null, 1);
    getSections();
  }, []);

  const onPageChange = (e) => {
    getArticles(sectionName, pageNumber);
  };

  const onSectionChange = (e) => {
    setSectionName(e.target.value);
    getArticles(sectionName, 1);
  };

  return (
    <div className='row'>
      <h2>Home</h2>
    </div>
  );
};

export default Home;
