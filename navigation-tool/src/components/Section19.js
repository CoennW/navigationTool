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
          2A: Identification {">"} Support
          </Box>
          (Set of direct interventions for understanding each other and legitimize co-existence in a MPI)

          <Box borderRadius='5px' component="p" p={1} textAlign="left" border="1px dashed #e83946">
          <ul>
            <li>discuss differences, similarities and consequences with parties leading to legitimation of collaboration  </li>
            <li>make sure that values are shared leading to efficient cooperation and coordination</li>
            <li>ask an opposing party which conditions would make them positive leading to a good decision to adapt or drop that party</li>
            <li>let also relevant people of the parent organizations discuss their objectives and possibilities of the idea reinforcing support for the MPI</li>
            <li>let identification interventions be based on a tentative assignment leading to understanding that participation in the MPI is not fixed either</li>
            <li>make sure that characteristics of the idea fit objectives of parties leading to keeping on supporting </li>
            <li>give an end-user possibility for in-kind support leading to be allowed to act as partner</li>
            <li>ask attendees to admit what they do not know leading to the right parties entering </li>
            <li>exchange the needs of participants leading to support for each other </li>
          </ul> 

          </Box>
          
          <br/>
          <Box textAlign="left" fontSize="h6.fontSize" fontWeight="bold">
          Intervention Box 2B: Identification {">"} Idea
          </Box>
          (Set of direct interventions for understanding each other and legitimize co-existence in a MPI)

          <Box borderRadius='5px' component="p" p={1} textAlign="left" border="1px dashed #e83946">
          <ul>
            <li>formulate explicitly why collaboration is worthwhile leading to a resource-based, transaction-cost based or other added value-based (f.e. higher earnings, larger market share, longer survival) enrichment process.</li>
            <li>Introduce a (collaborative) style of leadership leading to new meanings for the idea to be executed by these parties</li>
            <li>prevent focus on only one characteristic of the idea leading to right evaluation of their possible contribution to development of the idea</li>
            <li>identify persons linked to the (decision) gates, persons linked to appliance and future owners of the know-how </li>
            <li>leading to the best first input for the idea</li>
          </ul> 

          </Box>

          <br/>
          <Box textAlign="left" fontSize="h6.fontSize" fontWeight="bold">
          Intervention Box 2C: Identification {">"} Fit with objectives 
          </Box>
          (Set of direct interventions for understanding each other and legitimize co-existence in a MPI)

          <Box borderRadius='5px' component="p" p={1} textAlign="left" border="1px dashed #e83946">
          <ul>
            <li>put own objectives or problems on the agenda of start-up meeting leading to starting points about conditions for participation and of mutual views of participants’ contributions</li>
            <li>formulate the movement in terms of objectives, participants, market and technology leading to high identification with the MPI </li>
            <li>make participants identify objective(s) for the longer term so risks for short term support are compensated</li>
            <li>review patents leading to the right focus of participants</li>
          </ul> 

          </Box>

          <br/>
          <Box textAlign="left" fontSize="h6.fontSize" fontWeight="bold">
          Intervention Box 2D: Identification {">"} Cooperation
          </Box>
          (Set of direct interventions for understanding each other and legitimize co-existence in a MPI)

          <Box borderRadius='5px' component="p" p={1} textAlign="left" border="1px dashed #e83946">
          <ul>
            <li>make sure to get people on board who understand customers leading to fulfilment of expectations</li>
            <li>combine organizational strengths leading to competitive advantages </li>
            <li>include big parties (with power/money) {"<>"} small parties (with room to maneuver/few conventions) leading to speed </li>
            <li>make the professionalism of parties visible leading to speed in activities </li>
            <li>make sure that the idea connects with the superordinate objectives of the branch so participants from that branch become willing to contribute  </li>
            <li>choose parties that add value and speed by your first appraisals leading to the possibility of better evaluations during later actions</li>
            <li>be very explicit on criteria for staff ({">"} brilliant, gritty) leading to deep understanding of topics </li>
          </ul> 

          </Box>

          <br/>
          <Box textAlign="left" fontSize="h6.fontSize" fontWeight="bold">
          Intervention Box 2E:  Identification {">"} Coordination
          </Box>
          (Set of direct interventions for understanding each other and legitimize co-existence in a MPI)

          <Box borderRadius='5px' component="p" p={1} textAlign="left" border="1px dashed #e83946">
          <ul>
            <li>make sure that participants identify themselves with the MPI and with their parent organizations leading to better assessment of partners behaviour</li>
            <li>select key persons with less strict ties in the parent organizations leading to less hindering dependencies for the MPI </li>
          </ul> 

          </Box>

          <br/>
          <Box textAlign="left" fontSize="h6.fontSize" fontWeight="bold">
          Intervention Box 2F: Identification {">"} Partitioning of work 
          </Box>
          (Set of direct interventions for understanding each other and legitimize co-existence in a MPI)

          <Box borderRadius='5px' component="p" p={1} textAlign="left" border="1px dashed #e83946">
          <ul>
            <li>agree on modular work packages for deliverables to come leading to less coordination effort</li>
            <li>agree for which IP a NDA is needed leading to fair transactions in future</li>
          </ul> 

          </Box>

          <br/>
          <Box textAlign="left" fontSize="h6.fontSize" fontWeight="bold">
          Intervention Box 2G: Identification {">"} Specialized tasks 
          </Box>
          (Set of direct interventions for understanding each other and legitimize co-existence in a MPI)

          <Box borderRadius='5px' component="p" p={1} textAlign="left" border="1px dashed #e83946">
          <ul>
            <li>organize decision making with parent organizations only about main issues leading to support for picking up the role of stakeholder</li>
            <li>in case of subsidy ask also the same amount of parties’ responsibles leading to first selection criterion between parties</li>
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