import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import {Box, Typography, Button, Grid } from '@material-ui/core';
import { Paper } from '@material-ui/core';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import Fab from '@material-ui/core/Fab';
import { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Height } from "@material-ui/icons";
import { grey } from "@material-ui/core/colors";

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


    const [value, setValue] = useState(0);
    const handleTabs = (e,val) => {
      setValue(val)
    }

    const handleClickProceed = (event) => {
        let value = event.currentTarget.value;
        console.log(value);
        props.changeSection(value);
      };
    
     function TabPanel(props) {
       const {children, value, index} = props;
       return (
         <div>{value===index && (children)}</div>
       );
     }
      

    return (
    
      
    <Box mt={3} >
    <Paper  elevation={3} >

      <Typography component="div">
        <Box p={3}>

          <Box textAlign="left" fontSize="h4.fontSize" fontWeight="bold">
          Interim evaluation of the MPI
          </Box>

         
            
              
        </Box>
      </Typography>
    
    </Paper>
  </Box>
 
    );
};

export default Step1;