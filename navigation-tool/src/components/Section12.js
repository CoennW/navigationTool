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
          
          <Box textAlign="left" fontSize="h6.fontSize" fontWeight="bold">
          The Circus Lane.
          </Box>

          <Box>
          In the case of the circus lane there is not much time available, but all persons/parties may ‘perform’ with others ‘in the public’. The Circus Lane accepts risks in viability of the idea, cooperation and partitioning of the work. All the necessary interventions for the Circus Lane are pre-sorted in this section.
          </Box>

          <Typography variant="h6">
          <p>Set general interventions</p>
          </Typography>
           <Box borderRadius='5px' component="p" p={1} textAlign="left" border="1px dashed #e83946">
            
            <ul>
              <li>propose the use of an Inception phase leading to a small cognitive bias gap in participants</li>
              <li>put the seven criteria of viability on the agenda of the Inception phase leading to a best viability assessment</li>
              <li>make an inventory of what is already available as input for or interpretation of the viability components leading to a shared view of (maybe different) starting points</li>
              <li>propose common measures for viability (power of partners, short term benefits for fit with objectives, market, technology, form for the Idea, staff and style for cooperation, structure, planning and routines for coordination, modular and architectural for partitioning of work) leading to support for the MPI</li>
              <li>introduce a transaction style based on communal sharing and market pricing leading to sharing objectives, hazards and benefits build on a non-equity relationship and priced inputs</li>
              <li>give Support of parties, Fit with objectives and Coordination emphasis in the beginning leading to speed and risk taking on Idea description, Cooperation, Partitioning of work and Integration in parties.</li>
            </ul>

          </Box>

          <Typography variant="h6">
          <p>Set direct interventions for The Circus Lane</p>
          </Typography>
            <AppBar position="relative">
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
                <TabPanel value={value} index={0}>
                
                  <ul>
                    <li>check the selection of (new) parties preventing use of wrong criteria</li>
                    <li>invite many parties with useful qualities facilitating a transformation from attendee to supporter</li>
                    <li>scan the five O’s  in the neighbourhood for skills needed making the MPI profit from existing and experienced connections</li>
                    <li>invite parties that are already busy with the item (assumption: because pioneers understand the actual challenges best leading to right priorities for the MPI)</li>
                    <li>make sure that values are shared leading to efficient cooperation and coordination</li>
                    <li>ask an opposing party which conditions would make them positive leading to a good decision to adapt or drop that party</li>
                    <li>let identification interventions be based on a tentative assignment leading to understanding that participation in the MPI is not fixed either</li>
                    <li>execute a cost-benefit analysis (assumption: because assessing the acquiring of knowledge from this partner leads to insight for (coordination) costs of sharing (tacit) knowledge </li>
                    <li>make sure that the characteristics of the Idea serve the objectives of the parent organizations leading to support for the MPI</li>
                    <li>demand that partner organizations are very active in contributing with finances, machines, room and/or staff leading to an understanding of the level of support  </li>
                  </ul>  
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <ul>
                      <li>invite users in an early stage leading to participants that are realistic about the idea</li>
                      <li>ask around at universities (assumption: because publications show persons with in-dept knowledge) leading to good selection</li>
                      <li>keep the idea inside the MPI arena preventing tearing it apart by political wolves </li>
                      <li>elaborate ideas about technology, market, performance, risk, new knowledge and time horizon leading to the best possible assessment of the idea</li>
                    </ul>  
                </TabPanel>
                <TabPanel value={value} index={2}>
                  <ul>
                    <li>invite organizations to enter the MPI to focus on efficiency benefits</li>
                    <li>put own objectives or problems on the agenda of start-up meeting leading to starting points about conditions for participation and of mutual views of participants’ contributions</li>
                    <li>formulate the movement in terms of objectives, participants, market and technology leading to high identification with the MPI </li>
                    <li>review patents leading to the right focus of participants</li>
                    <li>make detailed agreements about the work packages preventing that one of the participants emphasizes mainly his own interests</li>
                    <li>describe a common market leading to common interest</li>
                  </ul> 
                </TabPanel>
                <TabPanel value={value} index={3}>
                  <ul>
                  	<li>combine organizational strengths leading to competitive advantages </li>
                    <li>make an inventory of competences and needs of parties leading to good arrangements to cooperate </li>
                    <li>guard equality (f.e. in decision making and talk time) during negotiations leading to access to them</li>
                    <li>implement collaborative leadership leading to facilitation of tacit learning </li>
                    <li>deploy capacities of parties for the objectives of other participants leading to self-reinforcing effects in collaboration</li>
                    <li>make sure that capacities are available (assumption: because this is mostly responsibility of lower managers leading to too optimistic views of higher managers)</li>
                  </ul> 
                </TabPanel>
                <TabPanel value={value} index={4}>
                  <ul>
                    <li>use non-binding contracts leading a basis for interpersonal trust</li>
                    <li>start immediately with building trust preventing excessive contractual formality </li>
                    <li>make sure that participants identify themselves with the MPI and with their parent organizations leading to better assessment of partners behaviour</li>
                    <li>choose high frequency communication with rich media leading to a high degree of inter-organizational learning and low opportunistic behavior</li>
                    <li>introduce structures, routines and planning leading to efficient coordination of activities</li>
                    <li>make joint planning activities leading to ensured order in interdependent activities</li>
                    <li>discriminate between important and not important issues leading to less inter-party rivalry and less coordination costs</li>
                    <li>set up the sharing of information including feedback leading to the best formalization level</li>
                    <li>introduce routines about gathering information about feasibility leading to availability and ownership in the MPI</li>
                    <li>make agreements based on first experiences with the other participants because if one sees no reason for a formal contract this leads to optimal flexibility for adjudgments</li>
                    <li>elaborate joint planning leading to good timing and order of work divided over several parties</li>
                    <li>work out formalized procedures (for problem solving, decision making, conflict resolution, performance evaluations) leading to collaboration in domains that were too sensitive or too risky </li>
                    <li>ask partners for requirements or other contributions without obligations for or from them leaving the initiative with freedom in control</li>
                  </ul> 
                </TabPanel>
                <TabPanel value={value} index={5}>
                <ul>
                  <li>make sure to synchronize actions of partners leading continuously to joint starting points</li>
                  <li>transfer own work protocols to work packages and common tools to all participants because it supports action and interaction leading to higher ties of participants</li>
                </ul>
                </TabPanel>
                <TabPanel value={value} index={6}>
                <ul>
                  <li>in case of subsidy ask also the same amount of parties’ responsibles (assumption: because it explicates the willingness) leading to first selection criterion between parties</li>
                  <li>use confirmation, selection, transformation, toleration or non-confirmation as tactics leading to a fit in the parent organizations </li>
                  <li>think about how to integrate independent operating of MPI and communication with parent organizations (assumption: because sidestepping communication routines of parents) leads to best progress</li>
                  <li>deliver at the end of the Inception phase a stage gate document for ‘the Idea gate’ with the elaborated viability criteria so perceptual distance is minimized between supporters becoming aware of the viability of the initiative leading to a shared go or no-go decision for continuation</li>
                  <li>make the relevant player official by installing reporting lines (assumption: because this creates responsibility) leading to continuous support</li>
                </ul>
                </TabPanel>
                <TabPanel value={value} index={7}>
                <ul>
                  <li>use boundary crossing activities leading to facilitation of mutual learning (general)</li>
                  <li>use visualization, ethnography, collaborative sensemaking, assumption surfacing, field experiments to formulate objectives/ideas leading to leverage of differences (initiation)</li>
                  <li>give priority to low risk activities leading to positive interaction (initiation)</li>
                  <li>make sure participants share a ‘dream’ or (identification)</li>
                  <li>introduce a rule that everybody can step out without sanction leading to relaxed presence (exchange)</li>
                  <li>install a learning attitude combined with a written learning history leading to sharing of new discoveries and insights (exchange)</li>
                  <li>work with a visualized idea leading to synchronization and an equal starting point for next activities (reflection)</li>
                  <li>make go/no-go at a kind of Idea gate formally (assumption: because this forces parties to consider their role seriously) leading to serious support</li>
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
            



          </Box>*/ }    
              
        </Box>
      </Typography>
    
    </Paper>
  </Box>
 
    );
};

export default Step1;