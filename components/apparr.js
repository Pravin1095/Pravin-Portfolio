import IntroParent from "./Intro.jsx";
import ControlledCarousel from "./SkillHobby.jsx";
import Educations from './Education.jsx'
import ContactParent from './Contact.jsx'
import FooterParent from './Footer.jsx'
import MyHome from "./MyHome.jsx";
import Project from "./Projects.jsx";
const app_arr=[
    {
        child:<MyHome />,
        urlpath:'/'
    },
    {
        child:<IntroParent />,
        urlpath:'/intro'
    },
    {
        child:<Educations />,
        urlpath:'/education'
    },
    {
        child:<ControlledCarousel />,
        urlpath:'/skill'
    },
    {
        child:<Project />,
        urlpath:'/project'
    },
    {
        child:<ContactParent />,
        urlpath:'/contact'
    },
    {
        child:<FooterParent />,
        urlpath:'/footer'
    }
]

export default app_arr