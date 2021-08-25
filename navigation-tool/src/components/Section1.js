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

const Step1 = () => {

    const classes = useStyles();



      const handleClickProceed = (event) => {
        
      };
    

     

    return (
    
       
      
    <Box mt={3} >
    <Paper  elevation={3} >

      <Typography component="div">
        <Box p={3}>
          
          <Box textAlign="left" fontSize="h6.fontSize" fontWeight="bold">
          Question 1
          </Box>

          <Box borderRadius='5px' p={2} component="p" textAlign="left" bgcolor="#FAF2F3">
          Are the following two objectives relevant or becoming relevant for you?

          </Box>
         
          <List>
             
             <ListItem style={{flexDirection: 'column', alignItems: 'flex-start'}}>
               <ListItemText primary="- to minimize the perceptual distance between potential partners."/>
               <ListItemText primary="- to maximize the chance for success with low toll for participants."/>
             </ListItem>
           
         </List>
          
         
      
          <div className={classes.root}>
                <Button value="yes" id="proceed" onClick={handleClickProceed} variant="contained" color="primary">
                    Yes
                </Button>
                <Button style={{marginLeft:'20px'}} value="no" id="proceed" onClick={handleClickProceed} variant="contained" color="primary">
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