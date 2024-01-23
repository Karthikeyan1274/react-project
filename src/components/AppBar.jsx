import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo2 from '../image/logo2.png';
import'.//AppBar.css';
function AppBar() {
  return (
    <>
    
   
      
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
            <Nav.Link href="/Home" style={{color:"white"}}>Home</Nav.Link>
            <Nav.Link href="/Menu"  style={{color:"white"}}>Menu</Nav.Link>
            <Nav.Link href="/Login"  style={{color:"white"}}>Account</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

     
    </>

    
  );
}

export default AppBar;
