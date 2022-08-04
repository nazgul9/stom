import React from 'react';
import {Routes,Route} from "react-router-dom"
import MainContainers from '../containers/main/MainContainers';
import AppContainers from '../containers/nav/AppContainers';
import AboutClinicContainer from '../containers/main/AboutClinicContainer';
import PriceContainer from '../containers/main/price/PriceContainer';
import ResulttsContainer from '../containers/main/Results/ResulttsContainer';
import StuffContainer from '../containers/main/StuffContainer';
import ContactContainer from '../containers/main/ContactContainer';
import './App.scss'

function App(props) {
  return (
    <>
    <AppContainers/>
    <Routes>
    <Route path={'/'} element={<MainContainers/>}/>
    <Route path={'/aboutClinic'} element={<AboutClinicContainer/>}/>
    <Route path={'/price'} element={<PriceContainer/>}/>
    <Route path={'/results'} element={<ResulttsContainer/>}/>
    <Route path={'/stuff'} element={<StuffContainer/>}/>
    <Route path={'/contact'} element={<ContactContainer/>}/>  
  </Routes>
  </>
  );
}

export default App;