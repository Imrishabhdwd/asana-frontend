import React, {useState} from 'react'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import axios from 'axios'
import history from '../components/History'
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { bindActionCreators } from "redux";
import {signup} from '../redux/action/user'

function UserSignUp(props) {
    const [email, setEmail] = useState(0)
    const [password, setPassword] = useState(0)
    const [username, setUsername] = useState(0)
    function handleSubmit() {
      let isUserLoggedIn  = props.signup({username, email, password})
      console.log("isUserLoggedIn =============== ", props)
    }
    return (
      <div className="login">
        <div className="login-form">
      <Form action="javaScript:void(0)" method="POST" onSubmit={ () => handleSubmit() }>
      <FormGroup>
          <Label for="username">Username</Label>
          <Input type="text" name="username" id="username" placeholder="username" onChange={(e) => setUsername(e.target.value)}/>
        </FormGroup>
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
  return {
    signUpResult: state.module.signup,
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      signup: values => signup(values)
    },
    dispatch
  );

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(UserSignUp)
);

