import React, {Fragment, useState} from "react";
import {  useNavigate } from "react-router-dom";

import {BrowserRouter as Router, Switch, Route, Link, Routes} from 'react-router-dom';

const Login = () => {


    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const toStudent = () => navigate('/studenthome', 
     { state: { username : username } }
 );
   
    const verify = false;
    const onSubmitForm = async e => {
        e.preventDefault();
     
        try {
            //get user with username and check if password matches
            
            const response = await fetch(`http://localhost:5000/campusclubs/user/getpassword/${username}`);
            const jsonData = await response.json();
          
            if(jsonData.user_password == password){
               //window.location = "/studenthome";
               toStudent();
               // const navigate = useNavigate();
                
            }

            console.log(jsonData);
        } catch (error) {
            console.error(error.message);
        }
       
        
    };
  
    
    return(
      
        <div>
          <div>
          <Fragment>
            <h1 className="text-center mt-5">Campus Clubs</h1>
            <h2 className="text-center mt-5">Login to stay updated with campus activities!</h2>
            <form onSubmit={onSubmitForm}>
                <text>Username:</text>
                <input type="text" className="form-control" 
                    value = {username}
                    onChange = {e => setUsername(e.target.value)}
                    />
                  <text>Password:</text>
                    <input type="text" className="form-control" 
                    value = {password}
                    onChange = {e => setPassword(e.target.value)}
                    />
                <button className="btn btn-success">
                        Login 
                </button>
                
            </form>
            <Link to="/register">New user? Register</Link>
        </Fragment>
         
          
          </div>
      
        </div>
    
        
    )
}

export default Login;