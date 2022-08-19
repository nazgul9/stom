import React, {useState} from 'react';
import { Routes, Route } from "react-router-dom"
import MainContainers from '../containers/main/MainContainers';
import AppContainers from '../containers/nav/AppContainers';
import AboutClinicContainer from '../containers/main/AboutClinicContainer';
import PriceContainer from '../containers/main/price/PriceContainer';
import ResulttsContainer from '../containers/main/Results/ResulttsContainer';
import StuffContainer from '../containers/main/StuffContainer';
import ContactContainer from '../containers/main/ContactContainer';
import Vinery from '../containers/nav/Vinery'
import Footer from '../containers/main/Footer';
import './App.scss'
import Chec_Up from '../containers/nav/Chec_Up';
import Brekety from '../containers/nav/Brekety'
import Otbali from '../containers/nav/Otbali'
import Iplant from '../containers/nav/Iplant'
import Protez from '../containers/nav/Protez'
import Lechenie from '../containers/nav/Lechenie'
import CollSenter from '../components/collSenter/CollSenter';
import { Container } from 'react-bootstrap';

function App(props) {
  const [show, setShow] = useState(false)
  return (
    <>
      <AppContainers />
      
      <Routes>
        <Route path={'/'} element={<MainContainers setShow={setShow}/>} />
        <Route path={'/aboutClinic'} element={<AboutClinicContainer  setShow={setShow}/>} />
        <Route path={'/price'} element={<PriceContainer />} />
        <Route path={'/results'} element={<ResulttsContainer />} />
        <Route path={'/stuff'} element={<StuffContainer setShow={setShow}/>} />
        <Route path={'/contact'} element={<ContactContainer/>} />
        <Route path={'/chec_up'} element={<Chec_Up setShow={setShow} />} />
        <Route path={"/Vinery"} element={<Vinery setShow={setShow}/>} />
        {/* <Route path={"/Elainery"} element={<Elainery />} /> */}
        <Route path={'/Brekety'} element={<Brekety setShow={setShow} />} />
        <Route path={'/whiting'} element={<Otbali setShow={setShow}/>} />
        <Route path={'/Iplant'} element={<Iplant setShow={setShow}/>} />
        {/* <Route path={'/Protez'} element={<Protez />} />

        <Route path={'/Lechenie'} element={<Lechenie />} /> */}

      </Routes>
      <CollSenter show={show} setShow={setShow}/>
      <Footer />
    </>
  );
}

export default App;
