import React, { Component } from 'react';
import TaskList from './TaskList';
import {Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink, Container, Row, Col, Label, Input, FormGroup, Form, Button } from 'reactstrap';

class AddTask extends Component {
   state = {
            toDoList :[
                {name: 'Learn HTML', level: 1, date: '2020-01-01'},
                {name: 'Learn CSS', level: 2, date: '2020-01-01'},
                {name: 'Learn JAVASCRIPT', level: 3, date: '2020-01-01'},
                {name: 'Learn BOOTSTRAP', level: 4, date: '2020-01-01'},
                {name: 'Learn JQUERY', level: 5, date: '2020-01-01'},
            ],
            toDoItem : {name: '',level: '1',date: ''},
            isAdd: true,
            indexUpdate: 0
        };
    
    _handleAddTask = (event) => {
        event.preventDefault();
        //const {name, date} = this.state.toDoItem;
        const {toDoItem} = this.state;
        const {taskName, taskLevel, taskDate} = toDoItem;

        if(taskName === '' || taskLevel === '' || taskDate === ''){
            if(taskName === '')
                alert("Please enter the name");
            else
                alert("Deadline is invalid");
        }else{
            this.setState({
                toDoList: this.state.toDoList.concat(toDoItem),
            });
            localStorage.setItem('list', JSON.stringify(toDoItem));
        }
        
    }
    _isChangedName = (e) => {
        //console.log( {...this.state.toDoItem, name: e.target.value})
        this.setState({
            toDoItem: {...this.state.toDoItem, name: e.target.value}
        })
    }
    _isChangeLevel = (e) => {
        //console.log( {...this.state.toDoItem, level: e.target.value})
        this.setState({
            toDoItem: {...this.state.toDoItem, level: e.target.value}
        })
    }
    _isChangeDate = (e) => {
        //console.log( {...this.state.toDoItem, date: e.target.value})
        this.setState({
            toDoItem: {...this.state.toDoItem, date: e.target.value}
        })
    }
    _handleEdit = (index) => {
        this.setState({
            toDoItem: this.state.toDoList.find((item, i) => {
                return i === index;
            }),
            isAdd: false,
            indexUpdate: index
        })
    }
    _handleDelete = (index) => {
        this.setState({
            toDoList: this.state.toDoList.filter((item, i) => {
                return i !== index;
            })
        })
    }

    _handleCancel = () => {
        this.setState({
            isAdd: true,
            toDoItem: {name: '',level: '1',date: ''}
        })
    }

    _handleUpdate = () => {
        this.setState({
            toDoList: this.state.toDoList.map((item, index) =>
              index === this.state.indexUpdate ? this.state.toDoItem : item
            ),
            isAdd: true
          });
    }

    render() {

        const {toDoItem, isAdd, toDoList} = this.state;
        const {name, level, date} = toDoItem;
        return (
            <div>
                <Navbar color="info" light expand="lg">
                    <NavbarBrand href="/app">React</NavbarBrand>
                    <NavbarToggler />
                    <Collapse navbar>
                        <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink href="/app">Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/toDoListReact">Product</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/">Logout</NavLink>
                        </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
                <Container className="mt-5">
                    <h2 className="text-center font-weight-bold text-info mt-4">TO DO LIST</h2>
                    <Form>
                        <Row sm="9" md="7">
                            <Col sm="4">
                                <FormGroup>
                                    <Label for="name">Name</Label>
                                    <Input type="text" value={name} className="form-control" id="name" bsSize="lg" onChange={this._isChangedName} placeholder="Enter name of task" />
                                </FormGroup>     
                            </Col>
                            <Col sm="4">
                                <FormGroup>
                                    <Label for="level">Level</Label>
                                    <Input type="select" value={level} id="level" bsSize="lg" onChange={this._isChangeLevel}>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                    </Input>
                                </FormGroup>     
                            </Col>
                            <Col sm="4">
                                <FormGroup>
                                    <Label for="date">Deadline</Label>
                                    <Input type="date" value={date} id="date" bsSize="lg" onChange={this._isChangeDate} />
                                </FormGroup>     
                            </Col>
                        </Row>
                        {!isAdd ? (
                        <Row className="mb-5">
                            <Button type="submit" color="primary" className="mr-3" onClick={this._handleUpdate}><i className="far fa-save"></i> SAVE</Button>
                            <Button type="submit" color="secondary" onClick={this._handleCancel}><i className="far fa-times-circle"></i> CANCEL</Button>
                        </Row>   
                        ) : (
                            <Button type="submit" className="mb-5" color="info" onClick={this._handleAddTask}><i className="fas fa-plus-circle"></i> ADD</Button>
                        )}
                    </Form>    
                </Container>
                       
                <TaskList onEdit={this._handleEdit} onDelete={this._handleDelete} list={toDoList} />

            </div>
        );
    }
}

export default AddTask;