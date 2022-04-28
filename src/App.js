import React, {useState} from 'react';
import './App.css';
//import Nav from './components/Nav'
//import About from './components/About';
import Login from './components/Login';
import Register from './components/Register';
import StudentHome from './components/StudentHome';

import {BrowserRouter as Router, Switch, Route, Link, Routes} from 'react-router-dom';
// function App(){

//     return(
//       <Router>
//         <div className='App'>
//           <Nav />
//           <Route path="/about" component ={About}/>
//           <Route path="/shop" component ={Shop}/>
//         </div>
//         </Router>

//         // <div className='App'>
//         //   <Nav />
//         //   <About />
//         //   <Shop />
//         // </div>
//     );
// }

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
        </Routes>
      </div>
    </Router>
  );
};

export default App;