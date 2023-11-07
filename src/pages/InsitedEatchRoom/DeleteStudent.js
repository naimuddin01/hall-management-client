import React from 'react';
import { toast } from 'react-toastify';


const DeleteStudent = ({deletingStudent, refetch, setDeletingStudent}) => {
    console.log('deleteStudent', deletingStudent);
    const {name, rollNumber, hallName} = deletingStudent;

    const handleDelete = () => {
        fetch(`http://localhost:5000/${hallName}/student/${rollNumber}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }

        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deleteCount) {
                    toast.success(`Student: ${name} is deleted.`)
                    setDeletingStudent(null);
                    refetch();
                }
            })
    }
    return (
        <div>
            <input type="checkbox" id="delete-confiem-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-bold text-lg text-red-500">Are you sure you want to delete {name} </h3>
                    <p class="py-4">Roll Number {rollNumber}</p>
                    <div class="modal-action">
                        {/* <button onClick={() => handleDelete()} className='btn btn-xs btn-error'>Delete</button> */}
                        <button onClick={() => handleDelete()} className='btn btn-xs btn-error'>Delete</button>
                        <label for="delete-confiem-modal" class="btn btn-xs">Cancel</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteStudent