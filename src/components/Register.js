import React, {Fragment, useState} from "react";

const Register = () => {


    const [username, setUsername] = useState("");
    const [email_id, setEmail] = useState("");
    const [user_password, setPassword] = useState("");
    const [phone_no, setPhoneNo] = useState("");
    const [display_name, setDisplayName] = useState("");
    const [rid, setRid] = useState("");
    
    const onSubmitForm = async e => {
        e.preventDefault();
        try {
           
            const body ={username, email_id, user_password, phone_no, display_name, rid};
            const response = fetch("http://localhost:5000/campusclubs/user/add",{
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
            <h1 className="text-center mt-5">Campus Clubs</h1>
            <h2 className="text-center mt-5">Signup to stay updated with campus activities!</h2>
            <form onSubmit={onSubmitForm}>
                <text>Username:</text>
                <input type="text" className="form-control" 
                    value = {username}
                    onChange = {e => setUsername(e.target.value)}
                    />
                    <text>Email:</text>
                    <input type="text" className="form-control" 
                    value = {email_id}
                    onChange = {e => setEmail(e.target.value)}
                    />
                  <text>Password:</text>
                    <input type="text" className="form-control" 
                    value = {user_password}
                    onChange = {e => setPassword(e.target.value)}
                    />
                    <text>Phone Number:</text>
                    <input type="text" className="form-control" 
                    value = {phone_no}
                    onChange = {e => setPhoneNo(e.target.value)}
                    />
                    <text>Full Name:</text>
                    <input type="text" className="form-control" 
                    value = {display_name}
                    onChange = {e => setDisplayName(e.target.value)}
                    />
                    <text>Role:(1:student, 2:clubhead, 3:admin)</text>
                    <input type="text" className="form-control" 
                    value = {rid}
                    onChange = {e => setRid(e.target.value)}
                    />
                <button className="btn btn-success">Register</button>
            </form>
        </Fragment>
        
    )
}

export default Register;