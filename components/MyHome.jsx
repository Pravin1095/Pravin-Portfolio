import React from 'react'
import NameParent from './Name'
import ResumePage from './ResumePage'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const MyHome=()=>{
    

    
    return (
        <React.Fragment>
        <Row >
        <Col lg={6} className='train-class'><NameParent /></Col>
        <Col lg={6} className='train-class'><ResumePage /></Col></Row>
        </React.Fragment>
    

)}

export default MyHome