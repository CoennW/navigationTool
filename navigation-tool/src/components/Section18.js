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
          Box 1D: Initiation {">"} Cooperation
          </Box>

          <Box borderRadius='5px' component="p" p={1} textAlign="left" border="1px dashed #e83946">
          <ul>
            <li>invite staff relevant from a customer point of view leading to fulfilling expectations of customers</li>
            <li>invite staff representing the strength of the participants leading to unique resources in cooperation </li>
            <li>invite device builders and end-users with pre-competitive interests for the same market </li>
            <li>take time to understand the non-moving starting points of the initiative (assumption: because parties interpret them as positive) leading to unchecked starting points</li>
          </ul> 

          </Box>
          
          <Box mt={4} textAlign="left" fontSize="h6.fontSize" fontWeight="bold">
          Box 1E: Initiation {">"} Coordination
          </Box>
          (Set of direct interventions for nomination, first meetings, introduction)

          <Box borderRadius='5px' component="p" p={1} textAlign="left" border="1px dashed #e83946">
          <ul>
            <li>search for champion, sponsor and gate keepers leading to introduction in formal processes </li>
            
          </ul> 

          </Box>

          <Box mt={4} textAlign="left" fontSize="h6.fontSize" fontWeight="bold">
          Box 1F: Initiation {">"} Partitioning of work 
          </Box>
          (Set of direct interventions for nomination, first meetings, introduction)

          <Box borderRadius='5px' component="p" p={1} textAlign="left" border="1px dashed #e83946">
          <ul>
            <li>make sure to synchronize actions of partners leading continuously to joint starting points</li>
          </ul> 

          </Box>

          



          
          <Box mt={4} fontWeight="bold">
          Do you have a need for indirect interventions?  
          </Box>
         
          	
           <div className={classes.root}>
                <Button name="btn1"  value="sectionI" id="proceed" onClick={handleClickProceed} variant="contained" color="primary">
                    Yes
                </Button>
                <Button name="btn2" style={{marginLeft:'20px'}} value="section19" id="proceed" onClick={handleClickProceed} variant="contained" color="primary">
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