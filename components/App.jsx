import React from "react";
import MyHome from "../pages/MyHome.jsx";
import NameParent from "./Name.jsx";
import IntroParent from "./Intro.jsx";
// import Skills from './Skills.jsx'
import BCarousel from "./BCarousel.jsx";
import Educations from './Education.jsx'
// import ContactParent from './Contact.jsx'
import FooterParent from './Footer.jsx'
import Eduarr from './Eduarr.jsx'
import Home from "./RedesignPortfolio/Home.jsx";

import Example from "./OffCanvasNav.jsx";
import Trainee from "./Trainee.jsx";
// import Home from "./MyHome.jsx";
import app_arr from "./apparr.js";
import HobbyParent from "./Hobbies.jsx";
import Project_Clg from "../pages/Project_Clg.jsx";
import Project_Cs_Parent from "../pages/Project_Cs.jsx";
import Project from "../pages/Project.jsx";

import Router from "react-router-dom"
import Switch from "react-router-dom"
import Route from "react-router-dom"
import Redirect from "react-router-dom"
import RedesignPortfolio from "../pages/RedesignPortfolio.jsx";
import Skills from "./RedesignPortfolio/Skills.js";
import Contact from "./RedesignPortfolio/Contact.jsx";
import About from "./RedesignPortfolio/About.jsx";
import { NavButtons, NavFields } from "./RedesignPortfolio/Home.styles.js";
 




const App = () => {
  const navFields = [
  { name: "About Me", id: "about" },
  { name: "Skills", id: "skills" },
  { name: "Hire Me", id: "contact" }
];

const handleScroll = (id) => {
  const element = document.getElementById(id);
  console.log("check element", element)
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth', 
      block: 'start',     
    });
  }
};
  return (
    <div className="App">
    <NavFields>
                    {navFields && navFields.map((navData, index)=>{
                        const isHireButton = navData.name==="Hire Me"
    return <NavButtons onClick={() => handleScroll(navData.id)} highlight={isHireButton} key={index}>{navData.name}</NavButtons>
                    })}
                </NavFields>
    <Home id="home" />
    <About id="about" />
    <Skills id="skills" />
    <Contact id="contact" />
    {/* <RedesignPortfolio /> */}
    {/* <MyHome /> */}
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
