import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo2 from '../image/logo2.png';
import'.//AppBar1.css';
function AppBar() {
  return (
    <>
   
   
      
      <Navbar bg="black" data-bs-theme="rgb(19, 17, 17)">
      <div className='app1'>
        
       <hr />
          <Nav>
            <Nav.Link href="/Home" style={{color:"white"}}><div className="animated"><span>Usage</span></div></Nav.Link>
            <Nav.Link href="/Menu"  style={{color:"white"}}><div className="animated"><span>Operating System</span></div></Nav.Link>
            <Nav.Link href="/Login"  style={{color:"white"}}><div className="animated"><span>Processors</span></div></Nav.Link>
            <Nav.Link href="/Home" style={{color:"white"}}><div className="animated"><span>Ram</span></div></Nav.Link>
            <Nav.Link href="/Menu"  style={{color:"white"}}><div className="animated"><span>Storage</span></div></Nav.Link>
            <Nav.Link href="/Login"  style={{color:"white"}}><div className="animated"><span>Graphics</span></div></Nav.Link>
          </Nav>
          <hr />
        
          </div>
       
      </Navbar>

     
    </>

    
  );
}

export default AppBar;
