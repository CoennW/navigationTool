import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import {Box, Typography, Button, Grid } from '@material-ui/core';
import { Paper, Divider, List, ListItem, ListItemText } from '@material-ui/core';



const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: '20px 0px',
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
          Question 6
          </Box>

          <Box borderRadius='5px' p={2} component="p" textAlign="left" bgcolor="#FAF2F3">
          Do you have a need for interventions concerning the general process design for the MPI? 

          </Box>
         
      
          <div className={classes.root}>
                <Button name="btn1" value="section7" id="proceed" onClick={handleClickProceed} variant="contained" color="primary">
                    Yes
                </Button>
                <Button name="btn2" style={{marginLeft:'20px'}} value="section16" id="proceed" onClick={handleClickProceed} variant="contained" color="primary">
                    No
                </Button>
           </div>           
        </Box>
      </Typography>
    
    </Paper>
  </Box>
 
    );
};

export default Step1;