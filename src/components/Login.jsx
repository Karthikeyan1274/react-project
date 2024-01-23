import React from 'react'
import'./Login.css';
import Nav from 'react-bootstrap/Nav';
import logo from '../image/logo.png';
import  { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const history = useNavigate();
  // State variables to store the username, password, and login status
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setLoggedIn] = useState(false);

  // Function to handle username input change
  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  // Function to handle password input change
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  // Function to handle form submission
  const handleLogin = (e) => {
    e.preventDefault();

    // You can add your own logic to validate the login credentials
    // For simplicity, let's assume a hardcoded username and password
    const validUsername = 'user';
    const validPassword = 'pass';

    if (username === "Karthi" && password === "Karthi") {
      // If credentials are valid, set the login status to true
      setLoggedIn(true);
      
    } else {
      // If credentials are invalid, display an error message
      alert('Invalid credentials. Please try again.');
    }
     history('/Home')
  };

  return (
    <>
    <div className='llo'>
    <center><img src={logo} className='logo'></img>
    
    <div class="form-container justify-content-center">
      
    <p class="title">Sign in</p>
    <form class="form" onSubmit={handleLogin}>
      <input type="text" class="input1" placeholder="Email"  value={username} onChange={handleUsernameChange}></input>
      <input type="text" class="input1" placeholder="Password" value={password} onChange={handlePasswordChange}></input>
      <p class="page-link">
        <span class="page-link-label">Forgot Password?</span>
      </p>
      <button class="form-btn">Sign in</button>
    </form>
    <p class="sign-up-label">
      Don't have an account?<span class="sign-up-link"><Nav.Link href="/CreateAccount">Create Account</Nav.Link></span>
    </p>
  
    </div>

    
    </center></div>
  </>
  )
};

export default LoginForm;
