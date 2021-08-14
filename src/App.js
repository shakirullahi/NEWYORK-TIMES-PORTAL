import React, { useEffect, Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";

//import components

const App = () => {
  useEffect(() => {
    //Initializes materialize js
    M.AutoInit();
  }, []);

  return <div className='App'>NYT Portal</div>;
};

export default App;
