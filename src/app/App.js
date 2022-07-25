import React from 'react';
import _Navbar from '../components/nav/_Navbar';
import Doctors from "../components/doctors/Doctors"
import Home from '../components/Home'
import SERVICES from '../components/SERVICES'
import Price from '../components/Price'
import AboutStom from '../components/AboutStom'
import Contacts from "../components/Contacts"
import { Route, Routes } from 'react-router-dom';


function App(props) {
  return (
    <>
      <_Navbar />
      <div>
        <Routes>
          <Route path="/home" exact element={<Home />} />
          <Route path="/Doctors" exact element={<Doctors />} />
          <Route path='/SERVICES' exact element={<SERVICES/>}/>
          <Route path='/Price' exact element={<Price/>}/>
          <Route path='/AboutStom' exact element={<AboutStom/>}/>
          <Route path='/Contacts' exact element={<Contacts/>}/>

        </Routes>

      </div>
      {/* <_Navbar /> */}

    </>
  );
}

export default App;