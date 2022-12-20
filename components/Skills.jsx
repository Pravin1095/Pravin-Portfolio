import React from "react";

function Skills() {
  return (
    <div className="skill">
      <h2 className="skills-h2">My Skills</h2>

      <div className="total-skills">
        <h3>FrontEnd Technologies</h3>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>React</li>
        </ul>
      </div>

      <div className="total-skills">
        <h3>BackEnd Technologies</h3>
        <ul>
          <li>Python</li>
          <li>MongoDB</li>
          <li>Java</li>
        </ul>
      </div>
    </div>
  );
}
export default Skills;