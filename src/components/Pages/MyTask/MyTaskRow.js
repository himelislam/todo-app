import React, { useState } from 'react';
import { toast } from 'react-toastify';

const MyTaskRow = ({task, index, setIsReload, isReload}) => {
    const handleDeleteTask = id =>{
        fetch(`http://localhost:5000/mytask/${id}`,{
            method : 'DELETE',
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.deletedCount>0){
                toast.error('Your Task Deleted')
                setIsReload(!isReload)
            }
        })
    }

    const [completed, setCompleted] = useState(false);
    return (
        <tr>
            <th>{index+1}</th>
            <td>{task.task}</td>
            <td className={completed ? 'line-through' : 'text-dark'}>{task.description}</td>
            <td><button onClick={()=> setCompleted(!completed)} className='btn btn-xs'>Complete</button></td>
            <td><button onClick={()=> handleDeleteTask(task._id)} className='btn btn-xs btn-error'>Delete</button></td>
        </tr>
    );
};

export default MyTaskRow;