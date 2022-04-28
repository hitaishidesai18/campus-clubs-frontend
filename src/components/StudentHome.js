import React, {Fragment, Card, Button, useState, useEffect} from "react";
import { useLocation, useNavigate } from "react-router-dom";

import {BrowserRouter as Router, Switch, Route, Link, Routes} from 'react-router-dom';

const StudentHome = () => {

    useEffect(()=>{
        getmyclubs();
    }, [])
    const location = useLocation();
   const userId = location.state.userId;

   const navigate = useNavigate();
   const toClubPosts = (clubId, clubName) => navigate('/clubposts', 
     { state: { clubId : clubId, clubName: clubName } }
    );
    const toManageClubs = (userId) => navigate('/manageclubs', 
     { state: { userId:userId } }
    );
   const [myclubs, setMyClubs] = useState([]);
    
    
  
     const getmyclubs = async e => {

     
         try {
            //get clubs that user follows
            
            const response = await fetch(`http://localhost:5000/campusclubs/club/getmyclubs/${userId}`);
            const jsonData = await response.json();

            console.log(jsonData.rows);
            setMyClubs(jsonData.rows);

         } catch (error) {
             console.error(error.message);
        }

    console.log(userId);
       
        
    };

    return(
        <Fragment>
            <Link to="/">Logout</Link>
                <h1 className="text-center mt-5" onClick={getmyclubs}>Student home</h1>
                <button className="btn btn-success" onClick={()=> toManageClubs(userId)} >Manage my clubs</button>
                <div class ="container">
                <ul class="list-group">
                    <li class="list-group-item list-group-item-dark">
                        {myclubs.map(club =>(
                            <div class="card"onClick = {() => toClubPosts(club.club_id, club.club_name)}>
                            <div class="card-body">
                                <h5 class="card-title">{club.club_name}</h5>
                                <p class="card-text">{club.category}</p>
                            </div>
                            </div>
                        ))}
                    </li>
                </ul>
                </div>
        </Fragment>
    )
}

export default StudentHome;