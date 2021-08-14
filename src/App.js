import React, { useEffect, Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";

//import states
import UserState from "./context/user/UserState";
import ArticleState from "./context/article/ArticleState";

//import components
import Navbar from "./components/layout/Navbar";
import Login from "./components/user/Login";
import Register from "./components/user/Register";
import Profile from "./components/user/Profile";
import ReadLater from "./components/user/ReadLater";
import Home from "./components/pages/Home";
import PrivateRoute from "./components/routing/PrivateRoute";

const App = () => {
  useEffect(() => {
    //Initializes materialize js
    M.AutoInit();
  }, []);

  return (
    <UserState>
      <ArticleState>
        <Router>
          <Fragment>
            <Navbar />
            <div className='container'>
              <Switch>
                <Route exact path='/' component={Login} />
                <PrivateRoute exact path='/home' component={Home} />
                <PrivateRoute exact path='/profile' component={Profile} />
                <PrivateRoute exact path='/read-later' component={ReadLater} />
                <Route exact path='/register' component={Register} />
                <Route exact path='/login' component={Login} />
              </Switch>
            </div>
          </Fragment>
        </Router>
      </ArticleState>
    </UserState>
  );
};

export default App;
