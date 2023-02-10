import React from "react";
import MyHome from "../pages/MyHome.jsx";
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
import Home from "./MyHome.jsx";
import app_arr from "./apparr.js";
import HobbyParent from "./Hobbies.jsx";
import Project_Clg from "../pages/Project_Clg.jsx";
import Project_Cs_Parent from "../pages/Project_Cs.jsx";
import Project from "../pages/Project.jsx";

import Router from "react-router-dom"
import Switch from "react-router-dom"
import Route from "react-router-dom"
import Redirect from "react-router-dom"
 




const App = () => {
  return (
    <div className="App">
    <MyHome />
    {/* <Project /> */}
   {/* <div>{app_arr.map(
      (apps,index)=>
      {
        return <React.Fragment key={index}>
       
         {apps.child}
       
        </React.Fragment>
      }
    )}</div>  */}
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
