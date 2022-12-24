import React from "react";
import { library } from '@fortawesome/fontawesome-svg-core';

// import your icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloud } from '@fortawesome/free-solid-svg-icons';
import { faHtml5,faCss3Alt,faJs,faReact,faPython,faJava,faClo} from '@fortawesome/free-brands-svg-icons';

function Skills() {
  return (
    <div className="skill">
      <h2 className="skills-h2">My Skills</h2>
      <div className='row total-skills'>
      <div className="col-lg-4">
        <h3>FrontEnd Technologies</h3>
        
        <div className='pad-style'><FontAwesomeIcon icon={faHtml5}></FontAwesomeIcon><h5>HTML</h5></div>
        <div className='pad-style'><FontAwesomeIcon icon={faCss3Alt}></FontAwesomeIcon><h5>CSS</h5></div>
        <div className='pad-style'><FontAwesomeIcon icon={faJs}></FontAwesomeIcon><h5>JavaScript</h5></div>
        <div className='pad-style'><FontAwesomeIcon icon={faReact}></FontAwesomeIcon><h5>React</h5></div>
        
        
      </div>

      <div className="col-lg-4">
        <h3>BackEnd Technologies</h3>
        <div className='pad-style'><FontAwesomeIcon icon={faPython} style='width:50px;'></FontAwesomeIcon><h5>Python</h5></div>
        <div className='pad-style'><FontAwesomeIcon icon={faJava}></FontAwesomeIcon><h5>Java Basics</h5></div>
        
      </div>
      <div className='col-lg-4'>
      <h3>Other Technologies</h3>
        <div className='pad-style'><FontAwesomeIcon icon={faCloud}></FontAwesomeIcon><h5>Google Cloud Basics</h5></div>
      </div>
      </div>
    </div>
  );
}
export default Skills;