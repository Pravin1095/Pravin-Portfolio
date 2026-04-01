
import Home from "./RedesignPortfolio/Home.jsx";
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
    </div>
  );
}
export default App;
