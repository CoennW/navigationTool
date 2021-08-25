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
      
    },
  }));

const Step1 = (props) => {

    const classes = useStyles();



    const handleClickProceed = (event) => {
        let value = event.currentTarget.value;
        props.changeSection(value);
      };
    
      
      

    return (
    
      
    <Box mt={3} >
    <Paper  elevation={3} >

      <Typography component="div">
        <Box p={3}>
          
          <Box textAlign="left" fontSize="h6.fontSize" fontWeight="bold">
          First set general interventions.
          </Box>

          <Box borderRadius='5px' p={2} component="p" textAlign="left" bgcolor="#FAF2F3">
          <ol>
            <li>propose the use of an Inception phase leading to a small cognitive bias gap in participants</li>
            <li>provide the key-participants a learning module about IPA so they become aware of the essentials of IPA leading to shared view on tools and outcomes</li>
            <li>give Support of parent organizations, Idea description and Fit with objectives emphasis in the beginning leading to motivation to develop ideas about Cooperation, Coordination, Partitioning of work and Integration with parent organizations later. </li>
            <li>begin to work on trust immediately leading to positive (inter-organizational) collaborative behaviour. If relevant go to Section 15 for concrete interventions</li>
            <li>propose a set of initiating activities leading to support for follow up activities. If relevant go to Section 16 for concrete interventions</li>
            <li>make an inventory of what is already available at the current parties as input for or interpretation of the viability components leading to a shared view of (maybe different) starting points.</li>
          </ol> 

          </Box>

          <Box>
          After the (selection of the) above interventions are finished, 
          <Box component='span' color="primary.info"> consolidate the output before going to Section 8 for the next iterations starting here </Box>
           now the MPI has finished 
          its first set of activities and goes on in the Inception phase. 
          </Box>
         
      
          {/* <div className={classes.root}>
                <Button name="btn1" value="section7" id="proceed" onClick={handleClickProceed} variant="contained" color="primary">
                    Yes
                </Button>
                <Button name="btn2" style={{marginLeft:'20px'}} value="section16" id="proceed" onClick={handleClickProceed} variant="contained" color="primary">
                    No
                </Button>
           </div>   */}

         <Box style={{marginTop: '20px', display: 'flex', justifyContent: 'space-between'}}>
          <a style={{textDecoration: 'none'}} href="../downloads/First_general_interventions.pdf" download="First Set General Interventions" target="_blank">
           <Fab  variant="extended" color="primary" >
              <CloudDownloadIcon style={{marginRight: '10px'}}/>
              interventions in pdf
            </Fab>     
            </a>
            <Button id="proceed" value='section8' onClick={handleClickProceed} variant="text" color="secondary">
                Proceed to next iteration
            </Button>
          </Box>     
              
        </Box>
      </Typography>
    
    </Paper>
  </Box>
 
    );
};

export default Step1;