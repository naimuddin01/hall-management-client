import React from 'react';
import { signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const Navbav = () => {
    const [user, loading, error] = useAuthState(auth);
    const hallName = localStorage.getItem('hallName');

    //navigate ta hosse ami ekta button e click korle ba function er kaj er moddo onno ekta page e jabe, ei kaj ta korar jonno navigate use kori
    // er jonno navigate er vitore path er naam ta dile e hoy tokhon    
    const navigate = useNavigate()
    const logout = () => {
        signOut(auth);
        navigate('/');
        localStorage.removeItem('hallname');
        localStorage.removeItem('accessToken');
    };
    const menuItems = <>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/rules">Rules</Link></li>
        {/* <li><Link to="/notise">Notise</Link></li> */}
        {/* <li><Link to="/allStudents">All Students</Link></li> */}
        {/* <li><Link to="/allRooms">All Rooms</Link></li> */}
        
            {/* <li>
                {
                    user && <Link to="/dashbord">DashBord</Link>
                }
            </li> */}
        
        <li>{user
            ? <button className="btn btn-ghost" onClick={logout}>Sign Out</button>
            : <Link to="/login"></Link>}
        </li>
        {/* {
            hallName && <li ><Link to="/allStudents">All Rooms</Link></li>
        } */}
        
    </>

    return (
        <section class="navbar bg-base-100 ">
            <div class="lg:navbar-start">
                <div class="dropdown">
                    <label tabindex="0" class="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-24" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" class=" menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <a  class="btn btn-ghost normal-case text-xl text-bold">BSMRSTU</a>
            </div>
            <div class="navbar-center hidden lg:flex ml-28">
                <ul class="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>

            {/* Dash bord er jonno ekta button kora */}
            <div className="navbar-end">
                <label tabIndex="1" for="dashboard-sidebar" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
            </div>
        </section>
    );
};

export default Navbav;