import React, { useEffect, useState } from 'react';
import fluoride from '../../../assets/images/fluoride.png'
import cavity from '../../../assets/images/cavity.png'
import whitening from '../../../assets/images/whitening.png'
import vcPic from '../../../assets/vcPic/VC Sir .jfif'
import Teacher from './Teacher';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading';

const Teachers = () => {
    // const [dbteachers, setTeachers] = useState([]) // needed useState when use useEffect
    
    // useEffect(() =>{
    //     fetch(url)
    //     .then(res => res.json())
    //     .then(data => {
    //         console.log(data);
    //         setTeachers(data);
    //     })
    // },[])

    const url = 'http://localhost:5000/sdHall/teachers';

    const {data: teachers, isLoading} = useQuery ('name',() => fetch(url).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }

    
    return (
        <div className='my-28'>
            <div className='text-center'>
                <h3 className='text-primary text-xl font-bold uppercase'>Our Services</h3>
                <h2 className='text-4xl'>Services We Provide</h2>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    teachers.map((teacher) => <Teacher
                        key={teacher._id}
                        teacher={teacher}
                    ></Teacher>)
                }
            </div>
        </div>
    );
};

export default Teachers;