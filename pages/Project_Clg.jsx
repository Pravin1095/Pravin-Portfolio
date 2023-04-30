import React,{useState,useEffect} from 'react'
import Card from 'react-bootstrap/Card'
import axios from 'axios'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import MyNavbar from '../components/MyNavbar';

const mec_url='https://gist.githubusercontent.com/Pravin1095/cbddf697cb721c6383305427eab67eee/raw/e3e267cbe16ee31e15468c2181c6c251b0ae8726/MecPro_Array.json'
const Project_Clg=()=>{
    let [Mec_json,setMecJson]=useState([])
useEffect(
    ()=>{
        axios.get(mec_url).then((response)=>{
            setMecJson(response.data)

        })
    
    },[]
)
    return(
        <section id='mec-card'>
        <MyNavbar />
        <div className='container-fluid'>
        <h1 className='pro-title'>My Project</h1>
        <h3 className='prosub-title'>College Semester Projects</h3>
       <div><Row>{Mec_json.map(
            (mec,index)=>{

             return   <div key={index}><Col lg={6} ><Card bg='dark' text='light'>
        <Card.Img className='card-image' variant="top" src={mec.image}  />
        <Card.Body>
          <Card.Title>{mec.title}</Card.Title>
          <Card.Text>
          {mec.desc}
          </Card.Text>
        </Card.Body>
        {/* <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer> */}
        </Card>
        </Col></div>
            }
        )}</Row></div> 
    </div>
        </section> )

}
export default Project_Clg