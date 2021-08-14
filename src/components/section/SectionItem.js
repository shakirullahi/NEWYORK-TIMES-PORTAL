import React, { useContext } from "react";

import ArticleContext from "../../context/article/articleContext";

const SectionItem = ({ section }) => {
  const articleContext = useContext(ArticleContext);
  const { getArticles } = articleContext;

  const onChangeSection = (e) => {
    console.log(e.target.getAttribute("section"));
    getArticles(e.target.getAttribute("section"), 1);
  };
  return (
    <a
      href='#!'
      onClick={onChangeSection}
      section={section.section}
      className='collection-item'
    >
      {section.display_name}
    </a>
  );
};

export default SectionItem;
