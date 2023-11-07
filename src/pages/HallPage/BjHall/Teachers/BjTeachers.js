import React from 'react';
import { useQuery } from 'react-query';
import BjTeacher from './BjTeacher';
import Loading from '../../../Shared/Loading'

const BjTeachers = () => {
    const url = 'http://localhost:5000/bHall/teachers';

    const { data: teachers, isLoading } = useQuery('name', () => fetch(url).then(res => res.json()));
    console.log(teachers)

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <div className='text-center'>
                <h3 className='text-primary text-xl font-bold uppercase'>Our Services</h3>
                <h2 className='text-4xl'>Services We Provide</h2>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    teachers.map((teacher) => <BjTeacher
                        key={teacher._id}
                        teacher={teacher}
                    ></BjTeacher>)
                }
            </div>
        </div>
    );
};

export default BjTeachers;