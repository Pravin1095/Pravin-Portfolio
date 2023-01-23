import React from "react";
import NameParent from "./Name.jsx";
import IntroParent from "./Intro.jsx";
import Skills from './Skills.jsx'
import BCarousel from "./BCarousel.jsx";
import Educations from './Education.jsx'
import ContactParent from './Contact.jsx'
import FooterParent from './Footer.jsx'
import Eduarr from './Eduarr.jsx'

import Example from "./OffCanvasNav.jsx";
import Trainee from "./Trainee.jsx";
import Home from "./Home.jsx";
import app_arr from "./apparr.js";
import HobbyParent from "./Hobbies.jsx";

import Router from "react-router-dom"
import Switch from "react-router-dom"
import Route from "react-router-dom"
import Redirect from "react-router-dom"
 




const App = () => {
  return (
    <div className="App">
   <div>{app_arr.map(
      (apps,index)=>
      {
        return <React.Fragment key={index}>
       
         {apps.child}
       
        </React.Fragment>
      }
    )}</div> 
  {/* <Home />
      
      <IntroParent />
      <ControlledCarousel />
      
      <Educations />
      <Trainee />
      <ContactParent />
      <FooterParent /> */}
    </div>
  );
}
export default App;
