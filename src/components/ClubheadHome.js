import React, {Fragment, Card, Button, useState, useEffect} from "react";
import { useLocation, useNavigate , Link} from "react-router-dom";
///campusclubs/club/getclubsofclubhead/:user_id
const ClubheadHome = () => {
   
    useEffect(()=>{
        getmyclubs();
    }, [])
    const location = useLocation();
   const userId = location.state.userId;

   const navigate = useNavigate();
   const toClub = (clubId, clubName) => navigate('/clubeditable', 
     { state: { clubId : clubId , clubName: clubName} }
    );

   const [myclubs, setMyClubs] = useState([]);
    

     const getmyclubs = async e => {

     
         try {
            //get clubs that user is clubhead of
            
            const response = await fetch(`http://localhost:5000/campusclubs/club/getclubsofclubhead/${userId}`);
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
           <h1 className="text-center mt-5">Your clubs</h1>
           <p>You are the clubhead for the following clubs. Click on each to see more</p>
        <div class ="container">
        <ul class="list-group">
            <li class="list-group-item list-group-item-dark">
            {myclubs.map(club =>(
                
              <div class="card" onClick = {() => toClub(club.club_id, club.club_name)}>
              <div class="card-body">
                <h5 class="card-title" > {club.club_name}</h5>
                <p class="card-text" >{club.category}</p>
        </div>
        </div>
            ))}
        </li>

  
    </ul>
    </div>
  

     
       
        </Fragment>
    )
}

export default ClubheadHome;