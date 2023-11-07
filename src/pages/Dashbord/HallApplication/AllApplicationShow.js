import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faEnvelope, faXmark } from '@fortawesome/free-solid-svg-icons'
import React from 'react';

const AllApplicationShow = ({ application, index }) => {
    console.log(application)
    return (
        <div class="card bg-info bg-opacity-10 border border-info border-start-0 rounded-end m-8 p-10">
            <div class="card-header">
                {application.name}
            </div>
            <div class="card-body">
                <blockquote class="blockquote mb-0 ">
                    <h1>Personal Information</h1>
                    <div class="m-5">
                        <h5 class="text-warning">
                            Name: <span class="mr-10">{application.name}</span>
                            email: <span class="mr-10">{application.email}</span>
                            Gender: <span>{application.gender}</span>
                        </h5>

                        <h5 class="text-warning" >
                            city: <span class="mr-10">{application.city}</span>
                            state: <span class="mr-10">{application.state}</span>
                            bloodGroup: <span>{application.bloodGroup}</span>
                        </h5>
                        <h5 class="text-warning">
                            phoneNumber: <span class="mr-10">{application.phoneNumber}</span>
                            emergenceNumber: <span class="mr-10">{application.emergenceNumber}</span>
                        </h5>
                    </div>

                    <h1>Academic Information</h1>
                    <div class="m-5 ">
                        <h5 class="text-warning">
                            session: <span class="mr-10 text-danger">{application.session}</span>
                            dept: <span class="mr-10">{application.dept}</span>
                        </h5>

                        <h5 class="text-warning">
                            year: <span class="mr-10">{application.year}</span>
                            semister: <span class="mr-10">{application.semister}</span>
                        </h5>
                        <h5 class="text-warning">
                            rollNumber: <span class="mr-10">{application.rollNumber}</span>
                            avarageCGPA: <span class="mr-10">{application.avarageCGPA}</span>
                        </h5>
                    </div>

                    <div class="justify-center">
                        <button type="button" class="btn btn-success">
                            <p class="mr-1"> call</p>
                            <FontAwesomeIcon icon={faEnvelope} />
                        </button>
                        <button type="button" class="btn btn-danger ml-10">
                            <p class="mr-1"> call</p>
                            <FontAwesomeIcon icon={faXmark} />
                        </button>
                    </div>
                </blockquote>
            </div>
        </div>
    );
};

export default AllApplicationShow;