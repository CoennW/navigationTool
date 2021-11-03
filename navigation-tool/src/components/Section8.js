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
          
        

          <Typography variant="subtitle2">
          Question 8
          </Typography>

          <Typography variant="h6" >
          Do you have a need for other general interventions than in Section 7?
          </Typography>
         
      
          <div className={classes.root}>
                <Button name="btn1" value="section17" id="proceed" onClick={handleClickProceed} variant="contained" color="primary">
                    Yes
                </Button>
               
                <Button name="btn2" style={{marginLeft:'20px'}} value="section18" id="proceed" onClick={handleClickProceed} variant="contained" color="primary">
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