import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import AllStudentRow from './AllStudentRow';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faPhone } from '@fortawesome/free-solid-svg-icons';

const AllStudents = () => {

    //useContext er maddome amra ekta data jekono jaygai pathate pari, kintu reload korle data ta r thake na .... sei jonno localStorage use kortece
    // const [hallName, setHallName] = useContext(UserContext);
    // console.log(hallName);
    // const hallname = hallName;
    const hallname = localStorage.getItem('hallname');


    const url = `http://localhost:5000/${hallname}/allStudents`;
    const { data: allStudents, isLoading, refetch } = useQuery(['allStudents', hallname], () => fetch(url).then(res => res.json()));
    // console.log("student: ", allStudents);
    if (isLoading) {
        return <Loading></Loading>
    }

    const handleSearch = (event) => {
        event.preventDefault();
        const searchText = event.target.search.value;

        const search = {
            searchText: searchText
        }
        console.log("search: ", search);
        // fetch(`http://localhost:5000/${hallname}/student/${searchText}`)
        // .then(res => res.json())
        // .then(data => {
        //     console.log("data", data);
            
        // });

    }

    return (
        <div>
            <div class="flex mb-5 mt-5">
                <div class="">
                    <h2 className='text-2xl mr-10'>All Students: {allStudents.length}</h2>
                </div>
                <form onSubmit={handleSearch} className='flex'>
                    <input class="" type="text" name='search' placeholder="Search" className="input input-bordered w-full max-w-xs" ></input>
                    <button class="btn btn-success ml-1 ">
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                        <p class="ml-2">Search</p>
                    </button>
                </form>

            </div>

            <div class="overflow-x-auto">
                <table class="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Room_No</th>
                            <th>Name</th>
                            <th>Dept</th>
                            <th>Phone No</th>
                            <th>Total Amount</th>
                            <th>Total Meal</th>
                            <th>Dew</th>
                            {/* <th>Blood Group</th>
                            <th>Emargence No</th> */}
                            <th>Call</th>
                            <th>Sms</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allStudents.map((student, index) => <AllStudentRow
                                key={student._id}
                                index={index}
                                student={student}
                                refetch={refetch}
                            ></AllStudentRow>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllStudents;