import React from "react";
import Name from "./Name.jsx";
import Intro from "./Intro.jsx";
import Skills from './Skills.jsx'
import BCarousel from "./BCarousel.jsx";
import Educations from './Education.jsx'
import Contact from './Contact.jsx'
import Footer from './Footer.jsx'
import Eduarr from './Eduarr.jsx'
import ControlledCarousel from "./RCarousel.jsx";


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';

const App = () => {
  return (
    <div className="App">
      <Name />
      <Intro />
      <Skills />
      {/* <BCarousel /> */}
      <Educations />
      {/* <h2>My Education!</h2>
      <div className='grad-cap'><FontAwesomeIcon icon={faGraduationCap} style={{ width: '10%', height: '5%' }}></FontAwesomeIcon></div> */}
      <ControlledCarousel />
      <Contact />
      <Footer />
    </div>
  );
}
export default App;
