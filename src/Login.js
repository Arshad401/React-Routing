import React from "react";
import { useNavigate } from "react-router-dom";

function Login() {
    const navigate=useNavigate()
  return (
    <div className="container">
      <div className="form-container">
        <h2>Login</h2>
        <form>
          <label>Username:</label>
          <input type="text" id="username" name="username" />

          <label>Password:</label>
          <input type="password" id="password" name="password" />

          <button type="submit" onClick={()=>{navigate("/home")}}>Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
