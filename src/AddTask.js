import React, { Component } from 'react';
import TaskList from './TaskList';

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
    
    _handleAddTask = () => {
        const {name, date} = this.state.toDoItem;
        if(name === '' || date === ''){
            if(name === '')
                alert("Please enter the name");
            else
                alert("Deadline is invalid");
        }else{
            this.setState({
                toDoList: this.state.toDoList.concat(this.state.toDoItem)
            });
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
    _handleEdit = (index) =>{
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
                    <div className="container mb-4">
                        <h2 className="text-center font-weight-bold text-info mt-4">TO DO LIST</h2>
                        <div className="row">
                            <div className="col-4">
                                <div className="form-group">
                                    <label>Name</label>
                                    <input type="text" value={name} className="form-control" placeholder="Enter name of task" onChange={this._isChangedName} />
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="form-group">
                                    <label>Level</label>
                                    <select className="form-control" value={level} onChange={this._isChangeLevel}>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="form-group">
                                    <label>Deadline</label>
                                    <input type="date" className="form-control" value={date} onChange={this._isChangeDate} />
                                </div>
                            </div>
                        </div>  
                        {!isAdd ? (
                            <div>
                                <button type="submit" className="btn btn-info" onClick={this._handleUpdate}><i className="far fa-save"></i> Save</button>
                                <button type="submit" className="btn btn-primary" onClick={this._handleCancel}><i className="fas fa-ban"></i> Cancel</button>
                            </div>
                        ) : (
                         <button type="submit" className="btn btn-info" onClick={this._handleAddTask}><i className="fas fa-plus-circle"></i> Add</button>

                        )}
                    </div>
                    <TaskList onEdit={this._handleEdit} onDelete={this._handleDelete} list={toDoList} />

                </div>
            );
        }
}

export default AddTask;