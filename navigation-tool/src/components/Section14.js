import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Box, Typography, Slider } from '@material-ui/core';
import { Paper } from '@material-ui/core';
import { useState } from 'react';







const Step1 = (props) => {

    
    

    return (
    
      
    <Box mt={3} >
    <Paper  elevation={3} >

      
        <Box p={3}>

          <Box textAlign="left" fontSize="h4.fontSize" fontWeight="bold">
          Interim evaluation of the MPI
          </Box>

         <Box>
         Evaluate the actual status quo by:
1) making a consolidation of the MPI by collecting the latest results: decisions made, consolidations so far and intended actions.
2) asking individual participating keypersons of the MPI: a) what is/are the actual objective(s) of their current activities and b) desired outcomes of their current activities

Then 3a) Compare the individual answers of question 2a) with the two objectives of the Inception phase
- to minimize the perceptual distance  between potential partners    
Individual position by assessing score of key-players: totally not driven by {"<"} 1     2      3      4       5 {">"} totally driven by

- to maximize the chance for success with low toll for participants 
Individual position by assessing score of key-players: totally not driven by {"<"} 1     2      3      4       5 {">"} totally driven by

And 3b) Compare the individual answers of question 2b) with the following pre-scripted outcomes of the Inception phase. 

         </Box>
            <br />
        <Typography>
          Are respondents currently doing work for:
        </Typography>

        <Typography>
          A) Support: person or group in the parent organizations allows/helps the initiative to go on.
        </Typography>

      	<Box style={{width:"50%"}}>
          <Box style={{display:'flex', justifyContent:'space-between'}}>
            <Typography variant="subtitle2">Totally not driven by</Typography>
            <Typography variant="subtitle2">Totally driven by</Typography>
          </Box>
          <Slider
            aria-label="Temperature"
            defaultValue={0}
            aria-valuetext="hi"
            valueLabelDisplay="auto"
            step={1}
            min={1}
            max={5}
          />
        </Box>

              
        </Box>
     
    
    </Paper>
  </Box>
 
    );
};

export default Step1;