import React, { useState } from 'react';
import { useQuery } from 'react-query';
import AddStudent from '../Dashbord/AddStudent';
import Loading from '../Shared/Loading';
import AllRoom from './AllRoom';



const AllRooms = () => {
    const hallname = localStorage.getItem('hallname');

    const url = `http://localhost:5000/${hallname}/allRooms`;
    const { data: allRooms, isLoading, refetch } = useQuery(['allRooms'], () => fetch(url).then(res => res.json()));
    if (isLoading) {
        return <Loading></Loading>
    }


    return (
        <div >
            <h2 className='text-3xl font-bold text-purple-500 text-center mt-5'>Welcome to Shadinota dibos Hall</h2>

            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 m-5'>
                {
                    allRooms.map((room, index) => <AllRoom
                        key={room._id}
                        index={index}
                        room={room}
                        refetch={refetch}

                    ></AllRoom>)
                }
            </div>


        </div>
    );
};

export default AllRooms;