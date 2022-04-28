import React, {useState} from 'react';
import './App.css';
//import Nav from './components/Nav'
//import About from './components/About';
import Login from './components/Login';
import Register from './components/Register';
import StudentHome from './components/StudentHome';
import AdminHome from './components/AdminHome';
import ClubheadHome from './components/ClubheadHome';

import {BrowserRouter as Router, Switch, Route, Link, Routes} from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <div>
        <div>
      
        
        </div>
        <Routes>
          <Route path="/" element={<Login />} />
          
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/studenthome" element={<StudentHome />} />
          <Route path="/adminhome" element={<AdminHome/>}/>
          <Route path="/clubheadhome" element={<ClubheadHome/>}/>
        </Routes>
      </div>
    </Router>
  );
};

export default App;