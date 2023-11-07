import { Link, useNavigate } from 'react-router-dom';


const AllHalls2 = ({ img, cardTitle, bgClass, CardName }) => {

    const navigate = useNavigate()
    const showHallDetaill = () => {
        // const path = `/hallname/${CardName}`;
        // navigate(path);
        localStorage.setItem('hallname', CardName)
    }
    return (
        <div className={`card lg:card-side bg-base-100 shadow-xl ${bgClass}`}>
            <figure className="p-2 pl-5 pt-5">
                <img src={img} alt="Album" />
            </figure>
            <div className="card-body m-auto text-white">
                {/* <button onClick={showHallDetaill}><h2 className="card-title"> {cardTitle}</h2></button> */}
                <button onClick={showHallDetaill}><h2 className="card-title"><Link to={`/dashbord`}>{cardTitle}</Link></h2></button>
            </div>
        </div>
    );
};

export default AllHalls2;