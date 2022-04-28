import React, {Fragment, Card, Button, useState, useEffect} from "react";
import { useLocation, useNavigate , Link} from "react-router-dom";

const NewPost = () => {
    const location = useLocation();
    const club_id = location.state.clubId;
    const clubName = location.state.clubName;

    const [post_id, setPostId] = useState("");
    const [title, setTitle] = useState("");
    const [post_body, setBody] = useState("");
    const [last_updated, setLastUpdated] = useState("");
    const [urgency, setUrgency] = useState(0);
    const [media_link, setMediaLink] = useState("");
    //TODO: add tag
    //const [club_id, setRid] = useState("");

    const navigate = useNavigate();
   const toClub = (clubId, clubName) => navigate('/clubeditable', 
     { state: { clubId : clubId , clubName: clubName} }
    );
    const onSubmitForm = async e => {
        e.preventDefault();
        try {
           
            const body ={post_id, title, post_body, last_updated, urgency, media_link, club_id};
            const response = fetch("http://localhost:5000/campusclubs/post/add",{
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            });
            toClub(club_id, clubName);

            console.log(response);
        } catch (error) {
            console.error(error.message);
        }
    };
     
    return(
        <Fragment>

            <h2 className="text-center mt-5">Create new post for club {clubName}</h2>
            <form onSubmit={onSubmitForm}>
                <text>Post Id:</text>
                <input type="text" className="form-control" 
                    value = {post_id}
                    onChange = {e => setPostId(e.target.value)}
                    />
                <text>Title:</text>
                <input type="text" className="form-control" 
                    value = {title}
                    onChange = {e => setTitle(e.target.value)}
                    />
                    <text>Body:</text>
                    <input type="text" className="form-control" 
                    value = {post_body}
                    onChange = {e => setBody(e.target.value)}
                    />
                  <text>Date of post:</text>
                    <input type="text" className="form-control" 
                    value = {last_updated}
                    onChange = {e => setLastUpdated(e.target.value)}
                    />
                    <text>Urgency (enter 1 for urgent 0 otherwise):</text>
                    <input type="text" className="form-control" 
                    value = {urgency}
                    onChange = {e => setUrgency(e.target.value)}
                    />
                    <text>Add any link to relevant media:</text>
                    <input type="text" className="form-control" 
                    value = {media_link}
                    onChange = {e => setMediaLink(e.target.value)}
                    />
                    
                <button className="btn btn-success">Create post</button>
            </form>
        </Fragment>
        
    )

}

export default NewPost;