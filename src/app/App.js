import React from 'react';
import _Navbar from '../components/nav/_Navbar';
import Doctors from "../components/Doctors"
import Home from '../components/Home'
import { Route, Routes } from 'react-router-dom';


function App(props) {
  return (
    <>
      <_Navbar />
      <div>
        <Routes>
          <Route path="/home" exact element={<Home />} />
          <Route path="/Doctors" exact element={<Doctors />} />

        </Routes>

      </div>
    </>
  );
}

export default App;