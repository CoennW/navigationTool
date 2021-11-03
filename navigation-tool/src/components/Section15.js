import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import {Box, Typography, Button, Grid } from '@material-ui/core';
import { Paper } from '@material-ui/core';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import Fab from '@material-ui/core/Fab';


const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
      extendedIcon: {
        marginRight: theme.spacing(1),
      },
      box: {
        marginRight: "30px"
      }
      
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
          Interventions leading to trust
          </Box>

          <Box  borderRadius='5px' component="p" p={1}  textAlign="left" border="1px dashed #e83946" >
          <ul>
            <li>discuss market overlap of parties leading to less contribution if present </li>
            <li>make sure that participants understand each other’s gains and pains leading to progress also in difficult times </li>
            <li>treat within the MPI each other as equivalent leading to ignoring individual differences </li>
            <li>arrange immediately coordination of change - and conflict management as well in decision making leading to growth of trust </li>
            <li>use non-binding contracts leading to a basis for interpersonal trust</li>
            <li>start immediately with building trust preventing excessive contractual formality </li>
            <li>choose high frequency communication with rich media leading to a high degree of inter-organizational learning and low opportunistic behaviour</li>
            <li>have regular and systematic interaction using rich media ties leading to the working up of trust </li>
            <li>give priority to low risk activities leading to positive interaction</li>
            <li>let participants elaborate on each other’s contribution leading to teaming up</li>
          </ul> 

          </Box>

          <Box>
          Do you have a need for supplemental general interventions? 
          </Box>
         
          	
           <div className={classes.root}>
                <Button name="btn1" value="section17" id="proceed" onClick={handleClickProceed} variant="contained" color="primary">
                    Yes
                </Button>
                <Button name="btn2" style={{marginLeft:'20px'}} value="section18" id="proceed" onClick={handleClickProceed} variant="contained" color="primary">
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