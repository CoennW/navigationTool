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
        margin: '20px 0px',
      },
      checkbox: {
        display: 'flex',
      },
      formControl: {
        margin: theme.spacing(2),
        
      },
    },
  }));

const Step1 = (props) => {

    const classes = useStyles();

    const [state, setState] = React.useState({
        one: false,
        two: false,
        three: false,
        four: false,
        five: false,
        six: false,
        seven: false,
        eight: false,
        nine: false
        
      });

      const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
         
      };

      const handleClickProceed = (event) => {
        let exists = Object.values(state).some(val => val === true);
        if(exists){
          props.changeSection('section1');
        } else {
          props.changeSection('noRelevance');
        }
      };
    
      const { one, two, three, four, five, six, seven, eight, nine,  } = state;
     

    return (
    
       
      
    <Box mt={3} >
    <Paper  elevation={3} >

      <Typography component="div">
        <Box p={3}>
          
        <Typography variant="subtitle2">
          Step 1
          </Typography>

          <Typography variant="h6" >
            Do you want suggestions for activities for the start of an initiative with several parties and do you recognize some or more of the following characteristics?
          </Typography>
            
          
          
          <div className={classes.checkbox}>
            <FormControl style={{marginLeft:"5px"}} component="fieldset" className={classes.formControl}>
                <FormGroup>
                <FormControlLabel style={{marginTop:'10px'}}
                    control={<Checkbox checked={one} onChange={handleChange} name="one" />}
                    label="There are several notions of the direction in which the solution may be found."
                />
                <FormControlLabel style={{marginTop:'10px'}}
                    control={<Checkbox checked={two} onChange={handleChange} name="two" />}
                    label="Multiple parties are involved, which may be organized slightly informally. "
                />
                <FormControlLabel style={{marginTop:'10px'}}
                    control={<Checkbox checked={three} onChange={handleChange} name="three" />}
                    label="The parties agree that there is a – possibly recurring – problem/opportunity."
                />
                <FormControlLabel style={{marginTop:'10px'}}
                    control={<Checkbox checked={four} onChange={handleChange} name="four" />}
                    label="Individual parties are unable to realize a solution. "
                />
                <FormControlLabel style={{marginTop:'10px'}}
                    control={<Checkbox checked={five} onChange={handleChange} name="five" />}
                    label="The intentions, and therefore also the interests, of the stakeholders vary."
                />
                <FormControlLabel style={{marginTop:'10px'}}
                    control={<Checkbox checked={six} onChange={handleChange} name="six" />}
                    label="The participants regard the initiative as risky. "
                />
                <FormControlLabel style={{marginTop:'10px'}}
                    control={<Checkbox checked={seven} onChange={handleChange} name="seven" />}
                    label="There are internal debates in participating organizations about subjects which are relevant for the initiative."
                />
                <FormControlLabel style={{marginTop:'10px'}}
                    control={<Checkbox checked={eight} onChange={handleChange} name="eight" />}
                    label="In de partnering organizations, some of the managers are highly critical of solutions realized elsewhere."
                />
                <FormControlLabel style={{marginTop:'10px'}}
                    control={<Checkbox checked={nine} onChange={handleChange} name="nine" />}
                    label="There is no one responsible for a process design of the initiative."
                />
                </FormGroup>
            </FormControl>
          </div>
          <div className={classes.root}>
                <Button id="proceed" onClick={handleClickProceed} variant="contained" color="primary">
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