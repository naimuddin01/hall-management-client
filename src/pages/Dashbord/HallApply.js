import React from 'react';

const HallApply = () => {

    const hallName = localStorage.getItem('hallname');

    const handleApplicationSubmit = (event) => {
        event.preventDefault();
        const hallName = event.target.hallName.value;
        const academicYear = event.target.academicYear.value;
        const name = event.target.name.value;
        const email = event.target.email.value;
        const city = event.target.city.value;
        const state = event.target.state.value;
        const gender = event.target.gender.value;
        const phoneNumber = event.target.phoneNumber.value;
        const emergenceNumber = event.target.emergenceNumber.value;
        const bloodGroup = event.target.bloodGroup.value;
        const session = event.target.session.value;
        const dept = event.target.dept.value;
        const year = event.target.year.value;
        const semister = event.target.semister.value;
        const rollNumber = event.target.rollNumber.value;
        const avarageCGPA = event.target.avarageCGPA.value;

        const addApplicationStudentInf = {
            hallName: hallName,
            academicYearme: academicYear,
            name: name,
            email: email,
            city: city,
            state: state,
            gender: gender,
            phoneNumber: phoneNumber,
            emergenceNumber: emergenceNumber,
            bloodGroup: bloodGroup,
            session: session,
            dept: dept,
            year: year,
            semister: semister,
            rollNumber: rollNumber,
            avarageCGPA: avarageCGPA,
        }
        console.log("addApplicationStudentInf", addApplicationStudentInf);
        fetch(`http://localhost:5000/${hallName}/studentApplication`, {
            method: 'post',
            headers: { 
                'Content-Type': 'application/json',
                // 'authorization': `Bearer ${localStorage.getItem('accessToken')}`  
            },
            body: JSON.stringify(addApplicationStudentInf)
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
                
            });
        // }
    }

    return (
        <div>
            <form onSubmit={handleApplicationSubmit} className='grid grid-col-1 gap-3 justify-items-center  mt-2'>
                <input type="text" name='hallName' disabled value={hallName || ''} className="input input-bordered w-full max-w" />
                <h1>Personal Information</h1>
                <input type="text" name='academicYear' placeholder="Academic-Year" className="input input-bordered w-full max-w" />
                <input type="text" name='name' placeholder="Name" className="input input-bordered w-full max-w" />
                <input type="text" name='email' placeholder="Email" className="input input-bordered w-full max-w" />
                <input type="text" name='city' placeholder="City" className="input input-bordered w-full max-w" />
                <input type="text" name='state' placeholder="State" className="input input-bordered w-full max-w" />
                <input type="text" name='gender' placeholder="Gender" className="input input-bordered w-full max-w" />
                <input type="text" name='phoneNumber' placeholder="Phone Number" className="input input-bordered w-full max-w" />
                <input type="text" name='emergenceNumber' placeholder="Emergence Number" className="input input-bordered w-full max-w" />
                <input type="text" name='bloodGroup' placeholder="Blood Group" className="input input-bordered w-full max-w" />

                <h1>Academic Information</h1>
                <input type="text" name='session' placeholder="Session" className="input input-bordered w-full max-w" />
                <input type="text" name='dept' placeholder="Dept" className="input input-bordered w-full max-w" />
                <input type="text" name='year' placeholder="Year" className="input input-bordered w-full max-w" />
                <input type="text" name='semister' placeholder="Semister" className="input input-bordered w-full max-w" />
                <input type="text" name='rollNumber' placeholder="Roll No" className="input input-bordered w-full max-w" />
                <input type="text" name='avarageCGPA' placeholder="Avarage CGPA" className="input input-bordered w-full max-w mb-20" />
                <input type="submit" value="Submit" className="btn btn-secondary w-full max-w-xs mb-52" />
            </form>
        </div>
    );
};

export default HallApply;