import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import{Row,Col} from 'react-bootstrap'
import TopSaleCard from './TopSaleCard'
import TopBrands from './TopBrands'
import './/card.css'; 
import Review from './Review'
import './Menu.css'

import NewFooter from './NewFooter'
import Some from './Some'
import SimpleSlider from './Recent'
import AppBar1 from './AppBar1'
import CustomizedAccordions from './acc'

const Menu = () => {
    
  return (
    <div className='q' style={{color:"lightgrey",backgroundColor:"rgb(19, 17, 17)"}}>
   
    <img src="https://yellowslice.us/projs/SBG-Dark-02/assets/images/banner-3.png" style={{width:"100%",height:"50vh"}}></img>

   <div className='text'> <p><b>Laptops that Simplify Your Work</b><br/>
Laptops are compact enough to take with you, yet powerful enough to run heavy applications. With so many options in the market, it becomes difficult to choose the one with the right specification. Here is ou<br />
<b>What are the Factors to Consider Before Buying a Laptop?</b></p>
</div>
<AppBar1/>
<div className='text'><b>We’ve Got a Laptop for Every Use!</b></div>
<div className='text1'>
<button> I'M READY</button>
<button> I'M READY</button>
<button> I'M READY</button>
<button> I'M READY</button>
<button> I'M READY</button>
</div>
<div className='text2'><i class="bi bi-person-fill"></i><div className='text4'style={{marginLeft:'10px'}}>Key Usage: <br />Web browsing, creating documents, watching movies, listening to music.</div></div>
<div className='text2'><i class="bi bi-laptop"></i><div className='text4' style={{marginLeft:'10px'}}>Ideal Screen Size: 12” to 15.6”</div></div>
<div className='text2'><i class="bi bi-cpu"></i><div className='text4' style={{marginLeft:'10px'}}>RAM: 4GB RAM or higher</div></div>
<div className='text5'><img src="https://yellowslice.us/projs/SBG-Dark-02/assets/images/laptop/for-everday-use.png" width={750}></img></div>
<div className='text'><b>Keep Your Productivity Soaring with the Right OS</b><br />
An Operating System (OS) is a system software that helps devices such as mobile phones, tablets, and computers to run applications and programs. Laptops run on three major operating systems today: macOS, Windows, and ChromeOS<br /><br /></div>
<div className='text1'>
<button> I'M READY</button>
<button> I'M READY</button>
<button> I'M READY</button>
</div>
<div className='text6'><img src='https://yellowslice.us/projs/SBG-Dark-02/assets/images/laptop/macOS.png' width={500} height={400}></img>
<ul style={{marginTop:"100px"}}>
  <li>✨Exclusive to Apple computers, the macOS interface is very user-friendly</li><br />
  <li>✨Good if you have other Apple devices such as iPhone, iPad, and Apple Watch.</li><br />
  <li>✨MacBook Air Series – Good for basic use such as web browsing, email checking, doc files, and basic editing and graphic work</li><br />
  <li>✨MacBook Pro Series – Ideal for heavy apps, editing, designing and so on.</li>
</ul>

</div>
<div className='text6'><img src='https://yellowslice.us/projs/SBG-Dark-02/assets/images/laptop/processors.jpg' width={421} height={400} />
<p style={{marginTop:"100px"}}><b>Processor</b><br />Simply put, a processor is what provides the power your computer needs to carry out the various functions. The more powerful your processor, the faster is your computer.</p>
</div>
<div className='q'>
{/* <BasicExample/> */}
<CustomizedAccordions/> 
</div>
<div className='text'>
<div className='text10'>
<div className='text7'>
  <b>RAM</b><br/>
  RAM or Random-Access Memory stores all the information a computer needs to run smoothly in that session. Simply put if you’re running multiple programs on your system simultaneously, you will need more RAM to support them. Laptop with good RAM and storage will keep you sorted for at least five years.<br/>
  <div className='text2'><i class="bi bi-cpu"></i><div className='text4'style={{marginLeft:'10px'}}>4GB<br/>Best suited for browsing the web and updating social media.</div></div>
  <div className='text2'><i class="bi bi-cpu"></i><div className='text4'style={{marginLeft:'10px'}}>8GB<br/>Best suited for creating spreadsheets, working on presentations, basic gaming, and watching movies on OTT.</div></div>
  <div className='text2'><i class="bi bi-cpu"></i><div className='text4'style={{marginLeft:'10px'}}>16GB<br/>Best suited for streaming HD movies, basic photo editing, basic video editing, and gaming.</div></div>
  <div className='text2'><i class="bi bi-cpu"></i><div className='text4'style={{marginLeft:'10px'}}>32GB<br/>Best suited for graphic designing, professional photo editing, professional video editing, music production, gaming enthusiast and CAD design.</div></div>
 </div>

<div className='text8'> <img src="https://yellowslice.us/projs/SBG-Dark-02/assets/images/laptop/ram.jpg"  width={600} height={620}/></div>
 
</div>
  </div>
<div className='text' style={{marginTop:"20px"}}><b>Create a Space for Everything You Need</b><br/>
Storage or ROM refers to the amount of space your Laptop has for software, documents, etc. It’s important to note that a part of the storage also goes to the operating system and hence you may have a bit less storage than what is advertised for the machine.<br/><br/></div>
<div className='text10'>
<div className='text8'> <img src="https://yellowslice.us/projs/SBG-Dark-02/assets/images/laptop/stoarage.jpg"  width={600} height={400} style={{marginLeft:"150px"}}/></div>
<div className='text7'>
 
  <div className='text2'><i class="bi bi-device-hdd"></i><div className='text4'style={{marginLeft:'10px',marginTop:"30px"}}>HDD<br/>✨A hard disk drive (HDD) is the most common storage type and is available in various capacities.<br/>
  ✨Good if you want to save a lot of films, music, and other large files. Look for a Laptop with at least a 1TB hard drive.</div></div>
  <div className='text2'><i class="bi bi-hdd"></i><div className='text4'style={{marginLeft:'10px',marginTop:"30px"}}>SSD<br/>✨A solid-state drive (SSD) may be a better option than HDD as it is much faster, meaning faster boot and loading times.<br/>
  ✨Good if you want to save more graphic files, video files, games, and multiple heavy-duty programs.</div></div>
  
 </div>

 
</div>
<div className='text'>
<div className='text10' style={{marginTop:"20px"}}>
<div className='text7' style={{marginTop:"100px"}}>
  <b>Graphics</b><br/>
  <br/>
  <div className='text2'><i class="bi bi-gpu-card"></i><div className='text4'style={{marginLeft:'10px'}}>Graphic processor offloads many display and multimedia-related functions from the CPU such as watching HD videos and viewing photos. It is a dedicated processor to just work on an improve visuals on the device, hence not loading the main processor with the same.</div></div>
  
 </div>

<div className='text8'> <img src="https://yellowslice.us/projs/SBG-Dark-02/assets/images/laptop/graphics.png"  width={600} height={400}/></div>
 
</div>
  </div>

  <div className='text10'>
<div className='text8'> <img src="https://yellowslice.us/projs/SBG-Dark-02/assets/images/laptop/integrated-graphics.png"  width={600} height={400} style={{marginLeft:"150px"}}/></div>
<div className='text7' style={{marginLeft:"20px",marginTop:"80px"}}><b>Integrated Graphics</b><br/>
  <div className='text2'><i class="bi bi-nvidia"></i><div className='text4'style={{marginLeft:'10px',marginTop:"30px"}}>Refers to the chip that is in-built to the processor itself and shares Laptop RAM and processing power to deliver what you see on the screen.

Ideal for everyday use such as browsing the internet, watching videos, and so on.</div></div>
 
  
 </div>

 
</div>

<div className='text'>
<div className='text10' style={{marginTop:"20px"}}>
<div className='text7' style={{marginTop:"100px"}}>
  <b>Dedicated Graphics</b><br/>
  <br/>
  <div className='text2'><i class="bi bi-gpu-card"></i><div className='text4'style={{marginLeft:'10px'}}>Refers to the one where the Laptop has its own dedicated graphics chip and RAM which enables it to perform significantly faster.

Ideal for gaming, video editing, rendering or design work.</div></div>
  
 </div>

<div className='text8'> <img src="https://yellowslice.us/projs/SBG-Dark-02/assets/images/laptop/dedicated-graphics.png"  width={600} height={400}/></div>
 
</div>
  </div>

  <div className='text'>
<div className='text10' style={{marginTop:"20px"}}>
<div className='text7' style={{marginTop:"100px"}}>
  <b>Screen Size</b><br/>Like big screens or prefer something stylish? You can buy either, depending on what you want to use it for.
  <br/>
  <div className='text2'><i class="bi bi-arrows-fullscreen"></i><div className='text4'style={{marginLeft:'10px'}}>11-13 inchSmaller and compact. Ideal for traveling professionals and students.</div></div>
  <div className='text2'><i class="bi bi-arrows-fullscreen"></i><div className='text4'style={{marginLeft:'10px'}}>14-16 inchThe most popularscreen size because of the portability and usability. Ideal for professionals, students, entry level gamers, and movie lovers.</div></div>
  <div className='text2'><i class="bi bi-arrows-fullscreen"></i><div className='text4'style={{marginLeft:'10px'}}>17-19 inchThis screen size is larger and weighs heavier. Ideal for high-end gamers, graphic designers, illustrators, and editors.</div></div>
 </div>

<div className='text8'> <img src="https://yellowslice.us/projs/SBG-Dark-02/assets/images/laptop/screen-size.jpg"  width={600} height={500}/></div>
 
</div>
  </div>

  <div className='text'>
<div className='text10' style={{marginTop:"20px"}}>
<div className='text7' style={{marginTop:"100px"}}>
  <b>Resolution</b><br/>Simply put, resolution refers to the number of pixels on display. Higher the number of pixels, the better the resolution.
  <br/>
  <div className='text2'><i class="bi bi-badge-hd"></i><div className='text4'style={{marginLeft:'10px'}}>Available in 11 to 13-inch screen sizes, this resolution is good for basic usage such as browsing the Internet, checking mail, watching movies and listening to music.</div></div>
  <div className='text2'><i class="bi bi-badge-sd"></i><div className='text4'style={{marginLeft:'10px'}}>Available in 12 to 16-inch screen sizes, this resolution is good for mainstream usage such as office, studying, gaming, and multiple app use.</div></div>
  <div className='text2'><i class="bi bi-badge-4k"></i><div className='text4'style={{marginLeft:'10px'}}>Available in 14 to 17-inch screen sizes, this resolution is good for premium usage such as professional gaming, 4K video editing, multiple app use and 3D animation.</div></div>
 </div>

<div className='text8'> <img src="https://yellowslice.us/projs/SBG-Dark-02/assets/images/laptop/resolution.jpg"  width={600} height={600}/></div>
 
</div>
  </div>

  <div className='text' style={{marginTop:"100px"}}><b>Form Factor</b><br/>A Laptop’s form factor comprises the style, functionality, weight, etc.<br/><br/></div>

  <div className='text10'>
<div className='text8'> <img src="https://yellowslice.us/projs/SBG-Dark-02/assets/images/laptop/notebooks.png"  width={600} height={400} style={{marginLeft:"150px"}}/></div>
<div className='text7'>
 
  <div className='text2' style={{marginTop:"100px"}}><i class="bi bi-journal-album"></i><div className='text4'style={{marginLeft:'10px',marginTop:"30px"}}><b>Notebooks</b>​<br/>Classic folio design for ease of use and portability.</div></div>
  
  
 </div>

 
</div>
<div className='text'>
<div className='text10'>

<div className='text7'>
 
  <div className='text2' style={{marginTop:"100px"}}><i class="bi bi-feather"></i><div className='text4'style={{marginLeft:'10px',marginTop:"30px"}}><b>Thin and Light Laptops</b>​<br/>Lightweight, compact Laptops that are ideal to carry around if you’re always on the move.</div></div>
  
  
 </div>
 <div className='text8'> <img src="https://yellowslice.us/projs/SBG-Dark-02/assets/images/laptop/thin-light-laptops.png"  width={600} height={400} style={{marginLeft:"150px"}}/></div>
 
</div></div>


<div className='text10'>
<div className='text8'> <img src="https://yellowslice.us/projs/SBG-Dark-02/assets/images/laptop/touchscreen-laptops.png"  width={600} height={400} style={{marginLeft:"150px"}}/></div>
<div className='text7'>
 <div className='text2' style={{marginTop:"100px"}}><i class="bi bi-fingerprint"></i><div className='text4'style={{marginLeft:'10px',marginTop:"0px"}}><b>Touchscreen Laptops</b>​<br/>Folio design with a touchscreen panel for added convenience.</div></div>
</div></div>

<div className='text'>
<div className='text10'>
<div className='text7'>
 <div className='text2' style={{marginTop:"100px"}}><i class="bi bi-feather"></i><div className='text4'style={{marginLeft:'10px',marginTop:"30px"}}><b>2-in-1 Laptops</b>​<br/>Highly flexible design that can convert into a tablet for ease of use.</div></div></div>
<div className='text8'> <img src="https://yellowslice.us/projs/SBG-Dark-02/assets/images/laptop/2-in-1-laptops.png"  width={600} height={400} style={{marginLeft:"150px"}}/></div>
 </div></div>

 <div className='text10'>
<div className='text8'> <img src="https://yellowslice.us/projs/SBG-Dark-02/assets/images/laptop/gaming-laptops.png"  width={600} height={400} style={{marginLeft:"150px"}}/></div>
<div className='text7'>
 <div className='text2' style={{marginTop:"100px"}}><i class="bi bi-controller"></i><div className='text4'style={{marginLeft:'10px',marginTop:"0px"}}><b>Gaming Laptops</b>​<br/>Performance-oriented machines that are stylish and resourceful.</div></div>
</div></div>

<div className='text' style={{marginTop:"20px"}}><b>Additional Features</b><br/>Simply picking the right hardware is not enough, the add-ons and additional features of your Laptop go a long way in making it useful for you. Here are a few additional features that you should consider when buying a Laptop.<br/><br/></div>

<div className='text'>
<div className='text10'>
<div className='text7'>
 <div className='text2' style={{marginTop:"80px",marginBottom:"50px"}}><i class="bi bi-feather"></i><div className='text4'style={{marginLeft:'0px',marginTop:"30px"}}><b>Body Material</b>​<br/>The build quality determines the durability and the weight of your Laptop. While Entry level Laptops are generally made of ABS plastic, the more expensive ones are mostly made using aluminium.</div></div></div>
<div className='text8'> <img src="https://yellowslice.us/projs/SBG-Dark-02/assets/images/laptop/body-material.png"  width={600} height={400} style={{marginLeft:"150px"}}/></div>
 </div></div>


 <div className='text10'>
<div className='text8'> <img src="https://yellowslice.us/projs/SBG-Dark-02/assets/images/laptop/keyboard.png"  width={600} height={400} style={{marginLeft:"150px"}}/></div>
<div className='text7'>
 <div className='text2' style={{marginTop:"100px"}}><i class="bi bi-keyboard"></i><div className='text4'style={{marginLeft:'10px',marginTop:"0px"}}><b>Keyboard</b>​<br/>Keyboards come in a variety of sizes and types. A larger screen-size model, for instance, has a numeric keypad. Premium and gaming aptops often integrate backlit keyboards to add some style and functionality.</div></div>
</div></div>


<div className='text'>
<div className='text10'>
<div className='text7'>
 <div className='text2' style={{marginTop:"100px"}}><i class="bi bi-battery-charging"></i><div className='text4'style={{marginLeft:'0px',marginTop:"0px"}}><b>Battery and Charging</b>​<br/>Large batteries enable greater portability, allowing you to work more on the go. Look for a number of cells (higher the better), battery capacity, and replacement policy.</div></div></div>
<div className='text8'> <img src="https://yellowslice.us/projs/SBG-Dark-02/assets/images/laptop/battery-charging.png"  width={600} height={400} style={{marginLeft:"150px"}}/></div>
 </div></div>

 <div className='text' style={{marginTop:"20px",fontWeight:"20px",marginBottom:"50px"}}><center><b>Explore Our Laptops to Find Your Perfect Match!</b></center></div>
<center><button style={{marginBottom:"20px"}}> Start Exploring..</button></center>
<NewFooter/>
</div>
  )
}
 
export default Menu




 // <section id="menu" className='bg-light'>
    //     <div className='pp'>
    //         <div className='text-center'>
    //         <h3 className='text-primary my-3 py-5'>Top Sale</h3>
    //        <TopSaleCard/>
    //        <h3 className='text-primary my-3 py-5'></h3>
        
          
    //          <TopBrands/>
    //          <SimpleSlider/>
    //         <Review/> 
    //        <Some/> 
           
    //         <NewFooter/>
    //         </div>
    //         </div>                 
    // </section>