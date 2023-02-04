import React from 'react'
import NameParent from './Name'
import Trainee from './Trainee'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const MyHome=()=>{

    return (
        <React.Fragment>
        <Row>
        <Col lg={6}><NameParent /></Col>
        <Col lg={6}><Trainee /></Col></Row>
        </React.Fragment>
    

)}

export default MyHome