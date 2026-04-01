import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { skillarr1, skillarr2, skillarr3 } from "./data/skillsData";
import { IndividualSkill, IndividualSkillContainer, IndividualSkillList, MySkills, SkillContainer, SkillHeading, SkillListContainer, SkillTitle } from "./Skills.styles";

const SkillsList=({title,skillarray})=>{
  return    <IndividualSkillList>
  <SkillHeading>{title}</SkillHeading>
   <IndividualSkillContainer>{skillarray.map(
    (skill,index)=>{
    return <IndividualSkill key={index}><FontAwesomeIcon icon={skill.icon} style={{width:'50px', height: "50px",color:'#C4C4C4'}}></FontAwesomeIcon><SkillTitle>{skill.title}</SkillTitle></IndividualSkill>
   })}</IndividualSkillContainer>
</IndividualSkillList>
}

const Skills = () => {
  return (
   
    <SkillContainer>
      <MySkills>My Skills</MySkills>
      <SkillListContainer>
      <SkillsList title='FrontEnd' skillarray={skillarr1} />
      <SkillsList title='BackEnd' skillarray={skillarr2} />
      <SkillsList title='Cloud' skillarray={skillarr3} />
      </SkillListContainer>
      </SkillContainer>
   
  );
}

export default Skills;