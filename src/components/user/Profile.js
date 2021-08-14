import React, { useContext } from "react";
import userContext from "../../context/user/userContext";

import UserContext from "../../context/user/userContext";

const Profile = (props) => {
  const userContext = useContext(UserContext);
  const { user, deleteAccount } = userContext;

  const deleteAcc = (e) => {
    e.preventDefault();
    // window.confirm("Are you sure ?");
    if (window.confirm("Are you sure ?")) {
      deleteAccount(user.email);
      props.history.replace("login");
    }
  };
  const editAcc = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <div className='row'>
        <div className='col s6'>
          <div className='card blue-grey darken-1'>
            <div className='card-content white-text'>
              <span className='card-title'>User Profile</span>
              <ul className='collection'>
                <li className='collection-item grey avatar'>
                  <i class='material-icons circle'>person</i>
                  <span className='title'>
                    Name : {user.name.toUpperCase()}
                  </span>
                  <br />
                  <span className='title'>Email : {user.email}</span>
                  <br />
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className='col s6'>
          <div className='card white darken-1'>
            <div className='card-content black-text'>
              <a
                href='#!'
                onClick={editAcc}
                className='waves-effect waves-light btn'
              >
                <i className='material-icons left'>edit</i>Edit Profile
              </a>
              <br />
              <br />
              <br />
              <br />
              <a
                href='#!'
                onClick={deleteAcc}
                className='waves-effect waves-light btn'
              >
                <i className='material-icons left'>delete</i>Delete Account
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
