import React from 'react'
import Nav from 'react-bootstrap/Nav';
import logo from '../image/logo.png';
const CreateAccount = () => {
  return (
    <>
    <div className='llo'>
    <center><img src={logo} className='logo'></img>
    
    <div class="form-container justify-content-center">
      
    <p class="title">Create Account</p>
    <form class="form" required>
      <input type="email" class="input1" placeholder="Email"></input>
      <input type="password" class="input1" placeholder="Password"></input>
      <input type="password" class="input1" placeholder="Confirm Password"></input>
      <p class="page-link">
        <span class="page-link-label">Forgot Password?</span>
      </p>
      <button class="form-btn">Create</button>
    </form>
    <p class="sign-up-label">
      Have an account?<span class="sign-up-link"> <Nav.Link href="/Login">Sign in</Nav.Link></span>
    </p>
  
    </div>
    </center></div>
  </>
  )
}

export default CreateAccount
