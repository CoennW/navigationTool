import './App.css';

import Menu from './components/Menu';
import Start from './components/Start';
import Step1 from './components/Step1';
import Section1 from './components/Section1';
import { useState } from 'react';

import { Container,  CssBaseline } from '@material-ui/core';







function App() {

 
  
  const changeSection = (newSection) => {
      setActiveSection(<Step1 />);
      
  }

  const [activeSection, setActiveSection] = useState(<Start changeSection={changeSection}/>);

  return ( 
    <div className="App">

      <CssBaseline/>

            <Menu />

      <Container maxWidth="md">
      <Section1/>
      {activeSection}
        
      </Container>
    
    </div>
  );
}

export default App;
