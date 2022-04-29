import React, {Fragment, useState} from "react";

const AddClub = () => {


    const [clubId, setClubId] = useState("");
    const [clubName, setClubName] = useState("");
    const [category, setCategory] = useState("");
    const [clubheadId, setClubheadId] = useState(9);

    
    const onSubmitForm = async e => {
        e.preventDefault();
        try {
           
            const body ={club_id :clubId,club_name: clubName, category : category};
            const response = fetch("http://localhost:5000/campusclubs/club/add",{
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            });

            console.log(response);
        } catch (error) {
            console.error(error.message);
        }
        try {
           
            const body ={user_id : clubheadId, club_id : clubId};
            const response = fetch("http://localhost:5000/campusclubs/clubhead/add",{
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            });

            console.log(response);
        } catch (error) {
            console.error(error.message);
        }
    };
    
    return(
        <Fragment>
            <h1 className="text-center mt-5">Add a new club</h1>
             <form onSubmit={onSubmitForm}>
                <text>Club ID:</text>
                <input type="text" className="form-control" 
                    value = {clubId}
                    onChange = {e => setClubId(e.target.value)}
                    />
                    <text>Club Name:</text>
                    <input type="text" className="form-control" 
                    value = {clubName}
                    onChange = {e => setClubName(e.target.value)}
                    />
                  <text>Category:</text>
                    <input type="text" className="form-control" 
                    value = {category}
                    onChange = {e => setCategory(e.target.value)}
                    />
                    <text>User Id of clubhead:</text>
                    <input type="text" className="form-control" 
                    value = {clubheadId}
                    onChange = {e => setClubheadId(e.target.value)}
                    />
                    
                <button className="btn btn-success">Add</button>
            </form>
        </Fragment>
        
    )
}

export default AddClub;