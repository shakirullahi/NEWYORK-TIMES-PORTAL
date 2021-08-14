import React, { useContext } from "react";
import UserContext from "../../context/user/userContext";

const ArticleItem = ({ article }) => {
  const userContext = useContext(UserContext);
  const { addReadLaterItem, user } = userContext;

  const readLater = (e) => {
    // console.log(e.target.parentElement.getAttribute("article"));
    addReadLaterItem(
      user.email,
      e.target.parentElement.getAttribute("article")
    );
    alert("Added to read later list !");
  };
  return (
    <div className='row'>
      <div className='col s12'>
        <div className='card'>
          <div className='card-image'>
            {article.multimedia && (
              <img style={{ width: "100px" }} src={article.multimedia[0].url} />
            )}
            <a
              href='#!'
              onClick={readLater}
              article={JSON.stringify(article)}
              className='btn-floating btn-large waves-effect waves-light red right'
            >
              <i className='material-icons'>add</i>
            </a>
          </div>
          <div style={{ margin: "10px" }} className=''>
            <h5>
              <a href={article.url} target='_blank'>
                {article.title}
              </a>
            </h5>
          </div>
          <div className='card-content'>
            <p>{article.abstract}</p>
          </div>
          <div className='card-action'>
            <a href={article.url} target='_blank'>
              Read More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleItem;
