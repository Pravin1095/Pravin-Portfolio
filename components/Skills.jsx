import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { skillarr1,skillarr2,skillarr3 } from "./skillarr";

const SkillsList=({title,skillarray})=>{
  return    <div className="col-lg-4">
  <h3 className='skill-head'>{title}</h3>
   <div>{skillarray.map(
    (skill,index)=>{
    return <div key={index} className='pad-style'><FontAwesomeIcon icon={skill.icon} style={{width:'50px',color:'black'}}></FontAwesomeIcon><h5 className='skill-title'>{skill.title}</h5></div>
   })}</div>
</div>
}

const Skills = () => {
  return (
    <section id="skill">
    <div className='container-fluid'>
      <h2 className="skills-h2">My Skills</h2>
      <div className='row total-skills'>
      <SkillsList title='FrontEnd Technologies' skillarray={skillarr1} />
      <SkillsList title='BackEnd Technologies' skillarray={skillarr2} />
      <SkillsList title='Other Technologies' skillarray={skillarr3} />
      </div>
      </div>
    </section>
  );
}
export default Skills;