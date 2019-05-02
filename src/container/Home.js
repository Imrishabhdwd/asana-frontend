import React, { Component } from 'react'
import { Card, Button, CardImg, CardTitle, CardText, Form, FormGroup, Label,
   CardGroup, Input, FormText, CardSubtitle, CardBody } from 'reactstrap';
import CONSTANT from '../constants/constants'
import Cards from '../components/Cards'
import axios from 'axios'
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { bindActionCreators } from "redux";
import {getAllTasks, getTask, addTask, updateTask, getUsers, addMessage} from '../redux/action/user'
const constant = new CONSTANT()

class Home extends Component {
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
  componentDidMount() {
    if (localStorage.getItem("adminname")){
      this.props.getAllTasks({
        createdBy: localStorage.getItem('adminname')
      })
    }
    else {
      this.props.getAllTasks({
        assignedTo: localStorage.getItem('username')
      })
    }
    
    console.log("tasks ================ ",this.props)
    let users = this.props.getUsers()
  }
  handleClick(e) {
    this.setState({openTask: true, openMessage: e})
    let newDueDate = this.props.getAllTaskResult.data.result[e].dueDate.split("T")[0].split("-")
    newDueDate = newDueDate[2]+"/"+newDueDate[1]+"/"+newDueDate[0]
    console.log("handleClick ============= ",newDueDate)
    // console.log(this.props.getAllTaskResult.data.result[0],"this.props.getAllTaskResult.data.result[this.state.openMessage].title")
    this.setTitle(this.props.getAllTaskResult.data.result[e].title)
    this.setSubtitle(this.props.getAllTaskResult.data.result[e].subtitle)
    this.setassignedTo(this.props.getAllTaskResult.data.result[e].assignedTo)
    this.setMessage(this.props.getAllTaskResult.data.result[e].message)
    this.setStatus(this.props.getAllTaskResult.data.result[e].status)
    this.setDescription(this.props.getAllTaskResult.data.result[e].description)
    this.setDueDate(newDueDate)
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
  setDueDate(value){
    this.setState({dueDate: value})
  }

  setMessage (value) {
    this.setState({message: value})
  }

  setDescription (value) {
    this.setState({description: value})
  }

  handleSubmit() {
    let hasTask  = this.props.addTask(
      {
        title: this.state.title,
        subTitle: this.state.subTitle,
        description: this.state.description,
        message: this.state.message,
        assignedTo: this.state.assignedTo,
        createdBy: localStorage.getItem('username'),
        status: this.state.status,
        dueDate: this.state.dueDate
      })
  }

  handleUpdateSubmit() {
    // console.log(this.props.getAllTaskResult.data.result[this.state.openMessage]._id," props ============= in update")
    let hasTaskUpdated = this.props.updateTask({
        title: this.state.title,
        subTitle: this.state.subTitle,
        description: this.state.description,
        message: this.state.message,
        assignedTo: this.state.assignedTo,
        status: this.state.status,
        id: this.props.getAllTaskResult.data.result[this.state.openMessage]._id,
        dueDate: this.state.dueDate
        // old_title: this.props.getAllTaskResult.data.result[this.state.openMessage].title,
        // old_subtitle: this.props.getAllTaskResult.data.result[this.state.openMessage].subtitle,
        // old_message: this.props.getAllTaskResult.data.result[this.state.openMessage].message,
        // old_assignedTo: this.props.getAllTaskResult.data.result[this.state.openMessage].assignedTo        
    })
  }

  render() {
    return (
        <div>
          <h3 className=""> DashBoard  </h3>
            <div className="dashboard">
            {console.log("props ============= ,",this.props)}
            {this.props.getAllTaskResult.data.status === "success" ? this.state.openTask ? <div className="edit_task">
              
                <div className="task-form">
                <Form action="javaScript:void(0)" method="POST" onSubmit={ (e) => this.handleUpdateSubmit(e) }>
                  <FormGroup>
                    <Label for="title">Title</Label>
                    <Input type="text" name="title" id="title" placeholder="title" onChange={(e) => this.setTitle(e.target.value)} value={this.state.title} />
                  </FormGroup>
                  <FormGroup>
                    <Label for="subtitle">Subtitle</Label>
                    <Input type="text" name="subtitle" id="subtitle" placeholder="subtitle" onChange={(e) => this.setSubtitle(e.target.value)} value={this.state.subTitle} />
                  </FormGroup>
                  {/* <FormGroup>
                    <Label for="assignedTo">assignedTo</Label>
                        <Input type="select" name="assignedTo" id="assignedTo" onChange={(e) => this.setassignedTo(e.target.value)}>
                        <option disabled selected>Select</option>
                    {
                    // <Input type="text" name="assignedTo" id="assignedTo" placeholder="assignedTo" onChange={(e) => this.setassignedTo(e.target.value)}/>
                    this.props.getUsersResult && this.props.getUsersResult.status === "success" &&
                    this.props.getUsersResult.data.result.map((item, i) => {
                        
                        return <option>{item.username}</option>
                                
                            
                    })
                    }
                    </Input>
                  </FormGroup> */}
                  <FormGroup>
                    <Label for="status">Status</Label>
                        <Input type="select" name="status" id="status" onChange={(e) => this.setStatus(e.target.value)} value={this.state.status}>
                        <option disabled>Select</option>
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
                    <Label for="exampleDate">Date</Label>
                    <Input
                      type="date"
                      name="date"
                      id="exampleDate"
                      placeholder="date placeholder" onChange ={(e) => this.setDueDate(e.target.value)} value={this.state.dueDate}
                    />
                  </FormGroup>
                  <Button block>UpdateTask</Button>
                </Form>
                </div>
            </div> :<>
            <CardGroup>
          {this.props.getAllTaskResult.data.result.map((item, index) => {
            return <Cards item={item} index={index} {...this.state} handleClick={this.handleClick.bind(this)} />
          })}
        </CardGroup></> : <div className="edit_task">
                
                <h5>No Task For Today</h5>
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
                        return <option>{item.username}</option>                            
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
                    <Label for="message">Message</Label>
                    <Input type="textarea" name="message" id="message" placeholder="message" onChange={(e) => this.setMessage(e.target.value)} />
                  </FormGroup> */}
                  <Button block>AddTask</Button>
                </Form>
                </div>
            </div>}
        </div>
        </div>
      );  
  }
}



const mapStateToProps = state => {
  console.log("state ============= ", state)
  return {
    addTaskResult: state.module.addTask,
    getAllTaskResult: state.module.getAllTask,
    getTaskResult: state.module.getTask,
    getUsersResult: state.module.getUsers,
    addMessageResult: state.module.addMessage
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      addTask: values => addTask(values),
      getAllTasks: values => getAllTasks(values),
      getTask: values => getTask(values),
      updateTask: values => updateTask(values),
      getUsers: values => getUsers(values),
      addMessage: values => addMessage(values)
    },
    dispatch
  );

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Home)
);
