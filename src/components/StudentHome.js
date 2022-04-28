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
           <ul class="list-group">
            <li class="list-group-item list-group-item-dark">
              <div class="card">
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div></li>

  
</ul> 
        
        <div>  
            student
        </div>
        </Fragment>
    )
}

export default StudentHome;