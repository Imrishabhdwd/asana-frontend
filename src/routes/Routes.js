import React from "react";
import { Route, Link, Router } from "react-router-dom";
import UserLogin from "../container/UserLogin";
import UserSignup from "../container/UserSignUp";
import AdminLogin from "../container/AdminLogin";
import AdminSignup from "../container/AdminSignup";
import AddTask from "../container/AddTask";
import Home from '../container/Home'
import history from '../components/History'
function Routes(props) {
  return (
    <Router history={history}>
        <Route exact={true} path="/" component={Home} />
        <Route path="/user-login" component={UserLogin} />
        <Route path="/user-signup" component={UserSignup} />
        <Route path="/admin-login" component={AdminLogin} />
        <Route path="/admin-signup" component={AdminSignup} />
        <Route path="/add-task" component={AddTask} />
    </Router>
  );
}
export default Routes;
