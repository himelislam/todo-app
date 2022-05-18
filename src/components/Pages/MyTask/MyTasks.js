import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import MyTaskRow from './MyTaskRow';

const MyTasks = () => {
    const [user] = useAuthState(auth);
    const email = user.email;
    const [myTasks, setMyTasks] = useState([]);
    const [isReload, setIsReload] = useState(false);
    useEffect(()=>{
        fetch(`https://pure-chamber-30882.herokuapp.com/mytask?email=${email}`)
        .then(res=> res.json())
        .then(data => setMyTasks(data));
    },[isReload])
    return (
        <div>
            <h2 className='text-center text-3xl text-primary my-8'>My Tasks</h2>
            <div>
            <div className='mx-10'>
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        {/* <!-- head --> */}
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Task</th>
                                <th>Description</th>
                                <th>Complete</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                myTasks.map((task, index)=> <MyTaskRow 
                                key={index}
                                index={index}
                                task={task}
                                setIsReload={setIsReload}
                                isReload={isReload}
                                ></MyTaskRow>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
            </div>
        </div>
    );
};

export default MyTasks;