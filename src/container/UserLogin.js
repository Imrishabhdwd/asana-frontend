import React, {useState} from 'react'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import axios from 'axios'
import history from '../components/History'
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { bindActionCreators } from "redux";
import {login} from '../redux/action/user'
function UserLogin(props) {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    function handleSubmit() {
      let isUserLoggedIn  = props.login({email, password})
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
    loginResult: state.module.login,
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      login: values => login(values)
    },
    dispatch
  );

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(UserLogin)
);
