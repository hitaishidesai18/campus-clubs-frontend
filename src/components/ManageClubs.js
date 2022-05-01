import React, {Fragment, Card, Button, useState, useEffect} from "react";
import { useLocation , Link} from "react-router-dom";

const ManageClubs = () => {
    useEffect(()=>{
        getallclubs();
        getMyClubs();
        getUnfollowed();
        
    }, [])

   const location = useLocation();
   const userId = location.state.userId;
   const [allclubs, setallclubs] = useState([]);
   const [myclubs, setmyclubs] = useState([]);
   const [notFollowingClubs, setNotFollowingClubs] = useState([]);
   const [followList, setFollowList] = useState([]);
   const [clubId, setClubId] = useState("");
   const [clubName, setClubName] = useState("");
   const [follow, setFollow]  = useState("not following");
   const [loopVal, setLoopVal] = useState(0);
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
   const getMyClubs = async e => {
    try {
        //get all clubs
        
        const response = await fetch(`http://localhost:5000/campusclubs/club/getmyclubs/${userId}`);
        const jsonData = await response.json();

        console.log(jsonData.rows);
        setmyclubs(jsonData.rows);

     } catch (error) {
         console.error(error.message);
    }

   }

   const getUnfollowed = async e =>{
     var unfollowedClubsList =[];
     allclubs.forEach(club =>{
        myclubs.forEach( followedClub =>{
          if(club.club_id == followedClub.club_id){
            console.log("true hai");
            console.log(club.club_id);
          }else{
            console.log(club);
            console.log("false hai");
              unfollowedClubsList.push(club);
              console.log(unfollowedClubsList);
          }
        });
     });
     console.log("hi");
     console.log(unfollowedClubsList);
     setNotFollowingClubs(unfollowedClubsList);
   }

   async function myFunction(item){
    
    if(loopVal==1)return;
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
     setFollowList(followingList);
     
     //getFollowingList();
     
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

const followClub = async (clubId) =>{
  try {
           
    const body ={user_id : userId, club_id : clubId};
    const response = fetch("http://localhost:5000/campusclubs/club/follow",{
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(body)
    });

    console.log(response);
} catch (error) {
    console.error(error.message);
}
}
const unfollowClub = async (clubId) =>{
  try {
           
    const deletefollow = await fetch(`http://localhost:5000/campusclubs/club/unfollow/${userId}/${clubId}`,{
      method: "DELETE" 
    });
   
    console.log(deletefollow);

} catch (error) {
    console.error(error.message);
}
}


   return(
    <div class="container">
    <h2 className="text-center mt-5" >My Clubs</h2>
    <p>The table shows all clubs stored in the database.</p>            
    <table class="table">
      <thead>
        <tr>

          <th>Club ID</th>
          <th>ClubName</th>
          
          <th>Follow</th>
          <th>Unfollow</th>
          
        </tr>
      </thead>
      <tbody>
          {allclubs.map(club=>(
               <tr>
               <td >{club.club_id}</td>
               <td>{club.club_name}</td>
               <td><button className="btn btn-success"
                                onClick={() => {followClub(club.club_id);}}
                                >Follow</button></td>
                
                <td><button className="btn btn-danger"
                                onClick={() => {unfollowClub(club.club_id);}}
                                >Unfollow</button></td>
               
             </tr>
          ))}
       
      </tbody>
    </table>
  </div>
   );
}

export default ManageClubs;