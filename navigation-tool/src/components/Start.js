import React from "react";
import {Box, Typography, Button } from '@material-ui/core';
import { Paper } from '@material-ui/core';

const Start = (props) => {

    const handleClickProceed = () => {
        props.changeSection('step1');
    }


    return (
    <Box mt={3} >
    <Paper  elevation={3} >

      <Typography>
        <Box p={3}>
          
          <Box textAlign="left" fontSize="h6.fontSize" fontWeight="bold">
          Welcome to the Navigation Tool for the Intervention Box. 
          </Box>

          <Box component="p" textAlign="left"  >
          This tool will help you to find the interventions for the development of your multi-party initiative. These interventions will deliver you the possibility to assess the viability of your initiative. Viability of your initiative needs support from the parent organisations, an idea with certain characteristics, fit with objectives of participants and a view on coordination, cooperation, work partitioning and communication lines with parent organisations in the next phase(s). Every starting initiative needs a set of interventions from the intervention box to create viability, but since every initiative is unique you have to customize your individual process with the right interventions for the next step. 
          </Box>

          <Box component="p" textAlign="left" >
          Please follow the questions to find the right interventions. Please understand that execution of each intervention adds unique information to the initiative and it is important to consolidate this yield. This consolidation is again input for next interventions. It is possible to iterate several times through the sections and even execute the same intervention more than once. At the same time it is necessary to execute interventions for all the seven components of viability of your initiative.
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