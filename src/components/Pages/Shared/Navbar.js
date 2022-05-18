import React from 'react';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import auth from '../../../firebase.init'

const Navbar = () => {
    const [user] = useAuthState(auth)
    return (
        <div class="navbar bg-base-100 lg:px-20">
            <div class="navbar-start">
                <div class="dropdown">
                    <label tabindex="0" class="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                    {
                        user ?
                            <>
                                <Link to='/'><li><a>Home</a></li></Link>
                                <Link to='/myTodo'><li><a>My Task</a></li></Link>
                            </>
                            :
                            ''
                    }
                    </ul>
                </div>
                <a class="btn btn-ghost normal-case text-xl">Todo App</a>
            </div>
            <div class="navbar-end hidden lg:flex">
                <ul class="menu menu-horizontal p-0">
                    {
                        user ?
                            <>
                                <Link to='/'><li><a>Home</a></li></Link>
                                <Link to='/myTodo'><li><a>My Task</a></li></Link>
                            </>
                            :
                            ''
                    }
                    {
                        user ?
                            <li><a onClick={() => signOut(auth)} class="btn text-white">Log Out</a></li>
                            :
                            <Link to='/login'><li><a class="btn text-white">Login</a></li></Link>
                    }
                </ul>
            </div>
        </div>
    );
};

export default Navbar;