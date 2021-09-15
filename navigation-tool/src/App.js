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
import Section14 from './components/Section14';
import Section15 from './components/Section15';
import Section16 from './components/Section16';
import Section17 from './components/Section17';
import Section18 from './components/Section18';
import Section19 from './components/Section19';
import Section20 from './components/Section20';
import Section21 from './components/Section21';
import Section22 from './components/Section22';

import NoRelevance from './components/NoRelevance';
import { useState } from 'react';

import { Container } from '@material-ui/core';

function App() {

  const changeSection = (newSection) => {

    let makeActive;
    
    switch(newSection) {
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
        case 'section14':
        makeActive = <Section14 changeSection={changeSection}/>
        break;
        case 'section15':
        makeActive = <Section15 changeSection={changeSection}/>
        break;
        case 'section16':
        makeActive = <Section16 changeSection={changeSection}/>
        break;
        case 'section17':
          makeActive = <Section17 changeSection={changeSection}/>
          break;
        case 'section18':
          makeActive = <Section18 changeSection={changeSection}/>
          break;
          case 'section19':
          makeActive = <Section19 changeSection={changeSection}/>
          break;
          case 'section20':
            makeActive = <Section20 changeSection={changeSection}/>
            break;
            case 'section21':
            makeActive = <Section21 changeSection={changeSection}/>
            break;
            case 'section22':
            makeActive = <Section22 changeSection={changeSection}/>
            break;
      case 'sectionI':
        makeActive = <SectionI changeSection={changeSection}/>
        break; 
      default:
        makeActive = activeSection;
        break;
    }
      setActiveSection(makeActive); 
  }

  const [activeSection, setActiveSection] = useState(<Start changeSection={changeSection}/>);

  return ( 
    <div className="App">      

              <Menu  changeSection={changeSection} />
        <Container maxWidth="md">
      
        {activeSection}
          
        </Container>
     
    </div>
  );
}

export default App;

