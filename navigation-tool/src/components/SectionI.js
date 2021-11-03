import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import {Box, Typography, Button, Grid } from '@material-ui/core';
import { Paper } from '@material-ui/core';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import Fab from '@material-ui/core/Fab';


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



    const handleClickProceed = (event) => {
        let value = event.currentTarget.value;
        props.changeSection(value);
      };
    
      
      

    return (
    
      
    <Box mt={3} >
    <Paper  elevation={3} >

      <Typography component="div">
        <Box p={3}>
          
          <Box mb={1} textAlign="left" fontSize="h4.fontSize" fontWeight="bold">
          Indirect interventions
          </Box>

          <Box>
          After the (selection of the) interventions are finished, 
          <Box component='span' color="primary.info"> consolidate the output before going to Section 8 for the next iterations </Box>
           now the MPI has finished 
          its first set of activities and goes on in the Inception phase. 
          </Box>

          <Box mt={4} textAlign="left" fontSize="h6.fontSize" fontWeight="bold">
          Section I.1: helping initiation
          </Box>
          

          <Box borderRadius='5px' component="p" p={1} textAlign="left" border="1px dashed #e83946">
          <ul>
            <li>create a real safe environment, even if the possibility for exit is arranged leading to better cooperation</li>
            <li>use visualization, ethnography, collaborative sensemaking, assumption surfacing or field experiments to formulate objectives/ideas leading to leverage of differences </li>
            <li>organize network meetings leading to invitation of the best participants</li>
          </ul> 

          </Box>
          

          <Box mt={4} textAlign="left" fontSize="h6.fontSize" fontWeight="bold">
          Section I.2: helping identification
          </Box>
          

          <Box borderRadius='5px' component="p" p={1} textAlign="left" border="1px dashed #e83946">
          <ul>
            <li>make sure that participants share ‘a dream’ leading to getting along</li>
            <li>let parties meet informally leading to better cooperation</li>
            <li>bring competences for creating a MPI on board preventing wrong items in this precontractual phase</li>
            <li>use methods as mental simulation or benefit comparison leading to support for collaboration with these parties</li>
            <li>show a problem caused by an outside party leading to focus within the group</li>
            <li>obtain references from a third party leading to explicit experiences help to assess future support</li>
            <li>circumvent tendering by creation of collaboration contracts leading to optimalization instead of sub-optimalization and hierarchy</li>
          </ul> 

          </Box>
          

          <Box mt={4} textAlign="left" fontSize="h6.fontSize" fontWeight="bold">
          Section I.3: helping exchange
          </Box>
          

          <Box borderRadius='5px' component="p" p={1} textAlign="left" border="1px dashed #e83946">
          <ul>
            <li>promote initial face to face contacts and shared cyber spaces leading to openness</li>
            <li>organize the learnings through accessible files leading to progressive insight for all</li>
            <li>use customer visit teams, lead user analysis or focus groups to enrich the market/performance aspect of the idea leading to common formulations</li>
            <li>let no one party gets the biggest influence on the development leading to weakening ties of that party with the other parties</li>
            <li>introduce a rule that everybody can step out without sanction leading to relaxed presence</li>
            <li>make the professionalism of parties visible leading to speed in activities</li>
            <li>create a platform with residents (breakfast session, workshop, exploring meeting, idea generation) leading to higher support</li>
            <li>organize communication outside-in leading to positive image of the MPI</li>
            <li>beware for longing for formalization and details leading to spending a lot of indirect hours</li>
            <li>install a learning attitude combined with a written learning history leading to sharing of new discoveries and insights</li>
            <li>make launching customer act as informal principal leading to common focus</li>
            <li>guard equality (f.e. in decision making and talk time) during negotiations leading to access to them</li>
          </ul> 

          </Box>
          

          <Box mt={4} textAlign="left" fontSize="h6.fontSize" fontWeight="bold">
          Section I.4: helping reflection
          </Box>
          

          <Box borderRadius='5px' component="p" p={1} textAlign="left" border="1px dashed #e83946">
          <ul>
            <li>speak out about clashes leading to go on when it gets rough</li>
            <li>point at concurrent initiatives leading to enrichment of the MPI</li>
            <li>work with a visualized idea leading to synchronization and an equal starting point for next activities</li>
            <li>use methods as imagery, storytelling, metaphors, analogies and assumption surfacing leading to new enrichments</li>
            <li>stretch from technology to market model leading to realistic enrichment</li>
            <li>formulate abstract business case and cost estimates leading to realistic enrichment</li>
          </ul> 

          </Box>
          

          <Box mt={4} textAlign="left" fontSize="h6.fontSize" fontWeight="bold">
          Section I.5: helping conversion
          </Box>
          

          <Box borderRadius='5px' component="p" p={1} textAlign="left" border="1px dashed #e83946">
          <ul>
            <li>formulate the relation of objectives and the idea of the MPI in the Intention Agreement leading to taking each other in account</li>
            <li>make go/no-go at a kind of Idea gate formally leading to serious support</li>
          </ul> 

          </Box>
          
          






         
         
      
          {/* <div className={classes.root}>
                <Button name="btn1" value="section7" id="proceed" onClick={handleClickProceed} variant="contained" color="primary">
                    Yes
                </Button>
                <Button name="btn2" style={{marginLeft:'20px'}} value="section16" id="proceed" onClick={handleClickProceed} variant="contained" color="primary">
                    No
                </Button>
           </div>   */}

         
          {/* <a style={{textDecoration: 'none'}} href="../downloads/First_general_interventions.pdf" download="First Set General Interventions" target="_blank">
           <Fab  variant="extended" color="primary" >
              <CloudDownloadIcon style={{marginRight: '10px'}}/>
              interventions in pdf
            </Fab>     
            </a> */}
            <Button id="proceed" value='section8' onClick={handleClickProceed} variant="text" color="secondary">
                Proceed to next iteration
            </Button>
              
              
        </Box>
      </Typography>
    
    </Paper>
  </Box>
 
    );
};

export default Step1;