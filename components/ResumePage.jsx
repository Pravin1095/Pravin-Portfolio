import React, {  useState } from 'react'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

const ResumePage=()=>{
    var[resume,setResume]=useState('Download my Resume!')
  

    const funcResume=()=>{
        setResume(resume='ThankYou for downloading my Resume')
       
        console.log(resume)
        
    }
    return(
        <section id='resumeid'>
       <div className='container-fluid'>
        <p className='resume-about'>I am a Fresher who is very much interested in development role. You can download my Resume from below.</p>
        <Row>
        <Col lg={6}> <h2 className='res-title'>{resume}</h2></Col>
        <Col lg={6}><a href='./Docs/Pravin A_Resume.pdf' download>
        <button className='resume-button' onClick={funcResume} >Download Resume!</button>
        </a></Col></Row>
        </div>
        </section>
        

    )
}
export default ResumePage