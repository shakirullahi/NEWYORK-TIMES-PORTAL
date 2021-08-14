import React, { useEffect, useState, useContext, Fragment } from "react";
import UserContext from "../../context/user/userContext";
const ReadLater = (props) => {
  const userContext = useContext(UserContext);
  const {
    removeReadLaterItem,
    user,
    currentReadLaterPage,
    updateCurrentReadLaterPage,
  } = userContext;
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState([]);

  useEffect(() => {
    for (let i = 0; i < user.readLaterList.length; i++) {
      let p = Math.trunc(i / 10) + 1;
      if (!pages.includes(p)) {
        setPages([...pages, p]);
        // pages.push(p);
      }
    }
  }, []);
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
    updateCurrentReadLaterPage(e.target.getAttribute("page"));
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
          {pages.map((item) => (
            <li
              key={item}
              className={
                currentReadLaterPage == item ? "active" : "waves-effect"
              }
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

export default ReadLater;
