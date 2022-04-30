import React, {Fragment, useState, useEffect} from "react";
import { useLocation , useNavigate, Link} from "react-router-dom";

const ClubEditableComponent = () =>{

    useEffect(()=>{
        getPosts();
    }, [])
    const location = useLocation();
   const clubId = location.state.clubId;
   const clubName = location.state.clubName;
   const [deleteId, setDeleteId] = useState("");

   const navigate = useNavigate();
   const toNewPost = (clubId, clubName) => navigate('/newpost', 
     { state: { clubId : clubId , clubName: clubName} }
    );


   const [posts, setPosts ] = useState([]);
   const getPosts = async e => {
    try {
        //get posts for club
        
        const response = await fetch(`http://localhost:5000/campusclubs/post/getclubposts/${clubId}`);
        const jsonData = await response.json();
    
        console.log(jsonData.rows);
        setPosts(jsonData.rows);
    
     } catch (error) {
         console.error(error.message);
    }
   }
   

   //delete post

   const deletePost = async (id) => {
    console.log("deleteeeeeeee");
  try {
    const deletePost = await fetch(`http://localhost:5000/campusclubs/post/delete/${id}`,{
      method: "DELETE" 
    });
    setPosts(posts.filter(posts => posts.post_id != id));
    console.log(deletePost);

  } catch (err) {
    console.error(err.message)
  }
}
 

   
   

    return(
        <Fragment>
                <h1 className="text-center mt-5">{clubName}</h1>
                <button className="btn btn-success" onClick = {() => toNewPost(clubId, clubName)} >Create new post</button>
                <div class ="container">
                
                <ul class="list-group">
                    <li class="list-group-item list-group-item-dark">
                        {posts.map(post =>(
                            <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">{post.title}</h5>
                                <p class="card-text">{post.body}</p>
                                <p class="card-text">Attached media: <i>{post.media_link}</i></p>
                                <button className="btn btn-lg btn-danger" onClick = {()=> deletePost(post.post_id)} >Delete Post</button>
                            </div>
                            </div>
                        ))}
                    </li>
                </ul>
                </div>
        </Fragment>
    );
}

export default ClubEditableComponent;