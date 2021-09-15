import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import {Box, Typography, Button, Grid } from '@material-ui/core';
import { Paper, Divider, List, ListItem, ListItemText } from '@material-ui/core';



const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: '20px 0px 0px 0px',
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
          Question 1
          </Typography>

          <Typography variant="h6" >
          Are the following two objectives relevant or becoming relevant for you?
          </Typography>
          
         <Box borderRadius='5px' p={1} component="p" textAlign="left" bgcolor="#FAF2F3">
          <List >
             
             <ListItem style={{flexDirection: 'column', alignItems: 'flex-start'}}>
               <ListItemText primary="- to minimize the perceptual distance between potential partners."/>
               <ListItemText primary="- to maximize the chance for success with low toll for participants."/>
             </ListItem>
           
         </List>
          
         </Box> 
          
          <div className={classes.root}>
                <Button name="btn1" value="section2" id="proceed" onClick={handleClickProceed} variant="contained" color="primary">
                    Yes
                </Button>
                <Button name="btn2" style={{marginLeft:'20px'}} value="noRelevance" id="proceed" onClick={handleClickProceed} variant="contained" color="primary">
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