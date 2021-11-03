import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import {Box, Typography, Button, Grid } from '@material-ui/core';
import { Paper } from '@material-ui/core';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import Fab from '@material-ui/core/Fab';
import Divider from '@material-ui/core/Divider';


const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
      extendedIcon: {
        marginRight: theme.spacing(1),
      },
      
    },
  }));

const Step1 = (props) => {

    const classes = useStyles();
    
    const handleClickProceed = (event) => {
        let value = event.currentTarget.value;
        console.log(value);
        props.changeSection(value);
      };     
    return (
    
      
    <Box mt={3} >
    <Paper  elevation={3} >

      <Typography component="div">
        <Box p={3}>
        <Box textAlign="left" fontSize="h4.fontSize" fontWeight="bold">
          Exchange Interventions
          </Box>

          <Box variant="subtitle2" >
          Set of direct interventions for routinizing communication, handling the boundary object and creating transparency.
          </Box>

          <Box mt={4} textAlign="left" fontSize="h6.fontSize" fontWeight="bold">
          Box 3A: Exchange  {">"} Support
          </Box>

          <Box borderRadius='5px' component="p" p={1} textAlign="left" border="1px dashed #e83946">
          <ul>
            <li>allocate work based on the future roles leading to long term support</li>
            <li>give the launching customer a discount for future purchases leading to support of the initiative</li>
            <li>execute a cost-benefit analysis leading to to insight for costs of sharing knowledge</li>
          </ul> 

          </Box>
          
          <Box mt={4} textAlign="left" fontSize="h6.fontSize" fontWeight="bold">
          Box 3B: Exchange  {">"} Idea
          </Box>

          <Box borderRadius='5px' component="p" p={1} textAlign="left" border="1px dashed #e83946">
          <ul>
            <li>keep the idea inside the MPI arena preventing tearing it apart by political wolves</li>
            <li>make sure on which idea to work {">"} system, process or product (assumption: because this prevents preferences of participants) leading to jointly reasoning from whole to parts</li>
            
          </ul> 

          </Box>

          <Box mt={4} textAlign="left" fontSize="h6.fontSize" fontWeight="bold">
          Box 3C: Exchange  {">"} Fit with objectives 
          </Box>

          <Box borderRadius='5px' component="p" p={1} textAlign="left" border="1px dashed #e83946">
          <ul>
            <li>make detailed agreements about the work packages preventing that one of the participants emphasizes mainly his own interests</li>
          </ul> 

          </Box>

          <Box mt={4} textAlign="left" fontSize="h6.fontSize" fontWeight="bold">
          Box 3D: Exchange  {">"} Cooperation
          </Box>

          <Box borderRadius='5px' component="p" p={1} textAlign="left" border="1px dashed #e83946">
          <ul>
            <li>make the availability of staff, strengths and typical styles clear leading to realistic cooperation in activities</li>
            <li>start immediately with building trust leading to smooth knowledge exchange </li>
           
            <li>implement collaborative leadership leading to facilitation of tacit learning </li>
            <li>treat input of mother organizations as trade goods leading to fair reciprocity in collaboration  </li>
            <li>install a stable working group with technical persons leading to stability in cooperation </li>
            <li>make supporters commit themselves for a long active role leading to low circulation of other persons in and around the MPI</li>
            <li>make the long- and short-term interests of partners clear so they stay motivated to work together</li>
            <li>make sure that an end-user does not need to work continuously for the MPI leading to convenience for this contributor</li>
          </ul> 

          </Box>

          <Box mt={4} textAlign="left" fontSize="h6.fontSize" fontWeight="bold">
          Box 3E:  Exchange  {">"} Coordination
          </Box>

          <Box borderRadius='5px' component="p" p={1} textAlign="left" border="1px dashed #e83946">
          <ul>
            <li>introduce structures, routines and planning leading to efficient coordination of activities</li>
            <li>make joint planning activities leading to ensured order in interdependent activities</li>
            <li>discriminate between important and not important issues leading to less inter-party rivalry and less coordination costs</li>
            <li>set up the sharing of information including feedback leading to the best formalization level</li>
            <li>arrange information sharing procedures, non-contractual commitments, change management approaches, arrangements for penalties leading to less collaboration problems </li>
            <li>introduce routines about gathering information about feasibility leading to availability and ownership in the MPI</li>
            <li>make agreements about an open or layered exchange of knowledge (with discovery register) leading to a low level of coordination costs and to effective diffusion of knowledge</li>
            <li>agree within the MPI about allocation of hours because this avoids complicated coupling with money leading to informal and easy decision making about priority, staffing and sharing the growing information</li>
            <li>make agreements based on first experiences with the other participants because if one sees no reason for a formal contract this leads to optimal flexibility for adjudgments</li>
            <li>exchange agendas of end-users and gatekeepers so the risk of burning money/hours is understood leading to everybody staying on the same priorities</li>
            <li>make the breakdown of the idea and the responsibilities coherent so participants understand the relationship with burning money leading to everybody staying on the same priorities</li>
          </ul> 

          </Box>

          <Box mt={4} textAlign="left" fontSize="h6.fontSize" fontWeight="bold">
          Box 3F: Exchange {">"} Partitioning of work 
          </Box>

          <Box borderRadius='5px' component="p" p={1} textAlign="left" border="1px dashed #e83946">
          <ul>
            <li>create only for modular work packages high coupling of partners leading to higher chance for commercial success</li>
            <li>in case of architectural work packages use rich media leading to high interorganizational learning </li>
            <li>make sure that everybody contributes leading to motivation of participants to take a fair share</li>
            <li>give the work to the best suited party even if it does not fit your own short-term interest leading to your staying focused on the result</li>
          </ul> 

          </Box>

          <Box mt={4} textAlign="left" fontSize="h6.fontSize" fontWeight="bold">
          Box 3G: Exchange  {">"} Specialized tasks 
          </Box>

          <Box borderRadius='5px' component="p" p={1} textAlign="left" border="1px dashed #e83946">
          <ul>
            <li>use confirmation, selection, transformation, toleration or non-confirmation as tactics leading to a fit in the parent organizations </li>
           
          </ul> 

          </Box>


          <Box fontWeight="bold">
          Do you have a need for indirect interventions?  
          </Box>
         
          	
           <div className={classes.root}>
                <Button name="btn1" value="sectionI" id="proceed" onClick={handleClickProceed} variant="contained" color="primary">
                    Yes
                </Button>
                <Button name="btn2" style={{marginLeft:'20px'}} value="section19" id="proceed" onClick={handleClickProceed} variant="contained" color="primary">
                    No
                </Button>
           </div>   


         {/* <br/>
          <Box fontWeight="bold">
          Do you have a need for other initiating activities for cooperation, coordination, partitioning of work? 
          </Box>
         
          	
           <div className={classes.root}>
                <Button name="btn1" value="section18" id="proceed" onClick={handleClickProceed} variant="contained" color="primary">
                    Yes
                </Button>
                <Button name="btn2" style={{marginLeft:'20px'}} value="section17" id="proceed" onClick={handleClickProceed} variant="contained" color="primary">
                    No
                </Button>
           </div> */ } 

        {/* <Box style={{marginTop: '20px', display: 'flex', justifyContent: 'space-between'}}>
          <a style={{textDecoration: 'none'}} href="../downloads/First_general_interventions.pdf" download="First Set General Interventions" target="_blank">
           <Fab  variant="extended" color="primary" >
              <CloudDownloadIcon style={{marginRight: '10px'}}/>
              interventions in pdf
            </Fab>     
            </a>
            <Button id="proceed" value='section8' onClick={handleClickProceed} variant="text" color="secondary">
                Proceed to next iteration
            </Button>
          </Box> */}
              
        </Box>
      </Typography>
    
    </Paper>
  </Box>
 
    );
};

export default Step1;