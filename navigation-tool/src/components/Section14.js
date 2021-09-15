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
          
          <Box textAlign="left" fontSize="h6.fontSize" fontWeight="bold">
          The Cloister Lane.
          </Box>

          <Box>
          With no real deadlines the emphasis is on the quality of the process and the outcome but with a very selected set of parties. The Cloister Lane accepts risks in viability of cooperation, coordination, partitioning of the work and specialized tasks for integration with parent organizations. 
          </Box>
          
          <Box borderRadius='5px' p={2} component="p" textAlign="left" bgcolor="#FAF2F3">
            <p>Set general interventions</p>
            <ul>
              <li>propose the use of an Inception phase leading to a small cognitive bias gap in participants</li>
              <li>put the seven criteria of viability on the agenda of the Inception phase leading to a best viability assessment</li>
              <li>give Support of parent organizations, Fit with objectives and Idea description emphasis in the beginning leading to motivation to develop ideas about Cooperation, Coordination, Partitioning of work and Communication with parent organizations</li>
              <li>propose common measures for viability (power of partners, short term benefits for fit with objectives, market, technology, form for the Idea, staff and style for cooperation, structure, planning and routines for coordination, modular and architectural for partitioning of work) leading to support for the MPI</li>
              <li>begin to work on trust immediately leading to positive (inter-organizational) collaborative behaviour </li>
              <li>introduce a transaction style based on communal sharing and market pricing leading to sharing objectives, hazards and benefits build on a non-equity relationship and priced inputs  </li>
              <li>make an inventory of what is already available as input for or interpretation of the viability components leading to a shared view of (maybe different) starting points.</li>
              <li>make interventions on the level of objectives, idea, coordination, cooperation right from the start leading to durable agility in the collaborating parties </li>
            </ul>

          </Box>

          <p>Pre-sorted set direct interventions for the Cloister Lane </p>
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
                <Box minHeight="400px" >
                <TabPanel value={value} index={0}>
                
                  <ul>
                    <li>check the selection of (new) parties preventing use of wrong criteria</li>
                    <li>gather in the first meeting existing input for the Inception phase and existing questions about viability leading to motivation to go on if used or answered respectively</li>
                    <li>invite participants representing a branch with immediate interest leading to acceleration in getting support </li>
                    <li>combine a broadly felt problem with an idea that fits the objectives of the potential participants leading to a starting group of innovators/early adapters</li>
                    <li>discuss differences, similarities and consequences with parties leading to legitimation of collaboration  </li>
                    <li>make sure that values are shared leading to efficient cooperation and coordination</li>
                    <li>ask an opposing party which conditions would make them positive leading to a good decision to adapt or drop that party</li>
                    <li>let also relevant people of the parent organizations discuss their objectives and possibilities of the idea reinforcing support for the MPI</li>
                    <li>make sure that characteristics of the idea fit objectives of parties leading to keeping on supporting</li>
                    <li>exchange the needs of participants leading to support for each other </li>
                    <li>allocate work based on the future roles leading to long term support</li>
                    <li>execute a cost-benefit analysis (assumption: because assessing the acquiring of knowledge from this partner leads to insight for (coordination) costs of sharing (tacit) knowledge</li>
                    <li>formulate the attraction in the idea leading to ties for participants </li>
                    <li>apply (pre)tests in the organization of the user leading to temptation to act as partner </li>
                    <li>make sure that the characteristics of the Idea serve the objectives of the parent organizations leading to support for the MPI</li>
                  </ul>  
                  
                </TabPanel>
                <TabPanel value={value} index={1}>
                   
                    <ul>
                    <li>invite users in an early stage leading to participants that are realistic about the idea</li>
                    <li>formulate explicitly why collaboration is worthwhile leading to a resource-based, transaction-cost based or other added value-based (f.e. higher earnings, larger market share, longer survival) enrichment process.</li>
                    <li>Introduce a (collaborative) style of leadership leading to new meanings for the idea to be executed by these parties</li>
                    <li>prevent focus on only one characteristic of the idea leading to right evaluation of their possible contribution to development of the idea</li>
                    <li>keep the idea inside the MPI arena preventing tearing it apart by political wolves</li>
                    <li>make sure on which idea to work {">"} system, process or product (assumption: because this prevents preferences of participants) leading to jointly reasoning from whole to parts</li>
                    <li>elaborate ideas about technology, market, performance, risk, new knowledge and time horizon leading to the best possible assessment of the idea</li>
                    <li>present product or service concepts in elemental descriptive forms (that include verbal stories, verbal metaphors, and physical prototypes) leading to flexibility in changes required due to new technical or market information </li>
                    <li>make sure that the characteristics of the idea are also formulated by users leading to commercial success</li>
                    <li>formulate the characteristics of the idea in line with objectives of parent organizations leading to support in parent organizations</li>
                    <li>use an approach that aims for an organization instead of a product with the possibility for more applications leading to a more viable future of the MPI</li>
                    <li>use boundary objects as prototyping technique leading to bridging knowledge boundaries </li>
                    <li>make sure to deeply understand the basic principles of the idea in connection with future users leading to a more viable idea with little use of working capital</li>
                    </ul>  
                </TabPanel>
                <TabPanel value={value} index={2}>
             
                  <ul>
                    <li>invite organizations to enter the MPI to focus on efficiency benefits</li>
                    <li>put own objectives or problems on the agenda of start-up meeting leading to starting points about conditions for participation and of mutual views of participants’ contributions</li>
                    <li>formulate the movement in terms of objectives, participants, market and technology leading to high identification with the MPI </li>
                    <li>make participants identify objective(s) for the longer term so risks for short term support are compensated</li>
                    <li>make sure that participants understand each other’s gains and pains leading to progress also in difficult times </li>
                    <li>make detailed agreements about the work packages preventing that one of the participants emphasizes mainly his own interests</li>
                    <li>let partners understand their overlap in objectives making initiation and identification almost redundant</li>
                    <li>describe a common market leading to common interest </li>
                  </ul> 
                </TabPanel>
                <TabPanel value={value} index={3}>
                
                  <ul>
                    <li>take time to understand the non-moving starting points of the initiative (assumption: because parties interpret them as positive) leading to unchecked starting points</li>
                    <li>make sure to get people on board who understand customers leading to fulfilment of expectations</li>
                    <li>include big parties (with power/money) {'<>'} small parties (with room to manoeuvre/few conventions) leading to speed </li>
                    <li>guard equality (f.e. in decision making and talk time) during negotiations leading to access to them</li>
                    <li>install a stable working group with technical persons leading to stability in cooperation</li>
                    <li>deploy capacities of parties for the objectives of other participants leading to self-reinforcing effects in collaboration</li>
                    <li>confront another party as if it concerns a stranger because this filters emotional bias leading to clear added value of the party</li>
                  </ul> 
                </TabPanel>
                <TabPanel value={value} index={4}>
               
                  <ul>
                    <li>make joint planning activities leading to ensured order in interdependent activities</li>
                    <li>arrange information sharing procedures, non-contractual commitments, change management approaches, arrangements for penalties leading to less collaboration problems </li>
                    <li>agree within the MPI about allocation of hours because this avoids complicated coupling with money leading to informal and easy decision making about priority, staffing and sharing the growing information</li>
                    <li>develop in co-creation a deliverable at the horizon leading to room for execution from the steering committee</li>
                    <li>converge a business plan with the components of viability including a demonstrator leading to a sensible go- no go decision </li>
                  </ul> 
                </TabPanel>
                <TabPanel value={value} index={5}>
           
                <ul>
                  <li>agree for which IP a NDA is needed leading to fair transactions in future</li>
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

         <Box style={{marginTop: '20px', display: 'flex', justifyContent: 'space-between'}}>
          <a style={{textDecoration: 'none'}} href="../downloads/First_general_interventions.pdf" download="First Set General Interventions" target="_blank">
           <Fab  variant="extended" color="primary" >
              <CloudDownloadIcon style={{marginRight: '10px'}}/>
              interventions in pdf
            </Fab>     
            </a>
            



          </Box>     
              
        </Box>
      </Typography>
    
    </Paper>
  </Box>
 
    );
};

export default Step1;