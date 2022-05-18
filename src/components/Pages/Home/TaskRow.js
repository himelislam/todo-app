import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';

const TaskRow = ({ task, index, isReload, setIsReload }) => {
    const [user] = useAuthState(auth);
    const email = user.email

    const handleAddTask = (id) => {
        fetch(`https://pure-chamber-30882.herokuapp.com/mytask/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ email })
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast('Your Task Added Successfuly')
                }
            })
    }


    const handleDeleteTask = id => {
        const proceed = window.confirm('Are You Sure to Delete This Task?');
        if (proceed) {
            fetch(`https://pure-chamber-30882.herokuapp.com/mytask/${id}`, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        toast.error('Your Task is Deleted')
                        setIsReload(!isReload)
                    }
                })
        }
    }
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{task.task}</td>
            <td>{task.description}</td>
            <td><button onClick={() => handleAddTask(task._id)} className='btn btn-xs'>Add</button></td>
            <td><button onClick={() => handleDeleteTask(task._id)} className='btn btn-xs btn-error'>Delete</button></td>
        </tr>
    );
};

export default TaskRow;