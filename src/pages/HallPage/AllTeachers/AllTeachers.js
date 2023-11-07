import { signOut } from 'firebase/auth';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../../App';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading';
import AllOfficeMember from '../AllOfficeMembers/AllOfficeMember';
import AllTeacher from './AllTeacher';

const AllTeachers = ({name}) => {

    const url = `http://localhost:5000/${name}/teachers`;
    const url2 = `http://localhost:5000/${name}/officeMembers`;

    const navigate = useNavigate()

    const { data: teachers, isLoading } = useQuery('teacher', () => fetch(url,{
        method: 'GET',
        // amra headers er modde ekta authorization pathasce
        //eita backend thake pete hole req.headers.authorization dile e payo jabe
        //function verifyJWT(req, res, next) oykhane req.headers.authorization use kore app.get/ app.put / e verifyJWT call kore disi
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`  
        }
    }).then(res =>{
        //jothy token ta invalid hoy tahole nicher error status asbe
        //tokhon amra take signOut kore token ta localstore theke remove kore disce
        if(res.status === 401 || res.status === 403){
            signOut(auth);
            localStorage.removeItem('accessToken');
            navigate('/');

        }
        return res.json();
    } ));
    const { data: officeMembers, isLoading2 } = useQuery('officeMember', () => fetch(url2 ,{
        method: 'GET',
        // amra headers er modde ekta authorization pathasce
        //eita backend thake pete hole req.headers.authorization dile e payo jabe
        //function verifyJWT(req, res, next) oykhane req.headers.authorization use kore app.get/ app.put / e verifyJWT call kore disi
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`  
        }
    }).then(res => res.json()));
    
    // console.log('teachers',teachers)
    // console.log('officeMembers',officeMembers)

    if (isLoading) {
        return <Loading></Loading>
    }
    if (isLoading2) {
        return <Loading></Loading>
    }

    return (
        <div>
            <div className='text-center mt-4'>
                <h3 className='text-primary text-xl font-bold uppercase'>Our management Members</h3>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    teachers?.map((teacher) => <AllTeacher
                        key={teacher._id}
                        teacher={teacher}
                    ></AllTeacher>)
                }
            </div>


            <div className='text-center mt-8 mb-8'>
                <h3 className='text-primary text-xl font-bold uppercase'>Our meal meaker</h3>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    officeMembers?.map((officeMember) => <AllOfficeMember
                        key={officeMember._id}
                        officeMember={officeMember}
                    ></AllOfficeMember>)
                }
            </div>
        </div>
    );
};

export default AllTeachers;