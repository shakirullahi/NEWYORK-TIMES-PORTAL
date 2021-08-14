import React, { useContext } from "react";

import ArticleContext from "../../context/article/articleContext";
import SectionItem from "./SectionItem";

const Sections = () => {
  const articleContext = useContext(ArticleContext);
  const { sections } = articleContext;
  return (
    <div className='collection'>
      {sections.map((section) => (
        <SectionItem section={section} key={section.section} />
      ))}
    </div>
  );
};

export default Sections;
