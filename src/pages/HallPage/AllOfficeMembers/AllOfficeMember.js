import React from 'react';

const AllOfficeMember = ({officeMember}) => {
    // console.log('officeMember',officeMember)
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl mt-4">
            {/* <figure className="px-10 pt-10">
                <img src={service.img} alt="Shoes" className="rounded-xl" />
            </figure> */}
            <div className="card-body items-center text-center">
                <h2 className="card-title">{officeMember.name}</h2>
                <p>{officeMember.description}</p>
                <p>Phone: {officeMember.phone} </p>
            </div>
        </div>
    );
};

export default AllOfficeMember;