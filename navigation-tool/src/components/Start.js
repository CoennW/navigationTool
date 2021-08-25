import React from "react";
import {Box, Typography, Button } from '@material-ui/core';
import { Paper } from '@material-ui/core';

const Start = (props) => {

    const handleClickProceed = () => {
        props.changeSection('next');
    }


    return (
    <Box mt={3} >
    <Paper  elevation={3} >

      <Typography component="div">
        <Box p={3}>
          
          <Box textAlign="left" fontSize="h6.fontSize" fontWeight="bold">
          Welcome to the Navigation Tool for the Intervention Box. 
          </Box>

          <Box component="p" textAlign="left"  >
          This tool will make it easy to... lorem ipsum dolor sit amet, consectetur adipiscing elit, 
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </Box>

          <Box component="p" textAlign="left" >
          Please follow the questions and...  
          duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </Box>
          
            <Button onClick={handleClickProceed} variant="contained" color="primary">
              Start Navigation Tool
            </Button>
   
          
        </Box>
      </Typography>
    
    </Paper>
  </Box>
    );
};

export default Start;