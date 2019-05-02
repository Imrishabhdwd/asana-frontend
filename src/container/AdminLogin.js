import React, {useState} from 'react'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import axios from 'axios'
import history from '../components/History'
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { bindActionCreators } from "redux";
import {adminLogin} from '../redux/action/user'
function AdminLogin(props) {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    function handleSubmit() {
      let isUserLoggedIn  = props.adminLogin({email, password})
      console.log("isUserLoggedIn =============== ", props)
    }
    return (
      <div className="login">
        <div className="login-form">
      <Form action="javaScript:void(0)" method="POST" onSubmit={ () => handleSubmit() }>
        <FormGroup>
          <Label for="email">Email</Label>
          <Input type="email" name="email" id="email" placeholder="email" onChange={(e) => setEmail(e.target.value)}/>
        </FormGroup>
        <FormGroup>
          <Label for="password">Password</Label>
          <Input type="password" name="password" id="password" placeholder="password" onChange={(e) => setPassword(e.target.value)} />
        </FormGroup>
        <Button block>Submit</Button>
      </Form>
      </div>
      </div>
    );
}



const mapStateToProps = state => {
  console.log("state ============= ", state)
  return {
    loginResult: state.module.AdminLogin,
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      adminLogin: values => adminLogin(values)
    },
    dispatch
  );

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(AdminLogin)
);
