import React from 'react';
import bsmrstuLogo from '../../../assets/icons/bsmrstuLogo.jpg'
import  "./FirstTitle.css"
import marker from '../../../assets/icons/marker.svg'
import src from 'daisyui';

const FirstTitle = () => {
    return (
        <div style={{background: 'rgb(118, 178, 164)' }} className=' p-8 lg:flex items-center bg-dark firstTitle '>
            <div  >
            <img className='p-2 lg:w-32 md:w-28 w-24 display-block m-auto' src={bsmrstuLogo}  alt='' />
            </div>
            <div  className='lg:text-3xl md:text-2xl sm:text-1xl font-bold text-center'>
                <p>Bangabandhu Sheikh Mujibur Rahman Science and Technology University, Gopalganj</p>
            </div>
        </div>
    );
};

export default FirstTitle;