import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { skillarr1, skillarr2, skillarr3 } from "../components/skillarr";
import { faCloud} from '@fortawesome/free-solid-svg-icons';
import { faHtml5, faCss3Alt, faJs, faReact, faPython, faJava} from '@fortawesome/free-brands-svg-icons';
import axios from "axios";
import Navbar from '../components/MyNavbar';


const skillurl = 'https://gist.githubusercontent.com/Pravin1095/9a4503f8e93bdb6367470f8f79ebc552/raw/a42eff38b8337f9279a5f17f1bc4a9812c03ec82/SkillArray.json'

const SkillsList = ({ title, skillarray }) => {
  return <div className="col-lg-4">
    <h3 className='skill-head'>{title}</h3>
    <div>{skillarray.map(
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
      setskilljson(response.data)
    })

  }, []
  )

  return (



    <section id="skill">
    <Navbar className='skill-nav' />
      {console.log(skilljson)}
      {console.log(typeof skilljson)}
      {console.log(skilljson.frontend)}
      {console.log(skilljson.backend)}
      {console.log(skilljson.others)}

     
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