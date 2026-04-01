import React,{useState,useEffect} from 'react'
import { faMobile} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import axios, { all } from 'axios';
import { ContactButton, ContactContainer, ContactForm, ContactInput, SuccessMsg } from './Contact.styles';




const Contact=({id})=>{

    const url = "http://localhost:8080"
    const[successMsg,setSuccessMsg]=useState('')
    const [allValues, setAllValues] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
     });

     
     
     const changeHandler = (event) => {
        const {name, value} = event.target
        setAllValues((prev)=>({
            ...prev,
         [name] : value
     }))
     }

     const handleSubmit=async(event)=>{
        event.preventDefault()
        const response = await axios.post(`${url}/contact`, allValues)
        setSuccessMsg(response?.data)
       
     }
     console.log("check msg", successMsg)
    return(
            <ContactContainer id={id}>
            {successMsg && successMsg==="Success" && <SuccessMsg>{"Your contact has been saved successfully. Thankyou!"}</SuccessMsg>}
            <div className='bottom'>
                <h2 className='contact-title'>{"Let's get in touch!"}</h2>
                <ContactForm onSubmit={handleSubmit}>
                <ContactInput onChange={changeHandler} name='name' value={allValues.name} type='text' placeholder='Your Name' required></ContactInput>
                
                {/* {allValues.name.length===0 ? <div className='req-class'>Required</div> : null} */}
                
                <ContactInput onChange={changeHandler} name='email' value={allValues.email} type='email' placeholder='Your Email' required></ContactInput>
                {/* {allValues.email.length===0 ? <div className='req-class'>Required</div> : null} */}
                
                <ContactInput onChange={changeHandler} name='subject' value={allValues.subject} type='text' placeholder='Subject' required></ContactInput>
                {/* {allValues.subject.length===0 ? <div className='req-class'>Required</div> : null} */}
                
                <ContactInput onChange={changeHandler} name='message' value={allValues.message} placeholder='Message' required></ContactInput>
                {/* {allValues.message.length===0 ? <div className='req-class'>Required</div> : null} */}
                
                {/* <button className='contact-submit-button' onClick={submitMessage} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} style={{backgroundColor:buttonstyle ? 'white':'black'}} type='submit' placeholder='Send Me'></button> */}
 <ContactButton>Send</ContactButton>
                </ContactForm>
                {/* <a className="btn btn-primary btn-lg mail-button" href={props.mail} role="button">Email Me</a> */}
                {/* <h3 className='mobile'> <FontAwesomeIcon icon={faMobile} style={{width:'50px'}} />{props.mobile}</h3> */}
                </div></ContactContainer>
         
    )
}
export default Contact