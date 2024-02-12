import React from 'react'
import logo2 from '../image/logo2.png';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NewFooter from './NewFooter';
import'./Menu.css'
import CustomizedAccordions from './Lapacc'
const View = () => {
  return (
    <>
    <div style={{color:"lightgrey",backgroundColor:"rgb(19, 17, 17)"}}>
       <Navbar bg="black" data-bs-theme="black">
        <Container>
          <Navbar.Brand href="#home"><img src={logo2} className='logo'></img></Navbar.Brand>
          <div class="group">
  <svg viewBox="0 0 24 24" aria-hidden="true" class="icon">
    <g>
      <path
        d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"
      ></path>
    </g>
  </svg>
  <input class="input" type="search" placeholder="What are you looking for ?" />
</div>

          <Nav className="justify-content-end">
            <Nav.Link href="/Menu" style={{color:"white"}}>Home</Nav.Link>
            
            <Nav.Link href="/Shop"  style={{color:"white"}}>Shop</Nav.Link>
            <Nav.Link href="/Login"  style={{color:"white"}}>Account</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    
    
 <div className='text10'>
<div className='text8'> <img src="https://m.media-amazon.com/images/I/518BYF8LHRL._AC_UY218_.jpg"  width={600} height={400} style={{marginLeft:"150px"}}/></div>
<div className='text7'>
 <div className='text2' style={{marginTop:"100px"}}><div className='text4'style={{marginLeft:'10px',marginTop:"0px"}}><b>Laptop Name</b>​<br/>Laptop Descreption<br/>Price:$100000000000000<br/>⭐⭐⭐⭐</div><button>Add to Cart</button> <button>BUY</button></div>
</div></div>
<br/>
<CustomizedAccordions/> 
    <NewFooter/>
    </div>
    </>
  )
}

export default View
