import React, { useEffect, useState, useContext, Fragment } from "react";
import UserContext from "../../context/user/userContext";

const ReadLater = (props) => {
  const userContext = useContext(UserContext);
  const { removeReadLaterItem, user, currentReadLaterPage } = userContext;

  const [page, setPage] = useState(1);
  const onRemoveitem = (e) => {
    e.preventDefault();
    console.log(e.target.parentElement.getAttribute("slug_name"));
    removeReadLaterItem(
      user.email,
      e.target.parentElement.getAttribute("slug_name")
    );
  };

  const onPageChange = (e) => {
    setPage(e.target.getAttribute("page"));
  };

  return (
    <Fragment>
      <div className='row'>
        <div className='col s9'>
          <h2 className='header'>Read Later List</h2>

          <ul className='collection'>
            {user.readLaterList.length !== 0 &&
              user.readLaterList.map(
                (article, index) =>
                  index < page * 10 &&
                  index >= page * 10 - 10 && (
                    <li className='collection-item' key={index}>
                      <div>
                        {JSON.parse(article).title}
                        <a
                          href='#!'
                          onClick={onRemoveitem}
                          className='secondary-content'
                          slug_name={JSON.parse(article).slug_name}
                        >
                          <i className='material-icons'>delete</i>
                        </a>
                      </div>
                    </li>
                  )
              )}
          </ul>
        </div>
        <ul className='pagination'>
          <li className={currentReadLaterPage == 1 ? "active" : "waves-effect"}>
            <a href='#!' page={1} onClick={onPageChange}>
              1
            </a>
          </li>
          <li className={currentReadLaterPage == 2 ? "active" : "waves-effect"}>
            <a href='#!' page={2} onClick={onPageChange}>
              2
            </a>
          </li>
          <li className={currentReadLaterPage == 3 ? "active" : "waves-effect"}>
            <a href='#!' page={3} onClick={onPageChange}>
              3
            </a>
          </li>
          <li className={currentReadLaterPage == 4 ? "active" : "waves-effect"}>
            <a href='#!' page={4} onClick={onPageChange}>
              4
            </a>
          </li>
          <li className={currentReadLaterPage == 5 ? "active" : "waves-effect"}>
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

export default ReadLater;
