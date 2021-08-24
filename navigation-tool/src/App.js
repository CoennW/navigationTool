import './App.css';

import Menu from './components/Menu';
import Start from './components/Start';
import Step1 from './components/Step1';
import { useState } from 'react';

import { Container,  CssBaseline } from '@material-ui/core';







function App() {

  const [activeSection, setActiveSection] = useState({});
  

  return ( 
    <div className="App">

      <CssBaseline/>

            <Menu />

      <Container maxWidth="md">

       <Step1 />
        
      </Container>
    
    </div>
  );
}

export default App;
