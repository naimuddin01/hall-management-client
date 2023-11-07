import React from 'react';
import Loading from '../../Shared/Loading';
import { useQuery } from 'react-query';
import AllApplicationShow from './AllApplicationShow';

const AllAplication = () => {
    const hallname = localStorage.getItem('hallname');

    const url = `http://localhost:5000/${hallname}/studentApplication`;
    const { data: allApplication, isLoading } = useQuery(['allApplication', hallname], () => fetch(url).then(res => res.json()));
    console.log("allApplication: ", allApplication);
    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            {
                allApplication.map((application, index) => <AllApplicationShow
                    key={application._id}
                    index={index}
                    application={application}
                ></AllApplicationShow>)
            }
        </div>
    );
};

export default AllAplication;