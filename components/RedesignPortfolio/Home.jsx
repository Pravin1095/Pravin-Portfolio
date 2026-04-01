import { Hi, HomeContainer, IconDiv, ImageContainer, ImageDiv, Name, NameContainer, NavButtons, NavFields } from "./Home.styles"
import Image from 'next/image'
import { fagithub, falinkedin, faCss3Alt, faJs, faReact, faPython, faJava, faLinkedin, faGithub, faMailchimp} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faM } from "@fortawesome/free-solid-svg-icons";

const Home= ()=>{

    const navFields = ["About Me", "Skills", "Hire Me"]
    const iconFields = [{
        name : "github",
        link : "https://github.com/Pravin1095"
    },
    {
        name : "linkedin",
        link : "https://www.linkedin.com/in/pravin-arun/"
    },
    {
        name : "email",
        link : "mailto:a.pravin.developer@gmail.com"
    }
]
const iconMap = {
  github: faGithub,
  linkedin: faLinkedin,
  email: faM
}

const handleIconClick = ()=>{
    console.log("check")
}
    return(
        <HomeContainer>
            <NameContainer>
                <Hi>Hi, I am</Hi>
                <Name>Pravin</Name>
                <IconDiv>{iconFields && iconFields.map((iconData, index)=>{
                    const isEmail = iconData.link.startsWith('mailto:');
                    return  <a 
                    key={index}
        href={iconData.link} 
        target={isEmail ? "_self" : "_blank"} 
        rel="noopener noreferrer"
        style={{ textDecoration: 'none' }}
      ><FontAwesomeIcon onClick={handleIconClick}  key={index}  icon={iconMap[iconData.name]} style={{ width: "50px", height:"50px", color: 'black' }}/></a>})}</IconDiv> 
                
                {/* <><FontAwesomeIcon key={index} icon={iconData.name} style={{ width: '50px', color: 'black' }}/></> */}
              
            </NameContainer>
            <ImageContainer>
            {/* <NavFields>
                {navFields && navFields.map((navData, index)=>{
                    const isHireButton = navData==="Hire Me"
return <NavButtons highlight={isHireButton} key={index}>{navData}</NavButtons>
                })}
            </NavFields> */}
                <ImageDiv><Image style={{borderRadius: "100%"}} src='/images/Photo.jpg' alt="photo-img" width={300} height={300}/></ImageDiv>
            </ImageContainer>
        </HomeContainer>
    )
}

export default Home