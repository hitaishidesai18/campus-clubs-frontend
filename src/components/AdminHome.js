import React, {Fragment, Card, Button, useState, useEffect} from "react";
import { useLocation , useNavigate, Link} from "react-router-dom";

const AdminHome = () => {
    useEffect(()=>{
        getallclubs();
    }, [])

   const location = useLocation();
   const userId = location.state.userId;
   const [allclubs, setallclubs] = useState([]);
   const [clubId, setClubId] = useState("");
   const [clubName, setClubName] = useState("");

   const navigate = useNavigate();
    const toAddClub = () => navigate('/addclub');

   const getallclubs = async e => {
    try {
        //get all clubs
        
        const response = await fetch(`http://localhost:5000/campusclubs/club/getall`);
        const jsonData = await response.json();

        console.log(jsonData);
        setallclubs(jsonData);

     } catch (error) {
         console.error(error.message);
    }

console.log(userId);
   }

   return(
    

    
          
    <div class="container">
        <Link to="/">Logout</Link>
    <h2 className="text-center mt-5">Admin Home</h2>
    <button className="btn btn-success" onClick={() => {toAddClub()}}>Add new club</button>
    <p>The table shows all clubs stored in the database.</p>            
    <table class="table">
      <thead>
        <tr>

          <th>Club ID</th>
          <th>ClubName</th>
          <th>Update</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
          {allclubs.map(club=>(
               <tr>
               <td>{club.club_id}</td>
               <td>{club.club_name}</td>
               <td><button className="btn btn-warning">Update</button></td>
               <td><button className="btn btn-danger">Delete</button></td>
             </tr>
          ))}
       
      </tbody>
    </table>
  </div>
   );
}

export default AdminHome;