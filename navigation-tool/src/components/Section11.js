import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import {Box, Typography} from '@material-ui/core';
import { Paper } from '@material-ui/core';
import { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
      extendedIcon: {
        marginRight: theme.spacing(1),
      },
      h6: {
        margin: "0px"
      }
      
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
          The Fast Lane
          </Box>

          <Box>
          This lane has not much time available and a very limited number of persons gets access. These necessary limitations allow a higher risk profile for support, fit with objectives, coordination and specialized tasks for integration with parent organisations. All the necessary interventions are pre-sorted in this section.
          </Box>

          <Typography variant="h6">
          <p>Set general interventions</p>
          </Typography>
          <Box borderRadius='5px' component="p" p={1} textAlign="left" border="1px dashed #e83946">
            
            <ul>
              <li>propose the use of an Inception phase leading to a small cognitive bias gap in participants</li>
              <li>propose common measures for viability (power and actual role for support of partners, short term and long-term benefits for fit with objectives, market, performance requirements, technology, attraction and form for the Idea, staff, strength and style for cooperation, structure, planning and routines for coordination, modular and architectural for partitioning of work) leading to support for the MPI</li>
              <li>begin to work on trust immediately leading to positive (inter-organizational) collaborative behaviour (see for direct interventions concerning trust </li>
              <li>introduce a transaction style based on communal sharing and market pricing leading to sharing objectives, hazards and benefits build on a non-equity relationship and priced inputs</li>
              <li>give reflection on Idea description and identification/exchange of Cooperation emphasis in the beginning leading to speed and risk taking on Support, Fit with objectives, Coordination and Communication with parent organizations</li>
            </ul>

          </Box>

          <Typography variant="h6">
          <p>Set direct interventions for the Fast Lane</p>
          </Typography>
            <AppBar style={{zIndex: 0}} position="relative">
                  <Tabs value={value}  onChange={handleTabs} scrollButtons="auto" variant="scrollable">
                    <Tab label="Support"></Tab>
                    <Tab label="Idea and it’s characteristics"></Tab>
                    <Tab label="Fit with objectives"></Tab>
                    <Tab label="Cooperation next phase(s)"></Tab>
                    <Tab label="Coordination of next phase(s)"></Tab>
                    <Tab label="Partitioning of work"></Tab>
                    <Tab label="Specialized tasks for integration"></Tab>
                    <Tab label="Set indirect interventions"></Tab>
                  </Tabs>
                </AppBar>
                <Box minHeight="400px">
                <TabPanel value={value} index={0} >
                
                
                  <ul>
                    <li>check the selection of (new) parties preventing use of wrong criteria</li>
                    <li>gather in the first meeting existing input for the Inception phase and existing questions about viability leading to motivation to go on if used or answered respectively</li>
                    <li>combine a broadly felt problem with an idea that fits the objectives of the potential participants leading to a starting group of innovators/early adapters</li>
                    <li>make sure that values are shared leading to efficient cooperation and coordination</li>
                    <li>let also relevant people of the parent organizations discuss their objectives and possibilities of the idea reinforcing support for the MPI</li>
                    <li>ask attendees to admit what they do not know leading to the right parties entering</li>
                    <li>allocate work based on the future roles leading to long term support</li>
                    <li>demand that partner organizations are very active in contributing with finances, machines, room and/or staff leading to an understanding of the level of support </li>
                  </ul>  
                
                </TabPanel>
                <TabPanel value={value} index={1}>
                   
                    <ul>
                      <li>invite users in an early stage leading to participants that are realistic about the idea</li>
                      <li>identify persons linked to the (decision) gates, persons linked to appliance and future owners of the know-how leading to the best first input for the idea</li>
                      <li>keep the idea inside the MPI arena preventing tearing it apart by political wolves </li>
                      <li>elaborate ideas about technology, market, performance, risk, new knowledge and time horizon leading to the best possible assessment of the idea</li>
                      <li>reflect as fast as you can with the market leading to a feeling for success or fit </li>
                      <li>use boundary objects as prototyping technique leading to bridging knowledge boundaries</li>
                      <li>formulate the characteristics of the idea in line with objectives of parent organizations leading to support in parent organizations</li>
                      <li>invert ingredients of parties’ practices in something new leading to innovative applications</li>
                    </ul>  
                </TabPanel>
                <TabPanel value={value} index={2}>
               
                  <ul>
                    <li>invite organizations to enter the MPI to focus on efficiency benefits</li>
                    <li>put own objectives or problems on the agenda of start-up meeting leading to starting points about conditions for participation and of mutual views of participants’ contributions</li>
                    <li>formulate the movement in terms of objectives, participants, market and technology leading to high identification with the MPI </li>
                    <li>make participants identify objective(s) for the longer term so risks for short term support are compensated</li>
                    <li>review patents (assumption: position of competitors become clear) leading to the right focus of participants</li>
                    <li>make detailed agreements about the work packages preventing that one of the participants emphasizes mainly his own interests</li>
                  </ul> 
                </TabPanel>
                <TabPanel value={value} index={3}>
               
                  <ul>
                    <li>invite staff relevant from a customer point of view leading to fulfilling expectations of customers</li>
                    <li>invite device builders and end-users with pre-competitive interests for the same market</li>
                    <li>make sure to get people on board who understand customers leading to fulfilment of expectations</li>
                    <li>combine organizational strengths leading to competitive advantages </li>
                    <li>choose parties that add value and speed by your first appraisals leading to the possibility of better evaluations during later actions</li>
                    <li>be very explicit on criteria for staff (brilliant, gritty) leading to deep understanding of topics</li>
                    <li>make the availability of staff, strengths and typical styles clear leading to realistic cooperation in activities</li>
                    <li>treat input of mother organizations as trade goods leading to fair reciprocity in collaboration </li>
                    <li>install a stable working group with technical persons leading to stability in cooperation</li>
                    <li>make supporters commit themselves for a long active role leading to low circulation of other persons in and around the MPI</li>
                    <li>deploy capacities of parties for the objectives of other participants leading to self-reinforcing effects in collaboration</li>
                    <li>take participants away from their normal job so they can work dedicated on the assignment leading to less distraction</li>
                    <li>make sure that capacities are available (assumption: because this is mostly responsibility of lower managers leading to too optimistic views of higher managers)</li>
                  </ul> 
                </TabPanel>
                <TabPanel value={value} index={4}>
                
                  <ul>
                    <li>arrange immediately coordination of change - and conflict management as well in decision making leading to growth of trust </li>
                    <li>use non-binding contracts leading a basis for interpersonal trust</li>
                    <li>•	select key persons with less strict ties in the parent organizations leading to less hindering dependencies for the MPI</li>
                    <li>introduce structures, routines and planning leading to efficient coordination of activities</li>
                    <li>arrange information sharing procedures, non-contractual commitments, change management approaches, arrangements for penalties leading to less collaboration problems </li>
                    <li>agree within the MPI about allocation of hours because this avoids complicated coupling with money leading to informal and easy decision making about priority, staffing and sharing the growing information</li>
                    <li>elaborate joint planning leading to good timing and order of work divided over several parties</li>
                    <li>develop in co-creation a deliverable at the horizon leading to room for execution from the steering committee</li>
                    <li>create time and money budgets including delegated authority on MPI level leading to high tempo proceedings</li>
                    <li>create a select group for decision making about formalization leading to a restricted dependency of shareholders</li>
                  </ul> 
                </TabPanel>
                <TabPanel value={value} index={5}>
                
                <ul>
                  <li>agree on the starting points about what to do because this makes you, your parent organization or other initiators seeing the same assignment leading to a shared view on the process</li>
                  <li>make work packages for the idea/CBO in order of materials  modules  panel  system  equipment (assumption: because this emphasizes efficiency) leading to the least rework</li>
                  <li>think about modular or architectural development (assumption: because this influences development of ties between partners) leading to different relations and knowledge flows</li>
                  <li>transfer own work protocols to work packages and common tools to all participants because it supports action and interaction leading to higher ties of participants</li>
                </ul>
                </TabPanel>
                <TabPanel value={value} index={6}>
                
                <ul>
                  <li>deliver at the end of the Inception phase a stage gate document for ‘the Idea gate’ with the elaborated viability criteria so perceptual distance is minimized between supporters becoming aware of the viability of the initiative leading to a shared go or no-go decision for continuation</li>
                </ul>
                </TabPanel>
                <TabPanel value={value} index={7}>
               
                <ul>
                  <li>have regular and systematic interaction using rich media ties leading to the working up of trust (initiation)</li>
                  <li>make sure participants share a ‘dream’ or (identification)</li>
                  <li>show a problem caused by an outside party leading to focus within the group (identification)</li>
                  <li>promote (initial) face to face contacts and shared cyber spaces leading to openness (exchange)</li>
                  <li>organize the learnings through accessible files leading to progressive insights for all (exchange)</li>
                  <li>beware of longing for formalization and details leading to spending a lot of indirect hours (exchange)</li>
                  <li>use boundary crossing activities leading to facilitation of mutual learning (general)</li>
                </ul>
                </TabPanel>
                </Box>
            
                
            

           

          

                

          	
          {/* <div className={classes.root}>
                <Button name="btn1" value="section7" id="proceed" onClick={handleClickProceed} variant="contained" color="primary">
                    Yes
                </Button>
                <Button name="btn2" style={{marginLeft:'20px'}} value="section16" id="proceed" onClick={handleClickProceed} variant="contained" color="primary">
                    No
                </Button>
           </div>   */}

         {/*<Box style={{marginTop: '20px', display: 'flex', justifyContent: 'space-between'}}>
          <a style={{textDecoration: 'none'}} href="../downloads/First_general_interventions.pdf" download="First Set General Interventions" target="_blank">
           <Fab  variant="extended" color="primary" >
              <CloudDownloadIcon style={{marginRight: '10px'}}/>
              interventions in pdf
            </Fab>     
            </a>
          </Box> */ }   
              
        </Box>
      </Typography>
    
    </Paper>
  </Box>
 
    );
};

export default Step1;