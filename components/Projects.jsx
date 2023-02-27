import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'next/image'

const Project=()=>{
    return(
        <section id='project'>
        <div className='container-fluid'>
        <h1 className='project-title'>My Project</h1>
        <p className='project-intro'>In my final semester I have done the project on Performance Combustion And
Emission Evaluation Of Diesel Engine Using Cotton Seed Oil Methyl Ester Under
Dual Fuel Mode</p>
        <Row>
        <Col lg={6}><p className='project-intro'>In this project we prepared Biodiesel using Methanol and Cotton Seed Oil and analysed their performance, combustion and emission.</p></Col>
        <Col lg={6}><Image className='bio-img' src='/images/biodieselproduction.jpg' alt='biodiesel-production-img' width={500} height={250} /></Col>
        </Row>
        </div>
        </section>
        
    )
}

export default Project