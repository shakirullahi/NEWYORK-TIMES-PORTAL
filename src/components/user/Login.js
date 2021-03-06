import React, { useEffect, useState, useContext, Fragment } from "react";
import UserContext from "../../context/user/userContext";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const userContext = useContext(UserContext);
  const { login, loadUser, user } = userContext;

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

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };
  const onLogin = (e) => {
    e.preventDefault();
    var format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    if (password === "" || email === "") {
      alert("please fill all fields");
    } else if (!validateEmail(email)) {
      alert("invalid Email");
    } else {
      login({ email, password });
    }
  };

  const goToRegister = (e) => {
    e.preventDefault();
    props.history.push("/register");
  };
  return (
    <Fragment>
      <div className='row'>
        <h4>Login</h4>
        <form className='col s12' onSubmit={onLogin}>
          <div className='row'>
            <div className='input-field col s6'>
              <input
                id='email'
                type='email'
                className='validate'
                value={email}
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
                value={password}
                onChange={onChangePassword}
              />
              <label htmlFor='password'>Password</label>
            </div>
          </div>
          <div className='row'>
            <button
              onClick={onLogin}
              className='btn waves-effect waves-light'
              type='submit'
              name='action'
            >
              Submit
            </button>
          </div>
        </form>
      </div>
      {/* <div className='row'>
        <a
          href='#!'
          onClick={goToRegister}
          className='waves-effect waves-light red  btn-small'
        >
          Register
        </a>
      </div> */}
    </Fragment>
  );
};

function validateEmail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}
export default Login;
