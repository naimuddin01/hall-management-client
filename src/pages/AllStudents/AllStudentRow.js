import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'react-bootstrap/Image';
import bsmrstu from '../../assets/icons/bsmrstuLogo.jpg'

import React from 'react';

const AllStudentRow = ({ student, index }) => {
    // console.log("student: ", student);
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{student.roomNum}</td>
            <td  class="flex">{student.name}</td>
            <td>{student.dept}</td>
            <td>{student.phoneNumber}</td>
            <td>{student.bedNum}</td>
            <td>{student.paymentClear}</td>
            <td>{student.homeTown}</td>
            {/* <td>{student.bloodGroup}</td> */}
            {/* <td>{student.emergenceNumber}</td> */}
            <td>
                <FontAwesomeIcon icon={faPhone} />
            </td>
            <td>
                <FontAwesomeIcon icon={faEnvelope} />
            </td>
        </tr>
    );
};

export default AllStudentRow;