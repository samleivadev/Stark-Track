import {Route, Routes,} from 'react-router-dom'

import AmznIT from '../../pages/amznIT/amznit';
import Ctdi from '../../pages/ctdi/ctdi';
import Dashboard from '../../pages/dashboard/dashboard';
import Home from '../../pages/home/home';
import Operations from '../../pages/operations/operations';
import React from 'react';

const PageSwitch = () => (
    
  <Routes>
    <Route exact path = {'/'} element={<Home/>}/>
    <Route exact path = {'/dashboard'} element={<Dashboard/>}/>
    <Route exact path = {'/ctdi'} element={<Ctdi/>}/>
    <Route exact path = {'/operations'} element={<Operations/>}/>
    <Route exact path = {'/amznit'} element={<AmznIT/>}/>
  </Routes>
);

export default PageSwitch;