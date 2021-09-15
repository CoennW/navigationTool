import './App.css';

import Menu from './components/Menu';
import Start from './components/Start';
import Step1 from './components/Step1';
import Section1 from './components/Section1';
import Section2 from './components/Section2';
import Section3 from './components/Section3';
import Section4 from './components/Section4';
import Section5 from './components/Section5';
import Section6 from './components/Section6';
import Section7 from './components/Section7';
import Section8 from './components/Section8';
import Section9 from './components/Section9';
import SectionI from './components/SectionI';
import Section11 from './components/Section11';
import Section12 from './components/Section12';
import Section13 from './components/Section13';

import NoRelevance from './components/NoRelevance';
import { useState } from 'react';

import { Container,  CssBaseline } from '@material-ui/core';






 
function App() {

 
  
  const changeSection = (newSection) => {

    let makeActive;
    
    switch('section13') {
      case 'start':
        makeActive = <Start changeSection={changeSection}/>
        break;
      case 'noRelevance':
        makeActive = <NoRelevance changeSection={changeSection}/>
        break;
      case 'step1':
        makeActive = <Step1 changeSection={changeSection}/>
        break;
      case 'section1':
        makeActive = <Section1 changeSection={changeSection}/> 
        break;
      case 'section2':
        makeActive = <Section2 changeSection={changeSection}/>
        break;
      case 'section3':
        makeActive = <Section3 changeSection={changeSection}/>
        break;
      case 'section4':
        makeActive = <Section4 changeSection={changeSection}/>
        break;
      case 'section5':
        makeActive = <Section5 changeSection={changeSection}/>
        break;
      case 'section6':
        makeActive = <Section6 changeSection={changeSection}/>
        break;
      case 'section7':
        makeActive = <Section7 changeSection={changeSection}/>
        break;
        case 'section8':
        makeActive = <Section8 changeSection={changeSection}/>
        break;
      case 'section9':
        makeActive = <Section9 changeSection={changeSection}/>
        break;
        case 'section11':
        makeActive = <Section11 changeSection={changeSection}/>
        break;
        case 'section12':
        makeActive = <Section12 changeSection={changeSection}/>
        break;
        case 'section13':
        makeActive = <Section13 changeSection={changeSection}/>
        break;
      
      case 'sectionI':
        makeActive = <SectionI changeSection={changeSection}/>
        break; 
      default:
        makeActive = <Start changeSection={changeSection} />
        break;
    }
    
      setActiveSection(makeActive);
      
  }

  const [activeSection, setActiveSection] = useState(<Start changeSection={changeSection}/>);

  return ( 
    <div className="App">

      <CssBaseline/>

            <Menu />

      <Container maxWidth="md">
     
      {activeSection}
        
      </Container>
    
    </div>
  );
}

export default App;

