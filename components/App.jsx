import React from "react";
import Name from "./Name.jsx";
import Intro from "./Intro.jsx";
import BCarousel from "./BCarousel.jsx";
import Education from './Education.jsx'
import Contact from './Contact.jsx'
import Contact2 from './Contact2.jsx'

import {FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGraduationCap } from '@fortawesome/free-solid-svg-icons';

function App() {
  return (
    <div className="App">
      <Name />
      <Intro />
      <BCarousel />

      <h2>My Education!</h2>
     <div className='grad-cap'><FontAwesomeIcon icon={faGraduationCap} style={{ width:'10%',height:'5%'}}></FontAwesomeIcon></div>
      <Education
      Link='https://www.salemholycross.com/'
      Institute='Holy Cross Matriculation Higher Secondary School'
      Programme='-School'
      Year='2006-2018' />
      <Education
      Link='https://www.sastra.edu/'
      Institute='SASTRA Deemed To Be University'
      Programme='-B.Tech Mechanical Engineering'
      Year='2018-2022' />
      <Contact />
      <Contact2 />
    </div>
  );
}
export default App;
