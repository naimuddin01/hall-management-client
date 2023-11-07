import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';

const UpdateStudent = ({ updateStudent, setUpdateStudent, refetch }) => {

    console.log(updateStudent);
    const {bedNum, dept, hallName, name, rollNumber, roomNum } = updateStudent;

    // useEffect(() => {
    //     fetch(`http://localhost:5000/bHall/student/${student}`)
    //     .then(res => res.json())
    //     .then(data => {
    //         console.log("data", data);
            
    //     });
    // },[])


    // const url = `http://localhost:5000/bHall/student/${student}`;
    //     const { data: studentInfo, isLoading, refetch } = useQuery(['studentInfo', student], () => fetch(url).then(res => res.json()));
    //     if (isLoading) {
    //         return <Loading></Loading>
    //     }

    const handleSubmit = event => {
        event.preventDefault(); //prevent na dile fetch korar sathe sathe abar data sob faka kore dibe
        const hallName = event.target.hallName.value;
        const name = event.target.name.value;
        const roomNum = event.target.roomNum.value;
        const bedNum = event.target.bedNum.value;
        const department = event.target.department.value;
        const rollNumber = event.target.rollNumber.value;

        const updateStudentInf = {

            name: name,
            bedNum: bedNum,
            dept: department,
            rollNumber: rollNumber,
        }

        fetch(`http://localhost:5000/${hallName}/updateStudent/${rollNumber}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(updateStudentInf)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                // if (data.success) {
                //     toast.success("Add success!");
                // }
                // else {
                //     toast.error("Add faild!")
                // }
            });
    }

    // console.log("studentInfo", studentInfo);

    return (
        <div>
            {/* <h2>this is add students {hallName} {roomNo}</h2> */}
            <input type="checkbox" id="update-student-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <label htmlFor="update-student-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 class="font-bold text-lg">HallName={hallName} and room_no = {roomNum}</h3>
                    
                    <form onSubmit={handleSubmit} className='grid grid-col-1 gap-3 justify-items-center mt-2'>

                        <input type="text" name='hallName' disabled value={hallName || ''} className="input input-bordered w-full max-w-xs" />
                        <input type="text" name='roomNum' disabled value={roomNum || ''} className="input input-bordered w-full max-w-xs" />
                        <input type="text" name='name' placeholder="name" onBlur={name || ''} className="input input-bordered w-full max-w-xs" />
                        <input type="text" name='department' placeholder="department" value={dept || ''} className="input input-bordered w-full max-w-xs" />
                        <input type="text" name='rollNumber' placeholder="rollNumber" value={rollNumber || ''} className="input input-bordered w-full max-w-xs" />
                        <input type="text" name='bedNum' placeholder="Add Amount" onBlur={bedNum || ''} className="input input-bordered w-full max-w-xs" />

                        <input type="submit" value="Update" className="btn btn-secondary w-full max-w-xs" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateStudent;