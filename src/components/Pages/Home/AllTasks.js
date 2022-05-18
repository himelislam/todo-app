import React, { useEffect, useState } from 'react';
import TaskRow from './TaskRow';

const AllTasks = () => {
    const [tasks, setTasks] = useState([]);
    const [isReload, setIsReload] = useState(false);
    useEffect(()=>{
        fetch('http://localhost:5000/tasks')
        .then(res=> res.json())
        .then(data => setTasks(data));
    },[isReload])
    return (
        <div className=''>
            <h2 className='text-center text-3xl text-primary my-8'>All Task Lists</h2>
            <div className='mx-10'>
                <div class="overflow-x-auto">
                    <table class="table w-full">
                        {/* <!-- head --> */}
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Task</th>
                                <th>Description</th>
                                <th>Add</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                tasks.map((task, index)=> <TaskRow 
                                key={index}
                                index={index}
                                task={task}
                                isReload={isReload}
                                setIsReload={setIsReload}
                                ></TaskRow>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllTasks;