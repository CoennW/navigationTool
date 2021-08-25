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
          There is no relevance in this tool for your objectives.
          </Box>

          <Box borderRadius='5px' p={2} component="p" textAlign="left" bgcolor="#FAF2F3">
          There is no relevance in this tool for your objectives.

          </Box>
         
         
         
      
          <div className={classes.root}>
                <Button name="btn1" value="start" id="proceed" onClick={handleClickProceed} variant="contained" color="primary">
                    Restart
                </Button>
                
           </div>           
        </Box>
      </Typography>
    
    </Paper>
  </Box>
 
    );
};

export default Step1;