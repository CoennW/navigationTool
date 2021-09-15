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
          
          <Box textAlign="left" fontSize="h6.fontSize" fontWeight="bold">
          5A: Conversion    {">"} Support
          </Box>
          (Set of direct interventions for crystallization in entities, work packages, recognizing shared challenges, accepting several agenda’)

          <Box borderRadius='5px' component="p" p={1} textAlign="left" border="1px dashed #e83946">
          <ul>
            <li>demand that partner organizations are very active in contributing with finances, machines, room and/or staff leading to an understanding of the level of support  </li>
          </ul> 

          </Box>
          
          <br/>
          <Box textAlign="left" fontSize="h6.fontSize" fontWeight="bold">
          Intervention Box 5B: Conversion    {">"} Idea
          </Box>
          (Set of direct interventions for crystallization in entities, work packages, recognizing shared challenges, accepting several agenda’s)

          <Box borderRadius='5px' component="p" p={1} textAlign="left" border="1px dashed #e83946">
          <ul>
            <li>invert ingredients of parties’ practices in something new leading to innovative applications</li>
            <li>embed idea in current practices because this facilitates operationalization leading to low cost introduction </li>
          </ul> 

          </Box>

          <br/>
          <Box textAlign="left" fontSize="h6.fontSize" fontWeight="bold">
          Intervention Box 5C: Conversion    {">"} Fit with objectives 
          </Box>
          (Set of direct interventions for crystallization in entities, work packages, recognizing shared challenges, accepting several agenda’s)

          <Box borderRadius='5px' component="p" p={1} textAlign="left" border="1px dashed #e83946">
          <ul>
            <li>describe a common market leading to common interest </li>            
          </ul> 

          </Box>

          <br/>
          <Box textAlign="left" fontSize="h6.fontSize" fontWeight="bold">
          Intervention Box 5D: Conversion    {">"} Cooperation
          </Box>
          (Set of direct interventions for crystallization in entities, work packages, recognizing shared challenges, accepting several agenda’s)

          <Box borderRadius='5px' component="p" p={1} textAlign="left" border="1px dashed #e83946">
          <ul>
            <li>confront another party as if it concerns a stranger because this filters emotional bias leading to clear added value of the party</li>
            <li>take participants away from their normal job so they can work dedicated on the assignment leading to less distraction</li>
            <li>make sure that capacities are available (assumption: because this is mostly responsibility of lower managers leading to too optimistic views of higher managers)</li>
          </ul> 

          </Box>

          <br/>
          <Box textAlign="left" fontSize="h6.fontSize" fontWeight="bold">
          Intervention Box 5E:  Conversion    {">"} Coordination
          </Box>
          (Set of direct interventions for crystallization in entities, work packages, recognizing shared challenges, accepting several agenda’s)

          <Box borderRadius='5px' component="p" p={1} textAlign="left" border="1px dashed #e83946">
          <ul>
            <li>promote the joint venture format leading to an agenda of only MPI interest</li>
            <li>try alliances with customer and/or suppliers to jointly develop products/technologies leading to being innovative and remaining competitive</li>
            <li>create an ‘in between application’ on the borders of participating parties leading to concretization of the next step </li>
            <li>create time and money budgets including delegated authority on MPI level leading to high tempo proceedings </li>
            <li>converge a business plan with the components of viability including a demonstrator leading to a sensible go- no go decision </li>
            <li>create a select group for decision making about formalization leading to a restricted dependency of shareholders</li>
          </ul> 

          </Box>

          <br/>
          <Box textAlign="left" fontSize="h6.fontSize" fontWeight="bold">
          Intervention Box 5F: Conversion   {">"} Partitioning of work 
          </Box>
          (Set of direct interventions for crystallization in entities, work packages, recognizing shared challenges, accepting several agenda’s)

          <Box borderRadius='5px' component="p" p={1} textAlign="left" border="1px dashed #e83946">
          <ul>
            <li>transfer own work protocols to work packages and common tools to all participants because it supports action and interaction leading to higher ties of participants</li>
            <li>deliver for the next phase a detailed modular work planning, a juridical entity and a routine for exit so participants understand clearly the responsibilities entering the next phase leading to low coordination costs </li>
            
            
          </ul> 

          </Box>

          <br/>
          <Box textAlign="left" fontSize="h6.fontSize" fontWeight="bold">
          Intervention Box 5G: Conversion    {">"} Specialized tasks 
          </Box>
          (Set of direct interventions for crystallization in entities, work packages, recognizing shared challenges, accepting several agenda’s)

          <Box borderRadius='5px' component="p" p={1} textAlign="left" border="1px dashed #e83946">
          <ul>
            <li>think about how to integrate independent operating of MPI and communication with parent organizations (assumption: because sidestepping communication routines of parents) leads to best progress </li>
           
          </ul> 

          </Box>



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