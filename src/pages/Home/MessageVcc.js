import React from 'react';
import vcPic from '../../assets/vcPic/VC Sir .jfif'
import footer from '../../assets/images/footer.png'
import vcBackgroung from '../../assets/icons/vcbackground.jpg'

const MessageVcc = () => {
    return (
        <section style={{
            background: `url(${footer})`,
            backgroundSize: 'cover'
        }}>
            <div>
                <div>
                    <p className='text-center lg:text-4xl md:text-3xl sm:text-2xl font-bold pt-12'>Message From Vice Chancellor</p>
                </div>
                <div class="card lg:card-side bg-base-100 shadow-xl m-28">
                    <figure><img src={vcPic} alt="Album" /></figure>
                    <div style={{background: `url(${vcBackgroung})`,backgroundRepeat: "no-repeat",backgroundSize: "cover"}} class="card-body ">
                        <h2 class="card-title justify-center text-secondary text-4xl">Prof.Dr.A.Q.M.Mahbub</h2>
                        <p class="text-center lg:text-2.5xl md:text-2xl sm:text-1xl pt-5 text-light">Welcome to the website of Bangabandhu Sheikh Mujibur Rahman Science and Technology University (BSMRSTU). BSMRSTU was established at 2001 by the name of our great leader and father of the nation Bangabandhu Sheikh Mujibur Rahman, who was born in Tungipara of Gopalganj. This university has a great vision to flourish research and innovation in the field of science and technology. BSMRSTU prides itself for the depth of its involvement in science and technology.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MessageVcc;