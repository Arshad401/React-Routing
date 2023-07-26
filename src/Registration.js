import React from 'react'
import { useNavigate } from 'react-router-dom';

function Registration() {
    const navigate=useNavigate()
  return (
    <div className="form-container">
    <h2>Registration</h2>
    <form >
        <label >Username:</label>
        <input type="text" id="reg_username" name="reg_username"/>

        <label>Email:</label>
        <input type="email" id="email" name="email"/>

        <label>Password:</label>
        <input type="password" id="reg_password" name="reg_password"/>

        <button type="submit" onClick={()=>{navigate('/login')}}>Register</button>
    </form>
</div>
  );
};

export default Registration
