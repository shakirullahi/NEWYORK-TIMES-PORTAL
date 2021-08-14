import React, { useEffect, useState, useContext } from "react";
import UserContext from "../../context/user/userContext";

const EditProfile = (props) => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const userContext = useContext(UserContext);
  const { updateUserProfile, user } = userContext;
  useEffect(() => {
    if (user) {
      setName(user.name);
      //   setPassword(user.password);
    }
  }, [user]);

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };
  const onUpdate = (e) => {
    e.preventDefault();
    if (name !== "" && password !== "") {
      updateUserProfile({ name, password, email: user.email });
      props.history.replace("/profile");
      alert("Profile Updated");
    } else {
      alert("please fill all fields !");
    }
  };

  return (
    <div className='row'>
      <h2>Update Profile</h2>
      <form className='col s12' onSubmit={onUpdate}>
        <div className='row'>
          <div className='input-field col s6'>
            <input
              id='name'
              type='text'
              className='validate'
              onChange={onChangeName}
              value={name}
            />
          </div>
        </div>

        <div className='row'>
          <div className='input-field col s6'>
            <input
              id='password'
              type='password'
              className='validate'
              onChange={onChangePassword}
              value={password}
            />
            <label htmlFor='password'>Password</label>
          </div>
        </div>
        <div className='row'>
          <button
            onClick={onUpdate}
            className='btn waves-effect waves-light'
            type='submit'
            name='action'
          >
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditProfile;
