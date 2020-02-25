import React from 'react';

const TodoList = ({item, onEdit, onDelete, index}) => {
    const {name, level, date} = item;
    console.log(index)
        return (
            <tr>
                <td>{name}</td>
                <td>{level}</td>
                <td>{date}</td>
                <td>
                    <button onClick={() => onEdit(index)} type="button" className="btn btn-outline-warning mr-4"><i className="far fa-edit"></i> Edit</button> 
                   <button onClick={() => onDelete(index)} type="button" className="btn btn-outline-danger"><i className="far fa-trash-alt"></i> Delete</button>
                </td>
            </tr>
        );
    }

export default TodoList;