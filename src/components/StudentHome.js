import React, {Fragment, Card, Button, useState} from "react";
import { useLocation } from "react-router-dom";

import {BrowserRouter as Router, Switch, Route, Link, Routes} from 'react-router-dom';

const StudentHome = () => {

    const location = useLocation();
   const username = location.state.username;
    
    
   // const [user_id, serUserId] = useState("");
     const getmyclubs = async e => {
    //     e.preventDefault();
     
    //     try {
    //         //get clubs that user follows
            
    //         const response = await fetch(`http://localhost:5000/campusclubs/user/getall`);
    //         const jsonData = await response.json();
          

    //         console.log(jsonData);
    //     } catch (error) {
    //         console.error(error.message);
    //     }

    console.log(username);
       
        
    };

    return(
        <Fragment>
           <h1 className="text-center mt-5" onClick={getmyclubs}>Student home</h1> 
        
        <div>  
            student
        </div>
        </Fragment>
    )
}

export default StudentHome;