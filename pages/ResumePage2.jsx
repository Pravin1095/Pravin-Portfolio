import React, {  useState } from 'react'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'


const ResumePage2=({sendF})=>{
    let [resume,setResume]=useState('Download my Resume!')
    let [isMouseOver,setMouseOver]=useState(true)
    
    console.log(sendF)
  
    const mouseOutHandle=()=>{
        setMouseOver(true)
    }
    const mouseHandle=()=>{
        setMouseOver(false)
    }
    const funcResume=()=>{
        setResume(resume='ThankYou for downloading my Resume')
       
        console.log(resume)}
        
        const chfunc=(callvalue)=>{
            sendF(callvalue)
        
        }
    
    return(
        <section id='resumeid'>
       <div className='container-fluid'>
        <p className='resume-about'>I am a Fresher who is very much interested in development role. You can download my Resume from below.</p>
        <Row>
        <Col lg={6}> <h2 className='res-title'>{resume}</h2></Col>
        <Col lg={6}><a href='./Docs/Resume_Updated.pdf' download>
        <button onMouseOver={mouseHandle} onMouseOut={mouseOutHandle} style={{backgroundColor:isMouseOver ? 'white':'black'}} className='resume-button' onClick={()=>{chfunc('Resume downloaded');funcResume();}}  >Download Resume!</button>
        </a></Col></Row>
        </div>
        </section>
        

    )
}
export default ResumePage2