import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Box, Typography, Slider } from '@material-ui/core';
import { Paper } from '@material-ui/core';
import { useState } from 'react';
import Likert from 'react-likert-scale';







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
        setSupport({...idea, q1: val.value});
      }
    },
    q2: {
      question: "About fit with user values",
      onChange: val => {
        setSupport({...idea, q2: val.value});
      }
    },
    q3: {
      question: "About performance requirements",
      onChange: val => {
        setSupport({...idea, q3: val.value});
      }
    },
    q4: {
      question: "About risks (short/long term)",
      onChange: val => {
        setSupport({...idea, q4: val.value});
      }
    },
    q5: {
      question: "About attraction",
      onChange: val => {
        setSupport({...idea, q5: val.value});
      }
    },
    q6: {
      question: "About time to market",
      onChange: val => {
        setSupport({...idea, q6: val.value});
      }
    },
    q7: {
      question: "About knowledge unknowns",
      onChange: val => {
        setSupport({...idea, q7: val.value});
      }
    },
    q8: {
      question: "About form",
      onChange: val => {
        setSupport({...idea, q8: val.value});
      }
    }
  }

  const likertOptionsObjectives = {
    q1: {
      question: "With admission criteria",
      onChange: val => {
        setSupport({...objectives, q1: val.value});
      }
    },
    q2: {
      question: "With long term intentions",
      onChange: val => {
        setSupport({...objectives, q2: val.value});
      }
    }
  }

  const likertOptionsCooperation = {
    q1: {
      question: "Input of strengths",
      onChange: val => {
        setSupport({...cooperation, q1: val.value});
      }
    },
    q2: {
      question: "Input of staff",
      onChange: val => {
        setSupport({...cooperation, q2: val.value});
      }
    },
    q3: {
      question: "Ability for collaborative style",
      onChange: val => {
        setSupport({...cooperation, q3: val.value});
      }
    }
  }

  const likertOptionsCoordination = {
    q1: {
      question: "Level of structuring",
      onChange: val => {
        setSupport({...coordination, q1: val.value});
      }
    },
    q2: {
      question: "Presence of communication routines",
      onChange: val => {
        setSupport({...coordination, q2: val.value});
      }
    },
    q3: {
      question: "Clearness of planning",
      onChange: val => {
        setSupport({...coordination, q3: val.value});
      }
    }
  }

  const likertOptionsApproach = {
    q1: {
      question: "Architectural work packages",
      onChange: val => {
        setSupport({...approach, q1: val.value});
      }
    },
    q2: {
      question: "Modular work packages",
      onChange: val => {
        setSupport({...approach, q2: val.value});
      }
    }
  }

  
  const likertOptionsSpecialized = {
    q1: {
      question: "Continuity in personal relationships established",
      onChange: val => {
        setSupport({...specialized, q1: val.value});
      }
    }
  }





    return (
    
      
    <Box mt={3} >
    <Paper  elevation={3} >

      
        <Box p={3}>

          <Box textAlign="left" fontSize="h4.fontSize" fontWeight="bold">
          Interim evaluation of the MPI
          </Box>

          
        <Typography variant="body1">
          Are respondents currently doing work for:
        </Typography>

      

        <Typography variant="body2">


        <Box className="likert__group">
          <Typography variant="subtitle2">
            A) Support: person or group in the parent organizations allows/helps the initiative to go on.
          </Typography>

          {Object.entries(likertOptionsSupport).map((item, i) => {
            console.log(item)
            return <Likert key={i} responses={responses} question={item[1].question} />}
            )}

        </Box>

        <Box className="likert__group">
          <Typography variant="subtitle2">
            B) The idea: the embryonal solution for a future business product or service (appearing as a drawing, a narrative, a mock-up, a protocept etc... 
          </Typography>
          
          {Object.entries(likertOptionsIdea).map((item, i) => {
            console.log(item)
            return <Likert key={i} responses={responses} question={item[1].question} />}
            )}
        </Box>

        <Box className="likert__group">
          <Typography variant="subtitle2">
            C) Fit with objectives: the link between the (characteristics) of the idea and the objectives of the participants. 
          </Typography>
          
          {Object.entries(likertOptionsObjectives).map((item, i) => {
            console.log(item)
            return <Likert key={i} responses={responses} question={item[1].question} />}
            )}
        </Box>

        <Box className="likert__group">
          <Typography variant="subtitle2">
          D) The cooperation in the next phase(s): the description of joint pursuit of agreed-on deliverables in a manner corresponding to a shared understanding about contributions and payoffs.   
          </Typography>
          
          {Object.entries(likertOptionsCooperation).map((item, i) => {
            console.log(item)
            return <Likert key={i} responses={responses} question={item[1].question} />}
            )}
        </Box>

        <Box className="likert__group">
          <Typography variant="subtitle2">
          e) The coordination of the next phase(s): the description of the deliberate and orderly alignment or adjustment of partners’ actions to achieve jointly determined deliverables.  
          </Typography>
          
          {Object.entries(likertOptionsCoordination).map((item, i) => {
            console.log(item)
            return <Likert key={i} responses={responses} question={item[1].question} />}
            )}
        </Box>

        <Box className="likert__group">
          <Typography variant="subtitle2">
          f) The approach for partitioning of work: the argued division of activities in architectural  or in modular  layout in the next phase(s). 
          </Typography>
          
          {Object.entries(likertOptionsApproach).map((item, i) => {
            console.log(item)
            return <Likert key={i} responses={responses} question={item[1].question} />}
            )}
        </Box>

        <Box className="likert__group">
          <Typography variant="subtitle2">
          g) Specialized tasks for the integration with parent organizations: the arrangement for horizontal and vertical representation and communication by specialized persons. 
          </Typography>
          
          {Object.entries(likertOptionsSpecialized).map((item, i) => {
            console.log(item)
            return <Likert key={i} responses={responses} question={item[1].question} />}
            )}
        </Box>

      
        
        
        
        
        </Typography>
      

              
        </Box>
     
    
    </Paper>
  </Box>
 
    );
};

export default Step1;