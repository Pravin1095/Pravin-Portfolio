import React from "react";
<<<<<<< HEAD


// import your icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { skillarr1,skillarr2,skillarr3 } from "./skillarr";

const SkillsList=({title,skillarray})=>{
  return    <div className="col-lg-4">
  <h3>{title}</h3>
  
   <div>{skillarray.map(
    
    (skill,index)=>{
    return <div key={index} className='pad-style'><FontAwesomeIcon icon={skill.icon} style={{width:'50px'}}></FontAwesomeIcon><h5>{skill.title}</h5></div>

   })}</div>
</div>
}
=======
// import your icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {skillarr1,skillarr2,skillarr3} from './skillarr'
>>>>>>> 127ac905dbe83d1e4a4ae77329e1dc4eedecd5d0


const SkillList = ({title,skillarray}) => {
  return <div className="col-lg-4">
    <h3>{title}</h3>
    
    <div>{skillarray.map((skill,index) => {
      {skill}
     return <div key={index} className='pad-style'><FontAwesomeIcon icon={skill.icon} style={{ width: '50px' }}></FontAwesomeIcon><h5>{skill.title}</h5></div>

    })}</div>
  </div>
}
const Skills = () => {
  return (
    <section id="skill">
<<<<<<< HEAD
    <div className='container-fluid'>
   
      <h2 className="skills-h2">My Skills</h2>
      <div className='row total-skills'>
      <SkillsList title='FrontEnd Technologies' skillarray={skillarr1} />
      <SkillsList title='BackEnd Technologies' skillarray={skillarr2} />
      <SkillsList title='Other Technologies' skillarray={skillarr3} />
      </div>
=======
      <div className='container-fluid'>

        <h2 className="skills-h2">My Skills</h2>
        <div className='row total-skills'>
        <SkillList title='FrontEnd Technologies' skillarray={skillarr1} />
        <SkillList title='BackEnd Technologies' skillarray={skillarr2} />
        <SkillList title='Other Technologies' skillarray={skillarr3} />
         
        </div>
>>>>>>> 127ac905dbe83d1e4a4ae77329e1dc4eedecd5d0
      </div>
    </section>
  );
}
export default Skills;