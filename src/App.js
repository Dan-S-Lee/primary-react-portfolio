import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import CapitalOne from './pages/CapitalOne';
import SPGlobal from './pages/SPGlobal';
import Capstone from './pages/Capstone';
import WIP from './pages/WIP'

import { Route, Routes } from 'react-router-dom';
import React from "react";

const App = () => {
    return (
        <>
            <Routes>
                <Route path={"/"} element={<Home/>}/>
                <Route path={"/portfolio"} element={<Home/>}/>
                <Route path={"/about"} element={<About/>}/>
                <Route path={"/capitalone"} element={<CapitalOne/>}/>
                <Route path={"/spglobal"} element={<SPGlobal/>}/>
                <Route path={"/capstone"} element={<Capstone/>}/>
                <Route path={"/nyccovid"} element={<WIP/>}/>
            </Routes>
        </>
    );

};

export default App;
