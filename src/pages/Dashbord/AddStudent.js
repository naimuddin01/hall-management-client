import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/UseAdmin';
import Loading from '../Shared/Loading';
import { Form } from 'react-bootstrap';

const AddStudent = ({ roomNo, hallName, refetch }) => {
    // const { hallName, roomNo } = useParams();
    // console.log(hallName, student)
    // const roomNum = localStorage.getItem('roomNum')
    console.log("roomNo", roomNo)

    const [user] = useAuthState(auth)
    console.log("user", user)
    const [admin] = useAdmin(user)

    const handleAddStudent = event => {
        event.preventDefault();
        const hallName = event.target.hallName.value;
        const name = event.target.name.value;
        const roomNum = event.target.roomNum.value;
        const bedNum = event.target.bedNum.value;
        const department = event.target.department.value;
        const rollNumber = event.target.rollNumber.value;
        const phoneNumber = event.target.phoneNumber.value;
        const emergenceNumber = event.target.emergenceNumber.value;
        const homeTown = event.target.homeTown.value;
        const bloodGroup = event.target.bloodGroup.value;
        const paymentClear = event.target.paymentClear.value;

        const addStudentInf = {
            hallName: hallName,
            name: name,
            roomNum: roomNum,
            bedNum: bedNum,
            dept: department,
            rollNumber: rollNumber,
            phoneNumber: phoneNumber,
            emergenceNumber: emergenceNumber,
            homeTown: homeTown,
            bloodGroup: bloodGroup,
            paymentClear: paymentClear,
        }

        // const url = `http://localhost:5000/${hallName}/addStudent`;
        // const { data: addStudent, isLoading, refetch } = useQuery(['onRoom', addStudentInf], () => fetch(url, {
        //     method: 'post',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify(addStudentInf)
        // }).then(res => res.json()));
        // if (isLoading) {
        //     return <Loading></Loading>
        // }

        //sudu admin ri parbe sei ekta sotto disi r kisu na
        //amader backend thake korte hobe sudu admin rai parbe
        // if(admin){
        fetch(`http://localhost:5000/${hallName}/addStudent`, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(addStudentInf)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                // if (data.success) {
                //     toast.success("Add success!");
                // }
                // else {
                //     toast.error("Add faild!")
                // }
                refetch();
            });
        // }
    }


    return (
        <div>
            {/* <h2>this is add students {hallName} {roomNo}</h2> */}
            <input type="checkbox" id="add-student-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <label htmlFor="add-student-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 class="font-bold text-lg">HallName={hallName} and room_no = {roomNo}</h3>
                    <form onSubmit={handleAddStudent} className='grid grid-col-1 gap-3 justify-items-center mt-2'>

                        <input type="text" name='hallName' disabled value={hallName || ''} className="input input-bordered w-full max-w-xs" />
                        <input type="text" name='roomNum' disabled value={roomNo || ''} className="input input-bordered w-full max-w-xs" />
                        <input type="text" name='name' placeholder="name" className="input input-bordered w-full max-w-xs" />
                        <input type="text" name='department' placeholder="department" className="input input-bordered w-full max-w-xs" />
                        <input type="text" name='rollNumber' placeholder="rollNumber" className="input input-bordered w-full max-w-xs" />
                        <input type="text" name='bedNum' placeholder="Total Amount" className="input input-bordered w-full max-w-xs" />
                        <input type="text" name='paymentClear' placeholder="MM/DD/YYYY (Last Payment)" className="input input-bordered w-full max-w-xs" />
                        <input type="text" name='phoneNumber' placeholder="PhoneNumber" className="input input-bordered w-full max-w-xs" />
                        <input type="text" name='emergenceNumber' placeholder="Due Amount" className="input input-bordered w-full max-w-xs" />
                        <input type="text" name='homeTown' placeholder="Total Meal" className="input input-bordered w-full max-w-xs" />
                        {/* <input type="text" name='bloodGroup' placeholder="Blood Group" className="input input-bordered w-full max-w-xs" /> */}
                        <input type="submit" value="Submit" className="btn btn-secondary w-full max-w-xs" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddStudent;