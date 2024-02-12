 import React, { useState } from "react";
import'./Home.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './/card.css';
import Offcanvas from "react-bootstrap/Offcanvas"; 
import logo from '../image/logo.png'
import { allproduct } from "./Allproduct";
import AppBar from "./AppBar1";
import logo2 from '../image/logo2.png';
import'./Menu.css'
import NewFooter from './NewFooter'

import Slide from "./Slide.jsx";
import SimpleSlider from "./Recent.jsx";

const Home = () => {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(true);
  };
  const handleClose = () => {
    setShow(false);
  };
  return (
    <>
    <div className='q' style={{color:"lightgrey",backgroundColor:"rgb(19, 17, 17)"}}>
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


<img src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1688127795/Croma%20Assets/CMS/PCP/June%20-2023/30-06-2023/Laptop%20PCP/Desktop/Main%20Banner/PCP_LP_NC_16May2023_wc0ksd.png?tr=w-2048"  style={{width:"100%",height:"50vh"}}/>
<div className="text">
<b>Laptops That Bring Out the Best In You</b><br/>
While tablets and smartphones are still popular, most people agree that everything, from doing research for an assignment to playing hardcore games, works better on a laptop. It doesn't matter what your lifestyle is, there is always one for you at Croma.
<br/><br/>
<SimpleSlider/>
<br/>


<b><h1>Latest Laptops For You</h1></b>
<div>
<img src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1699431751/Croma%20Assets/CMS/PCP/Laptop/08-11-2023/pcp_2split_LP_Macbook_8Nov2023_uvior2.png?tr=w-1024" style={{width:"500px",marginRight:"100px",marginBottom:"20px"}}></img>
<img src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1705918552/Croma%20Assets/CMS/New%20at%20croma/HP%20Spectre/pcp_2split_HP_22Jan24_egmejl.png?tr=w-1024"  style={{width:"500px",marginBottom:"20px"}}></img>
</div>
<img src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1699431752/Croma%20Assets/CMS/PCP/Laptop/08-11-2023/PCP_4Split_Newatcroma_Laptop_Corei5_8Nov2023_wtf0cw.png?tr=w-1024" style={{width:"250px",marginRight:"32px"}}></img>
<img src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1699431759/Croma%20Assets/CMS/PCP/Laptop/08-11-2023/PCP_4Split_Newatcroma_Laptop_HP12Gen_8Nov2023_yjobie.png?tr=w-1024" style={{width:"250px",marginRight:"32px"}}></img>
<img src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1699431758/Croma%20Assets/CMS/PCP/Laptop/08-11-2023/PCP_4Split_Newatcroma_Laptop_Dell_8Nov2023_rmrwul.png?tr=w-1024" style={{width:"250px",marginRight:"32px"}}></img>
<img src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1699431759/Croma%20Assets/CMS/PCP/Laptop/08-11-2023/PCP_4Split_Newatcroma_Laptop_HPAMD_8Nov2023_wjeymz.png?tr=w-1024" style={{width:"250px",marginRight:"32px"}}></img>
<div>
  <img src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1700056295/Croma%20Assets/CMS/LP%20Page%20Banners/2023/Unidays/15th%20Nov%202023/Unidays%20Laptop%20PCP/LP_Singlesplit_Uniday_FOD_15Nov23_yuvw3l.jpg?tr=w-1024" style={{width:"1100px"}}></img>
</div>

<b><h1>Hot Deals in Apple</h1></b>
<img src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1698404079/Croma%20Assets/CMS/LP%20Page%20Banners/PCP/PCP_2Split_Macbooks_M1_27Oct2023_d4vshw.png?tr=w-1024" style={{width:"500px",marginRight:"100px",marginBottom:"20px"}}></img>
<img src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1700484672/Croma%20Assets/CMS/PCP/Laptop/20-11-2023/PCP_2Split_Macbooks_20Nov2023_w8wtde.png?tr=w-1024" style={{width:"500px",marginBottom:"20px"}}></img>

<div style={{backgroundColor:"black"}}>
<b><h1>Top Deals For Students</h1></b>
<SimpleSlider/>
<br/>
</div>
<br/>
<b><h1>Best Offers for Professionals</h1></b>
<SimpleSlider/>

<b><h1>Great Deals on Gaming Laptops</h1></b>
<SimpleSlider/>




</div>
<NewFooter/>
</div>
 </>
  )
}

export default Home;














// import React, { useState } from "react";
// import toolslogo from "../images/toolslogo.png";
// import { Link } from "react-router-dom";
// import { FaUser } from "react-icons/fa6";
// import { TiShoppingCart } from "react-icons/ti";
// import "./Header.css";
// import Offcanvas from "react-bootstrap/Offcanvas";
// import product1 from "../images/product1.jpg";

// const Header = () => {
//   const [showMenu, setShowMenu] = useState(false);
//   const handelShowMenu = () => {
//     setShowMenu((preve) => !preve);
//   };
//   const [show, setShow] = useState(false);

//   const handleShow = () => {
//     setShow(true);
//   };
//   const handleClose = () => {
//     setShow(false);
//   };
//   return (
//     <header className="fixed shadow-md w-full h-16 px-2 mt-0 md:px-4 z-50 bg-white">
//       {/*desktop*/}
//       <div className="flex items-center h-full justify-between">
//         <Link to={""}>
//           <div className="h-10">
//             <img src={toolslogo} className="h-full"></img>
//           </div>
//         </Link>

//         <div className="flex item-center gap-4 md:gap-7">
//           <nav className="flex gap-4 md:gap-6 text-base md:text-lg">
//             <Link to={""} className="text-[#00df9a] no-underline">
//               Home
//             </Link>
//             <Link to={"menu"} className="text-[#00df9a] no-underline">
//               Menu
//             </Link>
//             <Link to={"about"} className="text-[#00df9a] no-underline">
//               About
//             </Link>
//             <Link to={"contact"} className="text-[#00df9a] no-underline">
//               Contact
//             </Link>
//           </nav>
//           <div>
//             <div className="text-slate-600 relative  cursor-pointer">
//               <TiShoppingCart
//                 style={{ height: "35px", width: "35px" }}
//                 onClick={handleShow}
//               />
//               <div className="absolute top-0 right-0 text-white bg-red-500 h-4 w-4 rounded-full text-sm text-center">
//                 0
//               </div>
//               <Offcanvas
//                 show={show}
//                 onHide={handleClose}
//                 placement="end"
//                 scroll={true}
//               >
//                 <Offcanvas.Header closeButton>
//                   <Offcanvas.Title>YOUR CART</Offcanvas.Title>
//                 </Offcanvas.Header>
//                 <Offcanvas.Body>
                 
//                 </Offcanvas.Body>
//               </Offcanvas>
//             </div>
//           </div>
//           <div
//             className="text-4xl text-slate-600 cursor-pointer"
//             onClick={handelShowMenu}
//           >
//             <div className="border-2 border-solid border-slate-600 p-1 rounded-full ">
//               <FaUser />
//             </div>
//             {showMenu && (
//               <div className="absolute right-2 bg-white py-3 px-3 shadow drop-shadow-md text-sm flex flex-col">
//                 <Link
//                   to={"newproduct"}
//                   className="whitespace-norap cursor-pointer"
//                 >
//                   NewProduct
//                 </Link>
//                 <Link to={"login"} className="whitespace-norap cursor-pointer">
//                   Log in
//                 </Link>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };
// export default Header;