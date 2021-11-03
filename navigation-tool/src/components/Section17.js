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
          Supplemental general interventions
          </Box>
          

          <Box borderRadius='5px' component="p" p={1} textAlign="left" border="1px dashed #e83946">
         
          <ul>
            <li>check the index of the first decision document on presence of the seven viability components because this makes the them explicit leading to better assessment of viability.</li>
            <li>propose common measures for the viability components (power and actual role for support of partners, short term and long-term benefits for fit with objectives, market, performance requirements, technology, attraction and form for the Idea, staff, strength and style for cooperation, structure, planning and routines for coordination, modular and architectural for partitioning of work) leading to support for the MPI</li>
            <li>propose a set of identification activities for the viability components leading to trust in future transaction costs, mutual capabilities or other added values. If needed go to </li>
            <li>propose a set of exchange activities for the viability components leading to insights for efficient collaboration</li>
            <li>propose a set of reflection activities for the viability components leading to perspectives of the contribution of the participants</li>
            <li>propose a set of conversion activities for the viability components leading to consolidations for cooperation, coordination, work packages and specialized tasks in the next phase</li>
            <li>use boundary crossing activities leading to facilitation of mutual learning </li>
            <li>introduce a transaction style based on communal sharing and market pricing leading to sharing objectives, hazards and benefits build on a non-equity relationship and priced inputs  </li>
            <li>execute indirect interventions so positive changes in (the interaction of) the parties emerge leading to positive process outcomes like speed, focus, openness, respect, decisions and understanding </li>
            <li>make interventions on the level of objectives, idea, coordination, cooperation right from the start leading to durable agility in the collaborating parties </li>
          </ul> 

          </Box>

          <br/>
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