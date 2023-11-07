import React from 'react';
import Footer from '../Shared/Footer';
import AllHall from './AllHall/AllHall';
import AllHall2 from './AllHall2.js/AllHall2';
import Carosul from './Carosul';
import MessageVcc from './MessageVcc';
import Teachers from './Teacher/Teachers';


const Home = () => {
    return (
        <div>
            <Carosul/>
            <MessageVcc></MessageVcc>
            <AllHall2></AllHall2>
            {/* <AllHall></AllHall> sudu eita korle e BjHall SdHall SrHall alada alada load korbe ei components er kaj gulo hobe */}
            <Footer></Footer>
        </div>
    );
};

export default Home;