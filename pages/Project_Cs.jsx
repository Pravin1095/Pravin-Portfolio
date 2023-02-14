import React, {useState,useEffect} from "react";
import Card from 'react-bootstrap/Card'
import axios from 'axios'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import MyNavbar from '../components/MyNavbar';



const pro_cs_url='https://gist.githubusercontent.com/Pravin1095/3fbcdfb03947750ba0ea0cda84cdda29/raw/dd787ebacfc9a2707673ca826e2f3cc16b9799ac/Project_Cs.json'
const course_url='https://gist.githubusercontent.com/Pravin1095/878b688de359279c42ca2a737d77ee1e/raw/d7d0dcf196472e5f542dd3dd33664bc1f11fe51c/Courses.json'
const Project_Cs_Parent=()=>{
    const [pro_cs_json,setProcs]=useState([])
    const [course_json,setCourse]=useState([])
    useEffect(
        ()=>{
            axios.get(pro_cs_url).then(
                (response)=>{
                    setProcs(response.data)
                }
            );
            axios.get(course_url).then(
                (response)=>{
                    setCourse(response.data)
                })

        },[]
    )
    return( <React.Fragment>
    <Project_Cs child={<MyNavbar />} t={'Web Development Projects'} procourse_json={pro_cs_json}/>
    <Project_Cs t={'Courses'} procourse_json={course_json}/>
    </React.Fragment> )

}

const Project_Cs=({child,t,procourse_json})=>{

    let num=3
    t==='Web Development Projects' ? num=4 :num
    return <section id='procourses'>
    {child}
    <div className='container-fluid'>
    <h1 className='procourse-title'>{t}</h1>
    <Row>{procourse_json.map(
        (mec,index)=>{

         return   <React.Fragment key={index}><Col lg={num} ><Card bg='dark' text='light'>
    <Card.Img className='card-image' variant="top" src={mec.image}  />
    <Card.Body>
      <Card.Title>{mec.title}</Card.Title>
      <Card.Text>
      {mec.description}
      {mec.tech}
      </Card.Text>
      <Card.Text>
      {mec.tech}
      </Card.Text>
    </Card.Body>
    {/* <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer> */}
    </Card>
    </Col></React.Fragment>
        }
    )}</Row></div> </section>
}
export default Project_Cs_Parent