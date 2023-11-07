import { Route, Routes } from 'react-router-dom';
import './App.css';
import BHall from './pages/HallPage/BjHall/BHall';
import HallPage from './pages/HallPage/HallPage';
import RsHall from './pages/HallPage/SrHall/RsHall';
import SdHall from './pages/HallPage/SdHall/SdHall';
import Home from './pages/Home/Home';
import Noticed from './pages/Dashbord/Noticed';
import FirstTitle from './pages/Shared/FirstTitle/FirstTitle';
import Navbav from './pages/Shared/Navbav';
import { createContext, useState } from 'react';
import AllStudents from './pages/AllStudents/AllStudents';
import AllRooms from './pages/AllRooms/AllRooms';
import InsitedEatchRoom from './pages/InsitedEatchRoom/InsitedEatchRoom';
import Login from './pages/Login/Login';
import SignUp from './pages/Login/SignUp';
import RequireAuth from './pages/Login/RequireAuth';
import Dashbord from './pages/Dashbord/Dashbord';
import { ToastContainer } from 'react-toastify';
import AllUsers from './pages/Dashbord/AllUsers/AllUsers';
import AddStudent from './pages/Dashbord/AddStudent';
import HallApply from './pages/Dashbord/HallApply';
import AllAplication from './pages/Dashbord/HallApplication/AllAplication';

export const UserContext = createContext(); //useContext akhon porjonto kothao use kortece na

function App() {
  const [hallName, setHallName] = useState('');
  console.log('loggedInUser = ', hallName);
  return (
    <UserContext.Provider value={[hallName, setHallName]}>
      <FirstTitle />
      <Navbav />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/Home' element={<Home />}></Route>
        {/* <Route path='/hallname' element={<RequireAuth>
          <HallPage />
        </RequireAuth>}></Route> */}

        {/* <Route path='/sdHall' element={<SdHall />}></Route>
        <Route path='/bHall' element={<BHall />}></Route>
        <Route path='/srHall' element={<RsHall />}></Route> */}

        <Route path='dashbord' element={<RequireAuth>
          <Dashbord />
        </RequireAuth>}>
          <Route index element={<HallPage />}></Route>
          <Route path="notice" element={<Noticed />}></Route>
          <Route path='allRooms' element={<AllRooms />}></Route>
          <Route path='allStudents' element={<AllStudents />}></Route>
          <Route path='allUsers' element={<AllUsers />}></Route>
          <Route path='hallApply' element={<HallApply />}></Route>
          <Route path='allApply' element={<AllAplication />}></Route>
        </Route>

        {/* <Route path='notise' element={<Noticed />}></Route> */}
        {/* <Route path='allStudents' element={<AllStudents />}></Route> */}
        {/* <Route path='/allRooms' element={<AllRooms />}></Route> */}

        <Route path='/roomNo/:num' element={<InsitedEatchRoom />}></Route>
        {/* <Route path='/:hallName/:roomNo/addStudents' element={<AddStudent />}></Route> */}
        <Route path='login' element={<Login />}></Route>
        <Route path='signUp' element={<SignUp />}></Route>
      </Routes>
      <ToastContainer/>

    </UserContext.Provider>
  );
}

export default App;
