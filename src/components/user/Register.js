import React, { useEffect, useState, useContext } from "react";
import UserContext from "../../context/user/userContext";

const Register = (props) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const userContext = useContext(UserContext);
  const { register, loadUser, user } = userContext;
  useEffect(() => {
    if (user) {
      //goto home
      props.history.replace("/home");
    } else if (localStorage.token !== "null") {
      loadUser(localStorage.token);
    }
  }, [user]);

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };
  const onRegister = (e) => {
    e.preventDefault();
    console.log("register");
    register({ name, email, password });
  };

  return (
    <div className='row'>
      <h2>Register</h2>
      <form className='col s12' onSubmit={onRegister}>
        <div className='row'>
          <div className='input-field col s6'>
            <input
              id='name'
              type='text'
              className='validate'
              onChange={onChangeName}
            />
            <label htmlFor='name'>Name</label>
          </div>
        </div>
        <div className='row'>
          <div className='input-field col s6'>
            <input
              id='email'
              type='email'
              className='validate'
              onChange={onChangeEmail}
            />
            <label htmlFor='email'>Email</label>
          </div>
        </div>
        <div className='row'>
          <div className='input-field col s6'>
            <input
              id='password'
              type='password'
              className='validate'
              onChange={onChangePassword}
            />
            <label htmlFor='password'>Password</label>
          </div>
        </div>
        <div className='row'>
          <button
            onClick={onRegister}
            className='btn waves-effect waves-light'
            type='submit'
            name='action'
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
