import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { Link, useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/UseAdmin';
import AddStudent from '../Dashbord/AddStudent';
import UpdateStudent from '../Dashbord/UpdateStudent';
import Loading from '../Shared/Loading';
import DeleteStudent from './DeleteStudent';
import RoomStudentsRow from './RoomStudentsRow';


const InsitedEatchRoom = () => {
    const [user] = useAuthState(auth)
    const [admin] = useAdmin(user)
    const hallName = localStorage.getItem('hallname');
    const { num } = useParams()
    const roomNo = num
    const [updateStudent, setUpdateStudent] = useState(null)
    const [deletingStudent, setDeletingStudent] = useState(null);
    console.log('updateStudet', updateStudent)

    // const [onRoom, setOnRoom] = useState([])

    console.log(roomNo)
    const url = `http://localhost:5000/${hallName}/onRoom/${roomNo}`;
    const { data: onRoom, isLoading, refetch } = useQuery(['onRoom', roomNo], () => fetch(url).then(res => res.json()));
    if (isLoading) {
        return <Loading></Loading>
    }
    // useEffect(() => {
    //     fetch(url)
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data);
    //             setOnRoom(data)
    //         })
    // }, [roomNo])
    return (
        <div>
            <div className='grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-10 '>
                <div>
                    {/* <h2 className='text-2xl'>{hallName} room_no {roomNo} All Students: {onRoom?.length}</h2> */}
                </div>

                <div className='item-end text-end mr-10'>
                    {admin && <label for="add-student-modal" class="btn modal-button">Add student</label>}
                </div>
            </div>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th></th>
                            {/* <th>Room_No</th> */}
                            <th>Name</th>
                            <th>Roll Num</th>
                            <th>Dept</th>
                            {/* <th>Set Num</th> */}
                            <th>Phone No</th>
                            <th>Total Amount</th>
                            <th>Dew Amount</th>
                            <th>Total Meal</th>
                            <th>{admin && <p> Update</p>}</th>
                            <th>{admin && <p>Delete</p>}</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            onRoom?.map((student, index) => <RoomStudentsRow
                                hallName={hallName}
                                key={student._id}
                                index={index}
                                student={student}
                                setUpdateStudet={setUpdateStudent}
                                setDeletingStudent={setDeletingStudent}
                            // refetch={refetch}
                            ></RoomStudentsRow>)
                        }

                    </tbody>
                </table>

                {
                    //modal open korar kaj ta valo kore bujte hobe
                    //1: modal er body ta ase AddStudent.js er vitor
                    //je button ta click korle modal open hobe seta ase upore 'add student' naam e (lable er vitore) & r lable er vitore for er monnde modal er naam ta deyo 
                    //r niche hosse modal ta open kortece r modal er vitore kisu data pathasce
                    roomNo && <AddStudent roomNo={roomNo} hallName={hallName} refetch={refetch}></AddStudent>
                }

                {
                    updateStudent && <UpdateStudent
                        updateStudent={updateStudent}
                        setUpdateStudent={setUpdateStudent}
                        refetch={refetch}
                    ></UpdateStudent>
                }

                {
                    deletingStudent && <DeleteStudent
                        deletingStudent={deletingStudent}
                        refetch={refetch}
                        setDeletingStudent={setDeletingStudent}
                    ></DeleteStudent>
                }


            </div>
        </div>
    );
};

export default InsitedEatchRoom;