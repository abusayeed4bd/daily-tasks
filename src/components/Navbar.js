import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom'
import auth from './firebase.init';

const Navbar = () => {
    const [user] = useAuthState(auth)

    const logOut = () => {
        signOut(auth)
    }
    const menuItem = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/">Complated task</Link></li>
        <li><Link to="/">About</Link></li>

    </>
    return (
        <div className='bg-primary'>
            <div class="navbar shadow-xl">
                <div class="navbar-start">
                    <div class="dropdown">
                        <label tabindex="0" class="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </label>
                        <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {menuItem}
                        </ul>
                    </div>
                    <a class="btn btn-ghost normal-case text-xl">Daily Tasks</a>
                </div>
                <div class="navbar-center hidden lg:flex">
                    <ul class="menu menu-horizontal p-0 text-white ">
                        {menuItem}
                    </ul>
                </div>

                <div class="navbar-end">
                    {user ? <button onClick={logOut} class="btn">SignOut</button> : <button className='btn'>Explore more</button>}
                </div>
            </div>
        </div>
    );
};

export default Navbar;