import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/UseAdmin';
import AddStudent from '../Dashbord/AddStudent';
import UpdateStudent from '../Dashbord/UpdateStudent';
import insideroom from '../../assets/icons/insideroom.jpg'


const RoomStudentsRow = ({ student, index, setUpdateStudet, setDeletingStudent }) => {
    // const [treatment, setTreatement] = useState(null)
    const [user] = useAuthState(auth)
    const [admin] = useAdmin(user)
    return (
        <>
            <tr >
                <th>{index + 1}</th>
                {/* <td>{student.roomNum}</td> */}
                <td>{student.name}</td>
                <td>{student.rollNumber}</td>
                <td>{student.dept}</td>
                <td>{student.phone}</td>
                <td>{student.bedNum}</td>
            <td>{student.paymentClear}</td>
            <td>{student.homeTown}</td>
                <td>{admin && <label onClick={() => setUpdateStudet(student)} for="update-student-modal" class="btn btn-xs btn-success">update</label>}</td>
                
                <td>
                {admin &&  <label onClick={() => setDeletingStudent(student)} for="delete-confiem-modal" class="btn btn-xs btn-error">Delete</label>}
                </td>
            </tr>
        </>

    );
};

export default RoomStudentsRow;