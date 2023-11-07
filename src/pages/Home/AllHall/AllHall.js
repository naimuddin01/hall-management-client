import React from 'react';
import marker from '../../../assets/icons/marker.svg'
import phone from '../../../assets/icons/phone.svg'
import clock from '../../../assets/icons/clock.svg'
import AllHalls from './AllHalls';
import building from '../../../assets/building/building.jpg'
import { Link } from 'react-router-dom';


const AllHall = () => {
    return (
        <div className='m-12 grid grid-cols-1 lg:grid-cols-3 gap-12'>
            {/* <AllHalls CardName="sdHall" cardTitle="Sadinota Hall" bgClass="bg-gradient-to-r from-secondary to-primary"  img={marker}></AllHalls>
            <AllHalls CardName="bHall" cardTitle="Bijoy Hall" bgClass="bg-[#3A4256]" img={phone}></AllHalls>
            <AllHalls CardName="skHall" cardTitle="Rashel Hall" bgClass="bg-gradient-to-r from-secondary to-primary" img={clock}></AllHalls> */}

            <div className={`card lg:card-side bg-base-100 shadow-xl bg-gradient-to-r from-secondary to-primary`}>
                <figure className="p-2 pl-5 pt-5">
                    <img src={marker} alt="Album" />
                </figure>
                <div className="card-body m-auto text-white">
                    {/* <button onClick={showHallDetaill}><h2 className="card-title"> {cardTitle}</h2></button> */}
                    <button><h2 className="card-title"><Link to={`/sdHall`}>Sadinota Hall</Link></h2></button>

                </div>
            </div>


            <div className={`card lg:card-side bg-base-100 shadow-xl bg-gradient-to-r from-secondary to-primary`}>
                <figure className="p-2 pl-5 pt-5 ">
                    <img src={marker} alt="Album" />
                </figure>
                <div className="card-body m-auto text-white">
                    {/* <button onClick={showHallDetaill}><h2 className="card-title"> {cardTitle}</h2></button> */}
                    <button><h2 className="card-title"><Link to={`/bHall`}>Bijoy Hall</Link></h2></button>

                </div>
            </div>


            <div className={`card lg:card-side bg-base-100 shadow-xl bg-gradient-to-r from-secondary to-primary`}>
                <figure className="p-2 pl-5 pt-5">
                    <img src={marker} alt="Album" />
                </figure>
                <div className="card-body m-auto text-white">
                    {/* <button onClick={showHallDetaill}><h2 className="card-title"> {cardTitle}</h2></button> */}
                    <button><h2 className="card-title"><Link to={`/srHall`}>Rashel Hall</Link></h2></button>

                </div>
            </div>
        </div>
    );
};

export default AllHall;