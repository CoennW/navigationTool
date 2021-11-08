import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Box, Typography, Slider, ListItem } from '@material-ui/core';
import { Paper } from '@material-ui/core';
import { useState } from 'react';
import Likert from 'react-likert-scale';

import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from '@material-ui/core';
import {List, ListItems} from '@material-ui/core';






const Step1 = (props) => {


  const [support, setSupport] = useState({q1:0, q2: 0});
  const [idea, setIdea] = useState({q1:0, q2: 0, q3: 0, q4: 0, q5: 0, q6: 0, q7: 0, q8: 0});
  const [objectives, setObjectives] = useState({q1:0, q2: 0});
  const [cooperation, setCooperation] = useState({q1:0, q2: 0, q3: 0});
  const [coordination, setCoordination] = useState({q1:0, q2: 0, q3: 0});
  const [approach, setApproach] = useState({q1:0, q2: 0});
  const [specialized, setSpecialized] = useState({q1:0});

  const responses = [
      { value: 1, text: "1" },
      { value: 2, text: "2" },
      { value: 3, text: "3" },
      { value: 4, text: "4" },
      { value: 5, text: "5" }
  ]

  const likertOptionsSupport = {
    q1: {
      question: "Power position",
      onChange: val => {
        setSupport({...support, q1: val.value});
        console.log('yes')
      }
    },
    q2: {
      question: "Stimulating role",
      onChange: val => {
        setSupport({...support, q2: val.value});
      }
    }
  }

  const likertOptionsIdea = {
    q1: {
      question: "About technology",
      onChange: val => {
        setIdea({...idea, q1: val.value});
      }
    },
    q2: {
      question: "About fit with user values",
      onChange: val => {
        setIdea({...idea, q2: val.value});
      }
    },
    q3: {
      question: "About performance requirements",
      onChange: val => {
        setIdea({...idea, q3: val.value});
      }
    },
    q4: {
      question: "About risks (short/long term)",
      onChange: val => {
        setIdea({...idea, q4: val.value});
      }
    },
    q5: {
      question: "About attraction",
      onChange: val => {
        setIdea({...idea, q5: val.value});
      }
    },
    q6: {
      question: "About time to market",
      onChange: val => {
        setIdea({...idea, q6: val.value});
      }
    },
    q7: {
      question: "About knowledge unknowns",
      onChange: val => {
        setIdea({...idea, q7: val.value});
      }
    },
    q8: {
      question: "About form",
      onChange: val => {
        setIdea({...idea, q8: val.value});
      }
    }
  }

  const likertOptionsObjectives = {
    q1: {
      question: "With admission criteria",
      onChange: val => {
        setObjectives({...objectives, q1: val.value});
      }
    },
    q2: {
      question: "With long term intentions",
      onChange: val => {
        setObjectives({...objectives, q2: val.value});
      }
    }
  }

  const likertOptionsCooperation = {
    q1: {
      question: "Input of strengths",
      onChange: val => {
        setCooperation({...cooperation, q1: val.value});
      }
    },
    q2: {
      question: "Input of staff",
      onChange: val => {
        setCooperation({...cooperation, q2: val.value});
      }
    },
    q3: {
      question: "Ability for collaborative style",
      onChange: val => {
        setCooperation({...cooperation, q3: val.value});
      }
    }
  }

  const likertOptionsCoordination = {
    q1: {
      question: "Level of structuring",
      onChange: val => {
        setCoordination({...coordination, q1: val.value});
      }
    },
    q2: {
      question: "Presence of communication routines",
      onChange: val => {
        setCoordination({...coordination, q2: val.value});
      }
    },
    q3: {
      question: "Clearness of planning",
      onChange: val => {
        setCoordination({...coordination, q3: val.value});
      }
    }
  }

  const likertOptionsApproach = {
    q1: {
      question: "Architectural work packages",
      onChange: val => {
        setApproach({...approach, q1: val.value});
      }
    },
    q2: {
      question: "Modular work packages",
      onChange: val => {
        setApproach({...approach, q2: val.value});
      }
    }
  }
  
  const likertOptionsSpecialized = {
    q1: {
      question: "Continuity in personal relationships established",
      onChange: val => {
        setSpecialized({...specialized, q1: val.value});
      }
    }
  }

  useEffect(() => {
    
  }, [specialized])

  function createData(name, risk) {
    return { name, risk };
  }

  const getAvarage = obj => {
    let heights = Object.entries(obj).map(el => el[1]);
    var avg2 = heights.reduce((a,c) => a + c) / heights.length;
    return avg2.toFixed(1);
  }
  
  const rows = [
    createData('Support risk: the will to provide resources proves to be low', support),
    createData('Direction risk: parties harvest mainly driven by own objectives ', idea),
    createData('Target group risk: users do not see a link of the idea with their lives ', objectives),
    createData('Relational risk: parties avoid promises, claim to much, behave asymmetric', cooperation),
    createData('Operational risk: unforeseen coordination costs/failures show up', coordination),
    createData('Composability risk: it becomes difficult to make changes in work packages', approach),
    createData('Orphan risk: a parent organization becomes not aligned', specialized)
  ];
  



    return (
    <Box mt={3} >
    <Paper  elevation={3} >

    
      <Box p={3}>

        <Box textAlign="left" fontSize="h4.fontSize" fontWeight="bold">
          Interim evaluation of the MPI
        </Box>
          
        <Typography variant="body1">
          Evaluate the actual status quo by:
        <Box>
          <Box className="step" variant="subtitle2">Step 1</Box>
          <Typography>Making a consolidation of the MPI by collecting the latest results: decisions made, consolidations so far and intended actions.</Typography>
        </Box>

        <Box>
          <Box className="step" variant="subtitle2">Step 2</Box>
          <Typography>Asking individual participating keypersons of the MPI: </Typography>
          <ul className="ul_evaluation">
                <li>a) What is/are the <span class="underline">actual</span>  objective(s) of their currentactivities?</li> 
                <li>b) What is/are desired outcomes of their <span class="underline">current</span> activities?</li>
              </ul>
        </Box>

        <Box>
          <Box className="step" variant="subtitle2">Step 3a</Box>
          <Typography>Compare the individual answers of question 2a) with the two objectives of the Inception phase. </Typography>
          <ul className="ul_evaluation">
            <li>- to minimize the perceptual distance  between potential partners    
                Individual position by assessing score of key-players: totally not driven by {"<"} 1     2      3      4       5 {">"} totally driven by
            </li>
            <li>- to maximize the chance for success with low toll for participants Individual position by assessing score of key-players: totally not driven by {"<"} 1     2      3      4       5 {">"} totally driven by
            </li>
              </ul>
        </Box>

        <Box>
          <Box className="step" variant="subtitle2">Step 3b</Box>
          <Typography>Compare the individual answers of question 2b) with the following pre-scripted outcomes of the Inception phase.  </Typography>
        </Box>

        
        </Typography>


        <Typography variant="body1">
          Are respondents currently doing work for:
        </Typography>


      

        <Typography variant="body2">


        <Box component={Paper} className="likert__group">
          <Box fontWeight="bold">
            A) Support: person or group in the parent organizations allows/helps the initiative to go on.
          </Box>

          {Object.entries(likertOptionsSupport).map((item, i) => {
            return <Likert key={i} responses={responses} question={item[1].question} onChange={item[1].onChange} />}
            )}
        </Box>

        <Box component={Paper} className="likert__group">
          <Box fontWeight="bold">
            B) The idea: the embryonal solution for a future business product or service (appearing as a drawing, a narrative, a mock-up, a protocept etc... 
          </Box>
          
          {Object.entries(likertOptionsIdea).map((item, i) => {
            return <Likert key={i} responses={responses} question={item[1].question} onChange={item[1].onChange} />}
            )}
        </Box>

        <Box component={Paper} className="likert__group">
        <Box fontWeight="bold">
            C) Fit with objectives: the link between the (characteristics) of the idea and the objectives of the participants. 
            </Box>
          
          {Object.entries(likertOptionsObjectives).map((item, i) => {
            return <Likert key={i} responses={responses} question={item[1].question} onChange={item[1].onChange} />}
            )}
        </Box>

        <Box component={Paper} className="likert__group">
        <Box fontWeight="bold">
          D) The cooperation in the next phase(s): the description of joint pursuit of agreed-on deliverables in a manner corresponding to a shared understanding about contributions and payoffs.   
          </Box>

          {Object.entries(likertOptionsCooperation).map((item, i) => {
            return <Likert key={i} responses={responses} question={item[1].question} onChange={item[1].onChange} />}
            )}
        </Box>

        <Box component={Paper} className="likert__group">
        <Box fontWeight="bold">
          E) The coordination of the next phase(s): the description of the deliberate and orderly alignment or adjustment of partners’ actions to achieve jointly determined deliverables.  
           </Box>
          
          {Object.entries(likertOptionsCoordination).map((item, i) => {
            return <Likert key={i} responses={responses} question={item[1].question} onChange={item[1].onChange} />}
            )}
        </Box>

        <Box component={Paper} className="likert__group">
        <Box fontWeight="bold">
          F) The approach for partitioning of work: the argued division of activities in architectural  or in modular  layout in the next phase(s). 
          </Box>
          
          {Object.entries(likertOptionsApproach).map((item, i) => {
            return <Likert key={i} responses={responses} question={item[1].question} onChange={item[1].onChange} />}
            )}
        </Box>

        <Box component={Paper} className="likert__group">
        <Box fontWeight="bold">
          G) Specialized tasks for the integration with parent organizations: the arrangement for horizontal and vertical representation and communication by specialized persons. 
          </Box>
          
          {Object.entries(likertOptionsSpecialized).map((item, i) => {
            return <Likert key={i} responses={responses} question={item[1].question} onChange={item[1].onChange} />}
            )}
        </Box>
        <Typography variant="body1">
        <ol start="4">
          <li>
          Assess - based on answers to question 1 - in a different color the actual situation in the MPI by scores on the same scales at 3.
          </li>
          <li>
          Evaluate which of the viability components are over- or undervalued
          </li>
          <li>
          Formulate the risk profile of the MPI and choose interventions to adjust for the improvement of viability. 
          </li>
        </ol>
        </Typography>
        
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Risk factor</TableCell>
                <TableCell align="right">Risk</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{getAvarage(row.risk)}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        
        <Typography variant="body1">
        <ol start="8">
          <li>
          Conclude, if necessary, which adjustments must be made for viability including the necessary interventions.
          </li>
          <li>
          Adjust the actual situation.
          </li>
          
        </ol>
        </Typography>
        </Typography>
      

              
        </Box>
     
    
    </Paper>
  </Box>
 
    );
};

export default Step1;