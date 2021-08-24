import './App.css';

import Menu from './modules/Menu'

import { Container, Box, CssBaseline,Typography } from '@material-ui/core';

import { Paper } from '@material-ui/core';





function App() {


  

  return ( 
    <div className="App">
      <CssBaseline/>

            <Menu/>

      <Container maxWidth="md">

       
        <Box mt={3} >
          <Paper  elevation={3} >

            <Typography component="div" p={2}>
              <Box p={1.5}>
                <Box  textAlign="left" fontSize="h6.fontSize">
                  Ambitioni dedisse scripsisse iudicaretur. Cras mattis iudicium purus sit amet fermentum.
                  Donec sed odio operae, eu vulputate felis rhoncus.
                </Box>
                <Box textAlign="left" >
                  Left aligned text.
                </Box>
              </Box>
            </Typography>
          
          </Paper>
        </Box>
        
       
      </Container>
    
    </div>
  );
}

export default App;
