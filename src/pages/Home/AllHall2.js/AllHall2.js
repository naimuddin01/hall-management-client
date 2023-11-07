import React from 'react';
import AllHalls2 from './AllHalls2';
import marker from '../../../assets/icons/marker.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouseUser } from '@fortawesome/free-solid-svg-icons';

const AllHall2 = () => {

    return (
        <div className='m-12 grid grid-cols-1 lg:grid-cols-3 gap-12'>
            <AllHalls2 CardName="sdHall" cardTitle="Sadinota Hall" bgClass="bg-gradient-to-r from-secondary to-primary" img={marker} ></AllHalls2>
            <AllHalls2 CardName="bHall" cardTitle="Bijoy Hall" bgClass="bg-[#3A4256]" img={marker}></AllHalls2>
            <AllHalls2 CardName="srHall" cardTitle="Rashel Hall" bgClass="bg-gradient-to-r from-secondary to-primary" img={marker}></AllHalls2>
        </div>
    );
};

export default AllHall2;