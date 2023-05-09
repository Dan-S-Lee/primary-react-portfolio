import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import CapitalOne from './pages/CapitalOne';
import SPGlobal from './pages/SPGlobal';
import Capstone from './pages/Capstone.js';
import JobBoard from './pages/JobBoard';

import { Route, Routes } from 'react-router-dom';
import React from "react";

const App = () => {
    return (
        <>
            <Routes>
                <Route path={"/"} element={<Home/>}/>
                <Route path={"/about"} element={<About/>}/>
                <Route path={"/capitalone"} element={<CapitalOne/>}/>
                <Route path={"/spglobal"} element={<SPGlobal/>}/>
                <Route path={"/capstone"} element={<Capstone/>}/>
                <Route path={"/jobboard"} element={<JobBoard/>}/>
            </Routes>
        </>
    );

};

export default App;
