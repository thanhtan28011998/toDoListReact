import React from 'react';
import TodoList from './TodoList';

const TaskList = props => {
    //console.log(props)
    return (
        <div className="container">
            <table className="table table-bordered table-hover">
                <thead>
                    <tr>
                        <th>Name of task</th>
                        <th>Level of task</th>
                        <th>Deadline</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {  
                        props.list.map(function(item, index) {
                            return <TodoList key={index} index={index} item={item} onEdit={props.onEdit} onDelete={props.onDelete}/>
                        })
                    }
                </tbody>
            </table>
        </div>
    );
}

export default TaskList;
