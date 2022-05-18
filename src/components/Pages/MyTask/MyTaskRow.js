import React, { useState } from 'react';
import { toast } from 'react-toastify';

const MyTaskRow = ({ task, index, setIsReload, isReload }) => {
    const [completed, setCompleted] = useState(0);
    const handleDeleteTask = id => {
        const proceed = window.confirm('Are You Sure to Delete This Task?');
        if (proceed) {
            fetch(`https://pure-chamber-30882.herokuapp.com/mytask/${id}`, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        toast.error('Your Task is Deleted')
                        setIsReload(!isReload)
                    }
                })
        }
    }


    const notification = () => {
        toast('Your Task is Completed')
        setCompleted(2)
    }

    if (completed === 1) {
        notification();
    }
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{task.task}</td>
            <td className={completed === 2  ? 'line-through' : 'text-dark'}>{task.description}</td>
            <td><button onClick={() => setCompleted(1)} className='btn btn-xs'>Complete</button></td>
            <td><button onClick={() => handleDeleteTask(task._id)} className='btn btn-xs btn-error'>Delete</button></td>
        </tr>
    );
};

export default MyTaskRow;