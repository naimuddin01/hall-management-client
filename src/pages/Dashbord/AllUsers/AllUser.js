import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { signOut } from 'firebase/auth';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';

const AllUser = ({ user, index, refetch }) => {
    const navigate = useNavigate()
    const hallName = localStorage.getItem('hallname');
    const { email, roll } = user;
    const makeAdmin = () => {
        //hallN r email ta ta req.peram er maddome backend e chole jabe
        fetch(`http://localhost:5000/${hallName}/user/admin/${email}`, {
            //header er maddome token ta pathasce
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    signOut(auth);
                    localStorage.removeItem('accessToken');
                    navigate('/');
                    console.log('fail to make admin');
        
                }
                return res.json();
            })
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    console.log(data);
                    toast.success(`success fully made an admin`)
                    refetch()
                }
            })
    }
    return (

        <tr>
            <th>{index + 1}</th>
            <td>{user.email}</td>
            <td> {roll !== 'admin' && <button onClick={makeAdmin} class="btn btn-xs">Make Admin</button>}</td>
            <td><button class="btn btn-xs">Remove User</button></td>
            <td>
                <FontAwesomeIcon icon={faPhone} />
            </td>
            <td>
                <FontAwesomeIcon icon={faEnvelope} />
            </td>

        </tr>

    );
};

export default AllUser;