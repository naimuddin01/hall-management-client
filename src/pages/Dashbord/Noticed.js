import React from 'react';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/UseAdmin';
import { useAuthState } from 'react-firebase-hooks/auth';
import NoticedImg from '../../assets/icons/noticedpic.png';


const Noticed = () => {
    // const [user] = useAuthState(auth)
    // const [admin] = useAdmin(user)
    const hallName = localStorage.getItem('hallname');
    return (
        <div  class="mt-20 m-10">
            <h2>Date: 23-5-2023</h2>
            <h4 class="mt-3">Topic: Hall Closed</h4>
            <p class="mt-3">Contact the hall administration Reach out to the hall administration office or the relevant department and explain your situation. Inquire if there are any exceptional circumstances under which they would consider accepting a late application. While it's not guaranteed, they may be able to make an exception or provide information about any waiting lists or alternative accommodations.</p>
        </div>
    );
};

export default Noticed;