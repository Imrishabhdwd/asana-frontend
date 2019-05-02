import React, { Component } from 'react'
import { Card, Button, CardImg, CardTitle, CardText, Form, FormGroup, Label,
   CardGroup, Input, FormText, CardSubtitle, CardBody } from 'reactstrap';
import axios from 'axios'
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { bindActionCreators } from "redux";
import CONSTANT from '../constants/constants'
import {getAllTasks, getTask, addTask, updateTask, getUsers} from '../redux/action/user'

const constant = new CONSTANT()
class AddTask extends Component {
  constructor(props){
    super(props)
    this.state = {
      openTask: false,
      openMessage: undefined,
      title: "",
      subTitle: "",
      assignedTo: "",
      message: "",
      status: "",
      dueDate: "",
      description: ""
    }
  }

  setTitle (value) {
    this.setState({title: value})
  }
  setSubtitle (value) {
    this.setState({subTitle: value})
  }

  setassignedTo (value) {
    this.setState({assignedTo: value})
  }

  setStatus (value) {
    this.setState({status: value})
  }

  setMessage (value) {
    this.setState({message: value})
  }
  componentDidMount() {
    let users = this.props.getUsers()
  }

  setDescription (value) {
    this.setState({description: value})
  }
  setDueDate(value){
    this.setState({dueDate: value})
  }

  handleSubmit() {
    let hasTask  = this.props.addTask(
      {
        title: this.state.title,
        subTitle: this.state.subTitle,
        description: this.state.description,
        assignedTo: this.state.assignedTo,
        createdBy: localStorage.getItem('username'),
        status: this.state.status,
        dueDate: this.state.dueDate
      })
  }

  render() {
      console.log("add task props ============== ", this.props)
    return (
        <div className="task-form">
                <Form action="javaScript:void(0)" method="POST" onSubmit={ () => this.handleSubmit() }>
                  <FormGroup>
                    <Label for="title">Title</Label>
                    <Input type="text" name="title" id="title" placeholder="title" onChange={(e) => this.setTitle(e.target.value)}/>
                  </FormGroup>
                  <FormGroup>
                    <Label for="subtitle">Subtitle</Label>
                    <Input type="text" name="subtitle" id="subtitle" placeholder="subtitle" onChange={(e) => this.setSubtitle(e.target.value)}/>
                  </FormGroup>
                  <FormGroup>
                    <Label for="assignedTo">assignedTo</Label>
                        <Input type="select" name="assignedTo" id="assignedTo" onChange={(e) => this.setassignedTo(e.target.value)}>
                        <option disabled selected>Select</option>
                    {
                    // <Input type="text" name="assignedTo" id="assignedTo" placeholder="assignedTo" onChange={(e) => this.setassignedTo(e.target.value)}/>
                    this.props.getUsersResult && this.props.getUsersResult.status === "success" &&
                    this.props.getUsersResult.data.result.map((item, i) => {
                        return <option key={i}>{item.username}</option>
                    })
                    }
                    </Input>
                  </FormGroup>
                  <FormGroup>
                    <Label for="status">Status</Label>
                        <Input type="select" name="status" id="status" onChange={(e) => this.setStatus(e.target.value)}>
                        <option disabled selected>Select</option>
                    {
                    constant.status.map((item, i) => <option key={i}>{item}</option>)
                    }
                    </Input>
                  </FormGroup>
                  <FormGroup>
                    <Label for="description" >Description</Label>
                    <Input type="textarea" name="description" id="description" placeholder="description" onChange={(e) => this.setDescription(e.target.value)} value={this.state.description} />
                  </FormGroup>
                  <FormGroup>
                    <Label for="dueDate">Due Date</Label>
                    <Input
                      type="date"
                      name="dueDate"
                      id="dueDate"
                      placeholder="date placeholder" onChange ={(e) => this.setDueDate(e.target.value)}
                    />
                  </FormGroup>
                  {/* <FormGroup>
                    <Label for="message" >Message</Label>
                    <Input type="textarea" name="message" id="message" placeholder="message" onChange={(e) => this.setMessage(e.target.value)} />
                  </FormGroup> */}
                  <Button block>AddTask</Button>
                </Form>
 </div>
      );  
  }
}



const mapStateToProps = state => {
  console.log("state ============= ", state)
  return {
    addTaskResult: state.module.addTask,
    getUsersResult: state.module.getUsers
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      addTask: values => addTask(values),
      getUsers: values => getUsers(values)
    },
    dispatch
  );

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(AddTask)
);
