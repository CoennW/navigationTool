import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import {Box, Typography, Button } from '@material-ui/core';
import { Paper, Divider } from '@material-ui/core';

import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';


const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(0),
      },
      checkbox: {
        display: 'flex',
      },
      formControl: {
        margin: theme.spacing(3),
      },
    },
  }));

const Step1 = () => {

    const classes = useStyles();

    const [state, setState] = React.useState({
        gilad: false,
        jason: false,
        antoine: false,
      });

      const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
      };
    
      const { gilad, jason, antoine } = state;
     

    return (
    
       
      
    <Box mt={3} >
    <Paper  elevation={3} >

      <Typography component="div">
        <Box p={3}>
          
          <Box textAlign="left" fontSize="h6.fontSize" fontWeight="bold">
          Step 1
          </Box>

          <Box component="p" textAlign="left"  >
            Do you want suggestions for activities for the start of an initiative with several parties and do you recognize some or more of the following characteristics?
          </Box>
            <Divider/>
          
          
          <div className={classes.checkbox}>
            <FormControl component="fieldset" className={classes.formControl}>
                <FormGroup>
                <FormControlLabel
                    control={<Checkbox checked={gilad} onChange={handleChange} name="gilad" />}
                    label="There are several notions of the direction in which the solution may be found."
                />
                <FormControlLabel
                    control={<Checkbox checked={jason} onChange={handleChange} name="jason" />}
                    label="Jason Killian"
                />
                <FormControlLabel
                    control={<Checkbox checked={antoine} onChange={handleChange} name="antoine" />}
                    label="Antoine Llorca"
                />
                </FormGroup>
            </FormControl>

          </div>
         
          <div className={classes.root}>
                <Button onClick={() => { alert('clicked') }} variant="contained" color="primary">
                    Proceed
                </Button>
               
           </div>
            
        </Box>
      </Typography>
    
    </Paper>
  </Box>
 
    );
};

export default Step1;