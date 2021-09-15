import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import {Box, Typography, Button, Grid } from '@material-ui/core';
import { Paper, Divider, List, ListItem, ListItemText } from '@material-ui/core';



const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        marginTop: '40px',
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
    
       
      
    <Box mt={5} >
    <Paper  elevation={3} >

      <Typography component="div">
        <Box p={5}>
          
          <Typography variant="subtitle2">
          Question 2
          </Typography>

          <Typography variant="h6" >
          Do you have (hardly) no restrictions concerning completion time or the number of parties now?
          </Typography>
         
        
         
      
          <div className={classes.root}>
                <Button name="btn1" value="section6" id="proceed" onClick={handleClickProceed} variant="contained" color="primary">
                    Yes
                </Button>
                <Button name="btn2" style={{marginLeft:'20px'}} value="section3" id="proceed" onClick={handleClickProceed} variant="contained" color="primary">
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