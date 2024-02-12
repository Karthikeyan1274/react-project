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
          <Typography style={{color:"white"}}>Specification</Typography>
        </AccordionSummary>
        <AccordionDetails style={{backgroundColor:"rgb(19, 17, 17)"}}>
          <Typography style={{color:"white"}}>
          Intel Processors<br />
            <div className='textt'><img src="https://yellowslice.us/projs/SBG-Dark-02/assets/images/laptop/i3.png"/>
                      <img src="https://seeklogo.com/images/N/nvidia-rtx-logo-F282CD4FFB-seeklogo.com.png"/>
                      <img src='data:image/png;base64,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' style={{width:"150px"}}/>
            </div>

        
          </Typography>

         
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}sx={{width:"50%",marginLeft:"300px"}}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header" sx={{backgroundColor:"rgb(19, 17, 17)"}}>
          <Typography style={{color:"white"}}>Features</Typography>
        </AccordionSummary>
        <AccordionDetails style={{backgroundColor:"rgb(19, 17, 17)"}}>
          <Typography style={{color:"white"}}>
          Connectivity<br />
           <div className='textt'><img src="https://beebom.com/wp-content/uploads/2019/09/Wi-Fi-6-wifi-website.jpg?quality=75&strip=all" style={{width:"150px"}}/>
           <img src='https://miro.medium.com/v2/resize:fit:750/0*_Q7MjhoRLpjIdB2J.jpg'style={{width:"150px"}}/>
           </div>
          </Typography>
          <Typography style={{color:"white"}}>
          Multimedia<br />
           <div className='textt'><img src="https://www.shutterstock.com/image-vector/west-java-indonesia-november-15-600nw-2390757527.jpg"style={{width:"150px"}}/>
          <img src="data:image/png;base64,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"style={{width:"150px"}}/>
           </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
     
    </div>
  
  );
}