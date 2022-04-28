import React, {Fragment, Card, Button, useState, useEffect} from "react";
import { useLocation } from "react-router-dom";

const ClubheadHome = () => {
    const location = useLocation();
   const userId = location.state.userId;

   return(
       <div>
           uder id {userId}
       </div>
   );
}

export default ClubheadHome;