import React from 'react';
import {Routes,Route} from "react-router-dom"
import MainContainers from '../containers/main/MainContainers';
import AppContainers from '../containers/nav/AppContainers';
import './App.scss'

function App(props) {
  return (
    <>
    <AppContainers/>
    <Routes>
    <Route path={'/'} element={<MainContainers/>}/>
    {/* <Route path={'/'} element={</>}/> */}
    {/* <Route path={'/'} element={</>}/> */}
   {/* <Route path={'/'} element={</>}/> */}
    
  </Routes>
  </>
  );
}

export default App;