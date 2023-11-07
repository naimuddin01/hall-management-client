import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AddStudent from '../Dashbord/AddStudent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDoorOpen, faHouse } from '@fortawesome/free-solid-svg-icons';
import door from '../../assets/door/door.jpg'

const AllRoom = ({ room }) => {
    const hallName = localStorage.getItem('hallname');
    return (
        <div class="card w-96 bg-primary text-primary-content">
            <div class="card-body">
                <h2 class="card-title m-auto"> <p>
                    {/* <FontAwesomeIcon icon={faHouse}></FontAwesomeIcon> */}
                    <Link to={`/roomNo/${room?.roomNum}`}><small class="ml-5">{room.dept}</small></Link>
                </p>
                </h2>
                {/* <div class="card-actions justify-center ">
                    <button class="btn w-30"><Link to={`/roomNo/${room?.roomNum}`}><p class="mr-4">Show Student</p></Link>
                        <FontAwesomeIcon icon={faDoorOpen}></FontAwesomeIcon>
                    </button>
                </div> */}
            </div>
        </div>

    );
};

export default AllRoom;