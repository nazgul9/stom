import React from 'react';
import { Routes, Route } from "react-router-dom"
import MainContainers from '../containers/main/MainContainers';
import AppContainers from '../containers/nav/AppContainers';
import AboutClinicContainer from '../containers/main/AboutClinicContainer';
import PriceContainer from '../containers/main/price/PriceContainer';
import ResulttsContainer from '../containers/main/Results/ResulttsContainer';
import StuffContainer from '../containers/main/StuffContainer';
import ContactContainer from '../containers/main/ContactContainer';
import ServiceContainer from '../containers/main/ServiceContainer';
import Vinery from '../containers/nav/Vinery'
import Footer from '../containers/main/Footer';
import './App.scss'
import Chec_Up from '../containers/nav/Chec_Up';
import Elainery from '../containers/nav/Elainery'
import Brekety from '../containers/nav/Brekety'
import Otbali from '../containers/nav/Otbali'
import Iplant from '../containers/nav/Iplant'
import Protez from '../containers/nav/Protez'
import Lechenie from '../containers/nav/Lechenie'

function App(props) {
  return (
    <>
      <AppContainers />
      <Routes>
        <Route path={'/'} element={<MainContainers />} />
        <Route path={'/aboutClinic'} element={<AboutClinicContainer />} />
        <Route path={'/price'} element={<PriceContainer />} />
        <Route path={'/results'} element={<ResulttsContainer />} />
        <Route path={'/stuff'} element={<StuffContainer />} />
        <Route path={'/contact'} element={<ContactContainer />} />
        <Route path={'/chec_up'} element={<Chec_Up />} />
        <Route path={"/Vinery"} element={<Vinery />} />
        {/* <Route path={"/Elainery"} element={<Elainery />} /> */}
        <Route path={'/Brekety'} element={<Brekety />} />
        <Route path={'/whiting'} element={<Otbali />} />
        <Route path={'/Iplant'} element={<Iplant />} />
        {/* <Route path={'/Protez'} element={<Protez />} />
        <Route path={'/Lechenie'} element={<Lechenie />} /> */}

      </Routes>
      <Footer />
    </>
  );
}

export default App;