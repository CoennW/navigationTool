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
            Initiation Interventions
          </Box>

          <Box variant="subtitle2" >
          Set of direct interventions for nomination, first meetings, introduction.
          </Box>

          <Box mt={4} textAlign="left" fontSize="h6.fontSize" fontWeight="bold">
            Box: 1A: Initiation {">"} Support
          </Box>

          <Box borderRadius='5px' component="p" p={1} textAlign="left" border="1px dashed #e83946">
          <ul>
            <li>check the selection of (new) parties preventing use of wrong criteria</li>
            <li>gather in the first meeting existing input for the Inception phase and existing questions about viability leading to motivation to go on if used or answered respectively</li>
            <li>invite participants representing a branch with immediate interest leading to acceleration in getting support </li>
            <li>invite many parties with useful qualities facilitating a transformation from attendee to supporter </li>
            <li>combine a broadly felt problem with an idea that fits the objectives of the potential participants leading to a starting group of innovators/early adapters</li>
            <li>show in the invitation how the idea fits the shared processes of invitees leading to broader support</li>
            <li>scan the five O’s  in the neighborhood for skills needed making the MPI profit from existing and experienced connections</li>
            <li>introduce a potential launching party leading to focused anticipation</li>
            <li>Invite parties that are already busy with the item (assumption: because pioneers understand the actual challenges best leading to right priorities for the MPI)</li>
          </ul> 

          </Box>
          
          <Box mt={4} textAlign="left" fontSize="h6.fontSize" fontWeight="bold">
           Box 1B: Initiation {">"} Idea
          </Box>

          <Box borderRadius='5px' component="p" p={1} textAlign="left" border="1px dashed #e83946">
          <ul>
            <li>invite users in an early stage leading to participants that are realistic about the idea</li>
            <li>ask around at universities leading to good selection</li>
          </ul> 

          </Box>

          <Box mt={4} textAlign="left" fontSize="h6.fontSize" fontWeight="bold">
           Box 1C: Initiation {">"} Fit with objectives 
          </Box>

          <Box borderRadius='5px' component="p" p={1} textAlign="left" border="1px dashed #e83946">
          <ul>
            <li>invite users in an early stage leading to participants that are realistic about the idea</li>
            <li>ask around at universities leading to good selection</li>
          </ul> 

          </Box>

          <Box mt={4} fontWeight="bold">
          Do you have a need for other initiating activities for cooperation, coordination, partitioning of work? 
          </Box>
         
          	
           <div mt={4} className={classes.root}>
                <Button name="btn1" value="section18" id="proceed" onClick={handleClickProceed} variant="contained" color="primary">
                    Yes
                </Button>
                <Button name="btn2" style={{marginLeft:'20px'}} value="section17" id="proceed" onClick={handleClickProceed} variant="contained" color="primary">
                    No
                </Button>
           </div>   

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