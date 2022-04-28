import React, {Fragment, Card, Button, useState, useEffect} from "react";
import { useLocation , Link} from "react-router-dom";

const ManageClubs = () => {
    useEffect(()=>{
        getallclubs();
        getFollowingList();
    }, [])

   const location = useLocation();
   const userId = location.state.userId;
   const [allclubs, setallclubs] = useState([]);
   const [followList, setFollowList] = useState([]);
   const [clubId, setClubId] = useState("");
   const [clubName, setClubName] = useState("");
   const [follow, setFollow]  = useState("not following")
    var followingList =[];
   

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

   }

   async function myFunction(item){
        
    const id = item.club_id;
  
    const name = item.club_name;
    var count = 0;
    try{
     const response = await fetch(`http://localhost:5000/campusclubs/club/isfollowed/${userId}/${id}`);
     const jsonData = await response.json();

     count = jsonData.count;
     var following = "not following";
    if(count>0)following = "following";
    var a = {id:id, name:name, following: following};
    followingList.push(a);
    console.log(followingList);
     console.log(jsonData);
     setFollowList(followingList)
     
 }catch (error) {
  console.error(error.message);
 }
 
}
   const getFollowingList = async e  => {
       
       allclubs.forEach(myFunction);
       

      
   }
//    const startFollowing = async e => {
//     try {
//      const body ={userId, clubId};
//      const response = fetch("http://localhost:5000/campusclubs/club/follow",{
//          method: "POST",
//          headers: {"Content-Type": "application/json"},
//          body: JSON.stringify(body)
//      });
//     } catch (error) {
//         console.error(error.message);
        
//     }
// }

   return(
    <div class="container">
    <h2 className="text-center mt-5">My Clubs</h2>
    <p>The table shows all clubs stored in the database.</p>            
    <table class="table">
      <thead>
        <tr>

          <th>Club ID</th>
          <th>ClubName</th>
          <th>Follow status</th>
          <th>Update</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
          {followList.map(a=>(
               <tr>
               <td >{a.id}</td>
               <td>{a.name}</td>
               <td >{a.following}</td>
               <td><button className="btn btn-success"
                                //onClick={() => {setClubId(a.id); startFollowing();}}
                                >Follow</button></td>
               <td><button className="btn btn-danger">Unfollow</button></td>
             </tr>
          ))}
       
      </tbody>
    </table>
  </div>
   );
}

export default ManageClubs;