import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { skillarr1, skillarr2, skillarr3 } from "../components/skillarr";
import { faCloud} from '@fortawesome/free-solid-svg-icons';
import { faHtml5, faCss3Alt, faJs, faReact, faPython, faJava} from '@fortawesome/free-brands-svg-icons';
import axios from "axios";
import MyNavbar from '../components/MyNavbar';


let skillurl = 'https://gist.githubusercontent.com/Pravin1095/9a4503f8e93bdb6367470f8f79ebc552/raw/dd1e3e97591acea6d7e8ba2e102ab4e05324c46f/SkillArray.json'

const SkillsList = ({ title, skillarray,skillarray2 }) => {
  {skillarray2.map(
    (s,index)=>{
      <React.Fragment key={index}>
      const s.icon=s.icon
</React.Fragment>
    })}
  
  return <div className="col-lg-4">
    <h3 className='skill-head'>{title}</h3>
    <div>{skillarray2.map(
      (skill, index) => {
        return <div key={index} className='pad-style'><FontAwesomeIcon icon={skill.icon} style={{ width: '50px', color: 'black' }}></FontAwesomeIcon><h5 className='skill-title'>{skill.title}</h5></div>
      })}</div>
  </div>
}

const Skills = () => {

  let [skilljson, setskilljson] = useState([])

  useEffect((
  ) => {
    axios.get(skillurl).then((response) => {
      setskilljson(skilljson=response.data)
    })

  }, []
  )

  return (



    <section id="skill">
    <MyNavbar />
      {/* {console.log(skilljson)}
      {console.log(typeof skilljson)} */}
      {console.log(typeof skilljson.frontend)}
      {console.log(typeof skilljson.backend)}
      {console.log(typeof skilljson.others)}

     
      <div className='container-fluid'>
        <h2 className="skills-h2">My Skills</h2>
        <div className='row total-skills'>
          <SkillsList title='FrontEnd Technologies' skillarray={skilljson.frontend} skillarray2={skillarr1} />
          <SkillsList title='BackEnd Technologies' skillarray={skilljson.backend} skillarray2={skillarr2} />
          <SkillsList title='Other Technologies' skillarray={skilljson.others} skillarray2={skillarr3} />
        </div>
      </div>
    </section>
  );
}
export default Skills;