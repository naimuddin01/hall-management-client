import React from 'react';
import { useParams } from 'react-router-dom';
import AllTeachers from './AllTeachers/AllTeachers';
import Footer from '../Shared/Footer'



const HallPage = () => {
    //(path='/hallname/:name') er maddome useParams er sahajje naam ta pasce
    // const {name} = useParams();
    const name = localStorage.getItem('hallname');
    return (
        <div>
            <AllTeachers name={name}></AllTeachers>
            <Footer></Footer>
        </div>
    );
};

export default HallPage;