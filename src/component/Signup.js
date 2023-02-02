import React from "react";
import { useState } from "react";
import './CSS/signup.css';
function Signup() {
    const [username, setusername] = useState('')
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [confirmpassword, setconfirmpassword] = useState('')


    const handleInputChange1 = (event) => {
        setusername(event.target.value);
        console.log(username);
    };
    const handleInputChange2 = (event) => {
        setemail(event.target.value);
        console.log(email)
    };
    const handleInputChange3 = (event) => {
        setpassword(event.target.value);
        console.log(password)
    };
    const handleInputChange4 = (event) => {
        setconfirmpassword(event.target.value);
        console.log(confirmpassword)
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        const json = {
            "username": username,
            "email": email,
            "password": password,
            "confirmpassword": confirmpassword
        }
        console.log(json)
    }
    return (
        <div class="signup">

            <div class="ultimate">
                <div class="sign-head">
                    <h1 class="name">Signup</h1>
                </div>
                <div class="main-signup">
                    <div class="signup-cnt">
                        <form onSubmit={handleSubmit}>
                            <div class="mb-3">
                                <label for="exampleInputText" class="form-label" placeholder="Enter username">Username</label>
                                <input type="text" class="form-control" id="exampleInputText1" value={username} onChange={handleInputChange1} name="username" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label" placeholder="Enter Email">Email address</label>
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={email} onChange={handleInputChange2} name="email" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputPassword1" class="form-label" placeholder="Enter Enter password">Password</label>
                                <input type="password" class="form-control" id="exampleInputPassword1" value={password} onChange={handleInputChange3} name="password" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputPassword1" class="form-label" placeholder="confirm password">Confirm Password</label>
                                <input type="password" class="form-control" id="exampleInputPassword1" value={confirmpassword} onChange={handleInputChange4} name="confirmpassword" />
                            </div>
                            <button type="submit" class="btn btn-primary">Signup</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Signup;