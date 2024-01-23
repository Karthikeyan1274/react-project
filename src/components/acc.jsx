// import React from 'react'
// import Accordion from 'react-bootstrap/Accordion';
// import './acc.css'

// function BasicExample() {
//     return (
//         <div style={{backgroundColor:"black"}}>
//         <Accordion className='z'>
//         <Accordion.Item eventKey="0">
//           <Accordion.Header>Email,Music</Accordion.Header>
//           <Accordion.Body>
//           Intel Processors<br />
//           <div className='textt'><img src="https://yellowslice.us/projs/SBG-Dark-02/assets/images/laptop/i3.png"/>
//           <img src="https://yellowslice.us/projs/SBG-Dark-02/assets/images/laptop/i5.png"/>
//           <img src="https://yellowslice.us/projs/SBG-Dark-02/assets/images/laptop/celeron.png"/></div>
//           </Accordion.Body>
//           <Accordion.Body>
//           AMD Processor<br />
//           <div className='textt'><img src="https://yellowslice.us/projs/SBG-Dark-02/assets/images/laptop/a91.png"/>
//           <img src="https://yellowslice.us/projs/SBG-Dark-02/assets/images/laptop/ryzen-3.png"/>
//           <img src="https://yellowslice.us/projs/SBG-Dark-02/assets/images/laptop/ryzen-3-Pro.png"/></div>
//           </Accordion.Body>
//           <Accordion.Body>
//           Qualcomm Processor<br />
//           <div className='textt'><img src="https://yellowslice.us/projs/SBG-Dark-02/assets/images/laptop/7c.png"/></div>
//           </Accordion.Body>



//         </Accordion.Item>
//         <Accordion.Item eventKey="1">
//           <Accordion.Header>Professional</Accordion.Header>
//           <Accordion.Body>
//           Intel Processors<br />
//           <div className='textt'><img src="https://yellowslice.us/projs/SBG-Dark-02/assets/images/laptop/i5.png"/></div>
//           </Accordion.Body>

//           <Accordion.Body>
//           AMD Processors<br />
//           <div className='textt'><img src="https://yellowslice.us/projs/SBG-Dark-02/assets/images/laptop/ryzen-5.png"/>
//           <img src="https://yellowslice.us/projs/SBG-Dark-02/assets/images/laptop/ryzen-5-pro.png"/>
//           </div>
//           </Accordion.Body>

//         </Accordion.Item>
//         <Accordion.Item eventKey="2">
//           <Accordion.Header>Main Stream</Accordion.Header>
//           <Accordion.Body>
//           Intel Processors<br />
//           <div className='textt'><img src="https://yellowslice.us/projs/SBG-Dark-02/assets/images/laptop/i5.png"/>
//           <img src="https://yellowslice.us/projs/SBG-Dark-02/assets/images/laptop/i5.png"/>
//           <img src="https://yellowslice.us/projs/SBG-Dark-02/assets/images/laptop/xeon.png"/></div>
//           </Accordion.Body>
//           <Accordion.Body>
//           AMD Processor<br />
//           <div className='textt'><img src="https://yellowslice.us/projs/SBG-Dark-02/assets/images/laptop/ryzen-7.png"/>
//           <img src="https://yellowslice.us/projs/SBG-Dark-02/assets/images/laptop/ryzen-9.png"/>
//           <img src="https://yellowslice.us/projs/SBG-Dark-02/assets/images/laptop/ryzen-threadripper.png"/></div>
//           </Accordion.Body>
//           <Accordion.Body>
//           Qualcomm Processor<br />
//           <div className='textt'><img src="https://yellowslice.us/projs/SBG-Dark-02/assets/images/laptop/Kryo495.png"/></div>
//           </Accordion.Body>



//         </Accordion.Item>
//       </Accordion>
//       </div>
//     );
//   }
  
//   export default BasicExample;

import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import './acc.css'
const Accordion = styled((props) => (

  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&::before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
  
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} sx={{width:"50%",marginLeft:"300px"}}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header" sx={{backgroundColor:"rgb(19, 17, 17)"}}>
          <Typography style={{color:"white"}}>Email,Music</Typography>
        </AccordionSummary>
        <AccordionDetails style={{backgroundColor:"rgb(19, 17, 17)"}}>
          <Typography style={{color:"white"}}>
          Intel Processors<br />
            <div className='textt'><img src="https://yellowslice.us/projs/SBG-Dark-02/assets/images/laptop/i3.png"/>
                      <img src="https://yellowslice.us/projs/SBG-Dark-02/assets/images/laptop/i5.png"/>
                       <img src="https://yellowslice.us/projs/SBG-Dark-02/assets/images/laptop/celeron.png"/></div>

          <Typography style={{color:"white"}}>
          AMD Processor<br />
         <div className='textt'><img src="https://yellowslice.us/projs/SBG-Dark-02/assets/images/laptop/ryzen-7.png"/>
           <img src="https://yellowslice.us/projs/SBG-Dark-02/assets/images/laptop/ryzen-9.png"/>
          <img src="https://yellowslice.us/projs/SBG-Dark-02/assets/images/laptop/ryzen-threadripper.png"/></div></Typography>
          </Typography>

          <Typography style={{color:"white"}}>
          Qualcomm Processor<br />
           <div className='textt'><img src="https://yellowslice.us/projs/SBG-Dark-02/assets/images/laptop/7c.png"/></div>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}sx={{width:"50%",marginLeft:"300px"}}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header" sx={{backgroundColor:"rgb(19, 17, 17)"}}>
          <Typography style={{color:"white"}}>Professional</Typography>
        </AccordionSummary>
        <AccordionDetails style={{backgroundColor:"rgb(19, 17, 17)"}}>
          <Typography style={{color:"white"}}>
          Intel Processors<br />
           <div className='textt'><img src="https://yellowslice.us/projs/SBG-Dark-02/assets/images/laptop/i5.png"/></div>
          </Typography>
          <Typography style={{color:"white"}}>
          AMD Processors<br />
           <div className='textt'><img src="https://yellowslice.us/projs/SBG-Dark-02/assets/images/laptop/ryzen-5.png"/>
          <img src="https://yellowslice.us/projs/SBG-Dark-02/assets/images/laptop/ryzen-5-pro.png"/>
           </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}sx={{width:"50%",marginLeft:"300px"}}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header" sx={{backgroundColor:"rgb(19, 17, 17)"}}>
          <Typography style={{color:"white"}}>Main Stream</Typography>
        </AccordionSummary>
        <AccordionDetails style={{backgroundColor:"rgb(19, 17, 17)"}}>
          <Typography style={{color:"white"}}>
          Intel Processors<br />
           <div className='textt'><img src="https://yellowslice.us/projs/SBG-Dark-02/assets/images/laptop/i5.png"/>
           <img src="https://yellowslice.us/projs/SBG-Dark-02/assets/images/laptop/i5.png"/>
           <img src="https://yellowslice.us/projs/SBG-Dark-02/assets/images/laptop/xeon.png"/></div>
          </Typography>
          <Typography style={{color:"white"}}>
          AMD Processor<br />
           <div className='textt'><img src="https://yellowslice.us/projs/SBG-Dark-02/assets/images/laptop/ryzen-7.png"/>
           <img src="https://yellowslice.us/projs/SBG-Dark-02/assets/images/laptop/ryzen-9.png"/>
           <img src="https://yellowslice.us/projs/SBG-Dark-02/assets/images/laptop/ryzen-threadripper.png"/></div>
          </Typography>
          <Typography style={{color:"white"}}>
          Qualcomm Processor<br />
           <div className='textt'><img src="https://yellowslice.us/projs/SBG-Dark-02/assets/images/laptop/Kryo495.png"/></div>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  
  );
}