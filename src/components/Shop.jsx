import React from 'react'
import './/TopBrands.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { allproduct } from "./Allproduct";
import logo2 from '../image/logo2.png';

import AppBar from './AppBar';
const Shop = () => {
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
            <Nav.Link href="/Home" style={{color:"white"}}>Menu</Nav.Link>
            <Nav.Link href="/Shop"  style={{color:"white"}}>Shop</Nav.Link>
            <Nav.Link href="/Login"  style={{color:"white"}}>Account</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
       <div className='view1'>
{allproduct.map((a,index)=>(
<div class="card5" style={{margin:"10px"}}>
<div class="header">
<img src={a.url}  className='sss'></img>
</div>
<p class="message">
{a.name}
</p>
<div class="actions">
<a class="read" href="">
Take a Look
</a>
<a class="mark-as-read" href="/View">
VIEW
</a>
</div>
 
</div>
 ))
}
</div>
<b><h1>Your Laptop, Your Use</h1></b>
<img src='https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1688127794/Croma%20Assets/CMS/PCP/June%20-2023/30-06-2023/Laptop%20PCP/Desktop/Your%20laptop%20Your%20use/PCP_4split_LP_NC_Uses_Gaming_16May2023_albe3u.png?tr=w-720'style={{width:"220px",marginLeft:"20px"}}/>
<img src='https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1688127794/Croma%20Assets/CMS/PCP/June%20-2023/30-06-2023/Laptop%20PCP/Desktop/Your%20laptop%20Your%20use/PCP_4split_LP_NC_Uses_Entertainment_16May2023_nxyxlu.png?tr=w-720'style={{width:"220px",marginLeft:"20px"}}/>
<img src='https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1688127794/Croma%20Assets/CMS/PCP/June%20-2023/30-06-2023/Laptop%20PCP/Desktop/Your%20laptop%20Your%20use/PCP_4split_LP_NC_Uses_CC_16May2023_gwlxlt.png?tr=w-720'style={{width:"220px",marginLeft:"20px"}}/>
<img src='https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1698229079/Croma%20Assets/CMS/PCP/Oct-2023/25-10-2023/Laptop%20PCP%20Your%20Laptop%2C%20Your%20Use/Desktop/pcp_laptops_EverydayUse_25Oct2023_fs1cn1.png?tr=w-720'style={{width:"220px",marginLeft:"20px"}}/>
<img src='https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1688127795/Croma%20Assets/CMS/PCP/June%20-2023/30-06-2023/Laptop%20PCP/Desktop/Your%20laptop%20Your%20use/pcp_laptops_OfficeUse_16May2023_a9fklu.png?tr=w-720'style={{width:"220px",marginLeft:"20px"}}/>
<img src='https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1698229080/Croma%20Assets/CMS/PCP/Oct-2023/25-10-2023/Laptop%20PCP%20Your%20Laptop%2C%20Your%20Use/Desktop/pcp_laptops_Studies_25Oct2023_qa7x0a.png?tr=w-720'style={{width:"220px",marginLeft:"20px"}}/>
<b><h1>For Your Budget</h1></b>
<img src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1688127791/Croma%20Assets/CMS/PCP/June%20-2023/30-06-2023/Laptop%20PCP/Desktop/Budget/pcp_budget_Below30_16May2023_hp2unw.png?tr=w-720" style={{width:"220px",marginLeft:"20px"}}/>
<img src='https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1688127789/Croma%20Assets/CMS/PCP/June%20-2023/30-06-2023/Laptop%20PCP/Desktop/Budget/pcp_budget_30-50_16May2023_xzlg6o.png?tr=w-720' style={{width:"220px",marginLeft:"20px"}}/>
<img src='https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1688127789/Croma%20Assets/CMS/PCP/June%20-2023/30-06-2023/Laptop%20PCP/Desktop/Budget/pcp_budget_50-75_16May2023_fg0076.png?tr=w-720' style={{width:"220px",marginLeft:"20px"}}/>
<img src='https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1688127790/Croma%20Assets/CMS/PCP/June%20-2023/30-06-2023/Laptop%20PCP/Desktop/Budget/pcp_budget_75-100_16May2023_rc4ujc.png?tr=w-720' style={{width:"220px",marginLeft:"20px"}}/>
<img src='https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1688127789/Croma%20Assets/CMS/PCP/June%20-2023/30-06-2023/Laptop%20PCP/Desktop/Budget/pcp_budget_100-200_16May2023_rhidob.png?tr=w-720' style={{width:"220px",marginLeft:"20px"}}/>
<img src='https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1688127791/Croma%20Assets/CMS/PCP/June%20-2023/30-06-2023/Laptop%20PCP/Desktop/Budget/pcp_budget_Above200_16May2023_nfvc99.png?tr=w-720' style={{width:"220px",marginLeft:"20px"}}/>
<b><h1>Pick Your Laptop Brand</h1></b>
<img src='https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1669725087/Croma%20Assets/CMS/CAtegory/Laptop%20PCP%2020/2911/pcp_hoponthebrand_apple_29nov2022_pmysiv.png?tr=w-720'style={{width:"220px",marginLeft:"20px"}}/>
<img src='https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1669725088/Croma%20Assets/CMS/CAtegory/Laptop%20PCP%2020/2911/pcp_hoponthebrand_asus_29nov2022_r7llux.png?tr=w-720'style={{width:"220px",marginLeft:"20px"}}/>
<img src='https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1669725088/Croma%20Assets/CMS/CAtegory/Laptop%20PCP%2020/2911/pcp_hoponthebrand_lenovo_29nov2022_sajwxt.png?tr=w-720'style={{width:"220px",marginLeft:"20px"}}/>
<img src='https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1669725088/Croma%20Assets/CMS/CAtegory/Laptop%20PCP%2020/2911/pcp_hoponthebrand_dell_29nov2022_blrx8n.png?tr=w-720'style={{width:"220px",marginLeft:"20px"}}/>
<img src='https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1669725088/Croma%20Assets/CMS/CAtegory/Laptop%20PCP%2020/2911/pcp_hoponthebrand_HP_29nov2022_sgadrn.png?tr=w-720'style={{width:"220px",marginLeft:"20px"}}/>
<img src='https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1669725087/Croma%20Assets/CMS/CAtegory/Laptop%20PCP%2020/2911/pcp_hoponthebrand_acer_29nov2022_yc9687.png?tr=w-720'style={{width:"220px",marginLeft:"20px"}}/>
<img src='https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1669725089/Croma%20Assets/CMS/CAtegory/Laptop%20PCP%2020/2911/pcp_hoponthebrand_microsoft_29nov2022_t32atm.png?tr=w-720'style={{width:"220px",marginLeft:"20px"}}/>
<img src='https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1669725088/Croma%20Assets/CMS/CAtegory/Laptop%20PCP%2020/2911/pcp_hoponthebrand_fujitsu_29nov2022_nlkj42.png?tr=w-720'style={{width:"220px",marginLeft:"20px"}}/>
    </div>
    </>
  )
}

export default Shop
