import React from 'react';
import {Button} from 'reactstrap';

const TodoList = ({index, item, onEdit, onDelete}) => {
    const {name, level, date} = item;
    //console.log(index)
        return (
            <tr>
                <td>{name}</td>
                <td>{level}</td>
                <td>{date}</td>
                <td>
                    <Button outline color="warning" onClick={() => onEdit(index)} className="mr-3"><i className="far fa-edit"></i> Edit</Button>
                    <Button outline color="danger" onClick={() => onDelete(index)}><i className="far fa-trash-alt"></i> Delete</Button> 
                </td>
            </tr>
        );
    }

export default TodoList;