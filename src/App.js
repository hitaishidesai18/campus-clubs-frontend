import React, {useState} from 'react';
import {BrowserRouter as Router, Switch, Route, Link, Routes} from 'react-router-dom';
import './App.css';
//import Nav from './components/Nav'
//import About from './components/About';
import Login from './components/Login';
import Register from './components/Register';
import StudentHome from './components/StudentHome';
import AdminHome from './components/AdminHome';
import ClubheadHome from './components/ClubheadHome';
import ClubEditableComponent from './components/ClubEditableComponent';
import ClubPosts from './components/ClubPosts';
import NewPost from './components/NewPost';
import ManageClubs from './components/ManageClubs';
import AddClub from "./components/AddClub";


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
          <Route path="/clubeditable" element={<ClubEditableComponent/>}/>
          <Route path="/clubposts" element={<ClubPosts/>}/>
          <Route path="/newpost" element={<NewPost/>}/>
          <Route path="/manageclubs" element={<ManageClubs/>}/>
          <Route path="/addclub" element={<AddClub/>}/>
       
        </Routes>
      </div>
    </Router>
  );
};

export default App;