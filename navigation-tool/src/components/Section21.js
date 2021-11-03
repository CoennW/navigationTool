import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import {Box, Typography, Button, Grid } from '@material-ui/core';
import { Paper } from '@material-ui/core';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import Fab from '@material-ui/core/Fab';
import Divider from '@material-ui/core/Divider';


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
        console.log(value);
        props.changeSection(value);
      };     
    return (
    
      
    <Box mt={3} >
    <Paper  elevation={3} >

      <Typography component="div">
        <Box p={3}>
          
          <Box textAlign="left" fontSize="h6.fontSize" fontWeight="bold">
          4A: Reflection   {">"} Support
          </Box>
          (Set of direct interventions for creating individual and common perspectives and potential)

          <Box borderRadius='5px' component="p" p={1} textAlign="left" border="1px dashed #e83946">
          <ul>
            <li>formulate the attraction in the idea leading to ties for participants </li>
            <li>apply (pre)tests in the organization of the user leading to temptation to act as partner </li>
            <li>make sure that the characteristics of the Idea serve the objectives of the parent organizations leading to support for the MPI</li>
          </ul> 

          </Box>
          
          <br/>
          <Box textAlign="left" fontSize="h6.fontSize" fontWeight="bold">
          Intervention Box 4B: Reflection   {">"} Idea
          </Box>
          (Set of direct interventions for creating individual and common perspectives and potential)

          <Box borderRadius='5px' component="p" p={1} textAlign="left" border="1px dashed #e83946">
          <ul>
            <li>elaborate ideas about technology, market, performance, risk, new knowledge and time horizon leading to the best possible assessment of the idea</li>
            <li>present product or service concepts in elemental descriptive forms (that include verbal stories, verbal metaphors, and physical prototypes) leading to flexibility in changes required due to new technical or market information </li>
            <li>make sure that the characteristics of the idea are also formulated by users leading to commercial success </li>
            <li>give users tasks enabling self-reflection leading to real market understanding or co-creation</li>
            <li>reflect as fast as you can with the market leading to a feeling for success or fit </li>
            <li>use boundary objects as prototyping technique leading to bridging knowledge boundaries </li>
            <li>formulate the characteristics of the idea in line with objectives of parent organizations leading to support in parent organizations</li>
            <li>deliver the idea as a demonstrator including statements of performance leading to more viability for the idea</li>
            <li>scope continuously while reflecting on adding new components leading to low cost price </li>
            <li>use an approach that aims for an organization instead of a product with the possibility for more applications leading to a more viable future of the MPI</li>
            <li>make sure to deeply understand the basic principles of the idea in connection with future users leading to a more viable idea with little use of working capital</li>
          </ul> 

          </Box>

          <br/>
          <Box textAlign="left" fontSize="h6.fontSize" fontWeight="bold">
          Intervention Box 4C: Reflection   {">"} Fit with objectives 
          </Box>
          (Set of direct interventions for creating individual and common perspectives and potential)

          <Box borderRadius='5px' component="p" p={1} textAlign="left" border="1px dashed #e83946">
          <ul>
            <li>let partners understand their overlap in objectives making initiation and identification almost redundant</li>
          </ul> 

          </Box>

          <br/>
          <Box textAlign="left" fontSize="h6.fontSize" fontWeight="bold">
          Intervention Box 4D: Reflection   {">"} Cooperation
          </Box>
          (Set of direct interventions for creating individual and common perspectives and potential)

          <Box borderRadius='5px' component="p" p={1} textAlign="left" border="1px dashed #e83946">
          <ul>
            <li>deploy capacities of parties for the objectives of other participants leading to self-reinforcing effects in collaboration</li>
            
          </ul> 

          </Box>

          <br/>
          <Box textAlign="left" fontSize="h6.fontSize" fontWeight="bold">
          Intervention Box 4E:  Reflection   {">"} Coordination
          </Box>
          (Set of direct interventions for creating individual and common perspectives and potential)

          <Box borderRadius='5px' component="p" p={1} textAlign="left" border="1px dashed #e83946">
          <ul>
            <li>elaborate joint planning leading to good timing and order of work divided over several parties</li>
            <li>think about a level of formalization for roles and metrics leading to viable interpretation of coordination</li>
            <li>work out formalized procedures (for problem solving, decision making, conflict resolution, performance evaluations) leading to collaboration in domains that were too sensitive or too risky </li>
            <li>develop in co-creation a deliverable at the horizon leading to room for execution from the steering committee</li>
            <li>ask partners for requirements or other contributions without obligations for or from them leaving the initiative with freedom in control </li>
            <li>put thinking about getting to know each other, contracting, financing and performing also on the agenda leading to integral decision making </li>
          </ul> 

          </Box>

          <br/>
          <Box textAlign="left" fontSize="h6.fontSize" fontWeight="bold">
          Intervention Box 4F: Reflection  {">"} Partitioning of work 
          </Box>
          (Set of direct interventions for creating individual and common perspectives and potential)

          <Box borderRadius='5px' component="p" p={1} textAlign="left" border="1px dashed #e83946">
          <ul>
            <li>agree on the starting points about what to do because this makes you, your parent organization or other initiators seeing the same assignment leading to a shared view on the process</li>
            <li>make work packages for the idea/CBO in order of materials {">"} modules {">"} panel {">"} system {">"} equipment (assumption: because this emphasizes efficiency) leading to the least rework </li>
            <li>think about modular or architectural development leading to different relations and knowledge flows</li>
            
          </ul> 

          </Box>

          <br/>
          <Box textAlign="left" fontSize="h6.fontSize" fontWeight="bold">
          Intervention Box 4G: Reflection   {">"} Specialized tasks 
          </Box>
          (Set of direct interventions for creating individual and common perspectives and potential)

          <Box borderRadius='5px' component="p" p={1} textAlign="left" border="1px dashed #e83946">
          <ul>
            <li>think about how to integrate independent operating of MPI and communication with parent organizations leads to best progress </li>
           
          </ul> 

          </Box>



         {/* <br/>
          <Box fontWeight="bold">
          Do you have a need for other initiating activities for cooperation, coordination, partitioning of work? 
          </Box>
         
          	
           <div className={classes.root}>
                <Button name="btn1" value="section18" id="proceed" onClick={handleClickProceed} variant="contained" color="primary">
                    Yes
                </Button>
                <Button name="btn2" style={{marginLeft:'20px'}} value="section17" id="proceed" onClick={handleClickProceed} variant="contained" color="primary">
                    No
                </Button>
           </div> */ } 

        {/* <Box style={{marginTop: '20px', display: 'flex', justifyContent: 'space-between'}}>
          <a style={{textDecoration: 'none'}} href="../downloads/First_general_interventions.pdf" download="First Set General Interventions" target="_blank">
           <Fab  variant="extended" color="primary" >
              <CloudDownloadIcon style={{marginRight: '10px'}}/>
              interventions in pdf
            </Fab>     
            </a>
            <Button id="proceed" value='section8' onClick={handleClickProceed} variant="text" color="secondary">
                Proceed to next iteration
            </Button>
          </Box> */}
              
        </Box>
      </Typography>
    
    </Paper>
  </Box>
 
    );
};

export default Step1;