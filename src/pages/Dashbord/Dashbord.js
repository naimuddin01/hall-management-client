import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/UseAdmin';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouseUser, faMessage, faNotEqual, faNotdef, faNoteSticky, faUserFriends, faUserGroup, faUserTie } from '@fortawesome/free-solid-svg-icons';
import vcBackgroung from '../../assets/icons/vcbackground.jpg'



const Dashbord = () => {
    const hallName = localStorage.getItem('hallname')
    const [user] = useAuthState(auth)
    // console.log("user", user)
    const [admin] = useAdmin(user)
    return (
        <div style={{background: `url(${vcBackgroung})`,backgroundRepeat: "no-repeat",backgroundSize: "cover"}} class="drawer drawer-mobile mt-7">
            <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content flex flex-col ">
                {/* <!-- Page content here --> */}
                {/* <h2 className='text-3xl font-bold text-purple-500 text-center'>Welcome to {hallName} Hall</h2> */}
                <Outlet></Outlet>
            </div>
            <div  class="drawer-side">
                <label for="dashboard-sidebar" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-60 bg-base-100 text-base-content mx-5">
                    {/* <!-- Sidebar content here --> */}
                    <li><Link to="/dashbord">
                        <FontAwesomeIcon icon={faUserTie} />
                        <p>Management Members</p>
                    </Link></li>
                    <li><Link to="/dashbord/allRooms">
                        <FontAwesomeIcon icon={faHouseUser} />
                        <p>All Department</p>
                    </Link></li>
                    <li><Link to="/dashbord/notice">
                        <FontAwesomeIcon icon={faNoteSticky} />
                        <p>Notise</p>
                    </Link></li>
                    <li><Link to="/dashbord/hallApply">
                        <FontAwesomeIcon icon={faMessage} />
                        <p>Mill Aplication</p>
                    </Link></li>
                    {admin && <li><Link to="/dashbord/allApply">
                        <FontAwesomeIcon icon={faNotdef} />
                        <p>All Aplication</p>
                    </Link></li>}
                    {admin && <li><Link to="/dashbord/allStudents">
                        <FontAwesomeIcon icon={faUserFriends} />
                        <p>All Students</p>
                    </Link></li>}
                    {admin && <li><Link to="/dashbord/allUsers">
                        <FontAwesomeIcon icon={faUserGroup} />
                        <p>Admin</p>
                    </Link></li>}
                    {/* <li><Link to="/dashbord/allUsers">All Users</Link></li> */}

                </ul>

            </div>
        </div>
    );
};

export default Dashbord;