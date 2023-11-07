import { signOut } from 'firebase/auth';
import React from 'react';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading';
import AllUser from './AllUser';

const AllUsers = () => {
    const hallName = localStorage.getItem('hallname');

    const navigate = useNavigate()

    const url = `http://localhost:5000/${hallName}/users`;

    const { data: users, isLoading, refetch } = useQuery('users', () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => {
        if (res.status === 401 || res.status === 403) {
            signOut(auth);
            localStorage.removeItem('accessToken');
            navigate('/');

        }
        return res.json();
    }));

    if (isLoading) {
        return <Loading></Loading>
    }

    console.log(users);
    return (
        <div>
            {/* <h1>This is all user</h1> */}
            <div class="overflow-x-auto">
                <table class="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>email</th>
                            <th>Make Admin</th>
                            <th>remove user</th>
                            <th>Call</th>
                            <th>SMS</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <AllUser
                                key={user._id}
                                index={index}
                                user={user}
                                refetch={refetch}
                            ></AllUser>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;