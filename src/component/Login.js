import React, { useState } from "react";
import './CSS/login.css';
function Login() {
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')
  const handleInputChange1 = (event) => {
    setemail(event.target.value);
    console.log(email)
  };
  const handleInputChange2 = (event) => {
    setpassword(event.target.value);
    console.log(password)
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const json = {
      "email": email,
      "password": password
    };
    console.log(json)
  };
  return (
    <div class="login">
      <div class="ultimate">
        <div class="login-head">
          <h1 class="name">Login</h1>
        </div>
        <div class="main-login">
          <div class="login-cnt">
            <div className="form-head">
            </div>
            <form onSubmit={handleSubmit}>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label" placeholder="Enter Email">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={email} onChange={handleInputChange1} name="email" />
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label" placeholder="Enter Password">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1" value={password} onChange={handleInputChange2} name="password" />
              </div>
              <div class="mb-3">
                <a href="#" >Forgot password ?</a>
              </div>
              <div class="mb-3">
                <button type="submit" class="btn btn-primary">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );

};
export default Login;