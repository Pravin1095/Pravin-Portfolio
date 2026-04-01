import React,{useState,useEffect} from 'react'
import { faMobile} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import axios, { all } from 'axios';
import { ContactButton, ContactContainer, ContactForm, ContactInput } from './Contact.styles';


// import mongoose, {connect} from 'mongoose';


// const { Schema} = mongoose;
  

// mongoose.connect("mongodb://localhost:27017/contactDB")

// const collectionsSchema={
//     name:String,
//     email:String,
//     subject:String,
//     message:String
// }

// const ContactData = mongoose.models.ContactData || mongoose.model('ContactData', collectionsSchema )  

// // const ContactData=mongoose.model('ContactData',collectionsSchema)

// const c1=new ContactData({
//     name:'Pravin2',
//     email:'a.pravin3210@gmail.com',
//     subject:'Hi test',
//     message:'Hi Pravin test'
// })
// let allData=[c1]
// {ContactData.insertMany(allData,(err)=>{
//     if(err){
//         console.log(err)
//     }
//     else{
//         console.log('Successfully pushed to mongo')
//     }
// })}

const contact_url='http://localhost:8000/Form-data'
// const ContactParent=()=>{
    
//     return <Contact title='Get in Touch !' mail='mailto:a.pravin3210@gmail.com' mobile='+91 8778595979' />
// }


const Contact=(props)=>{

    const url = "http://localhost:8080"

    

    const [buttonstyle,setStyle]=useState(true)
    const[msg,setMsg]=useState('')

    const handleMouseOver=()=>{
        setStyle(false)
    }

    const handleMouseOut=()=>{
        setStyle(true)
    }

    const submitMessage=()=>{
       
       setMsg('Hello '+allValues.name+ ' ! Your form has been submitted successfully! ThankYou! 😊')
       {allValues.message.length===0 && setMsg('Please enter the message')}
       {allValues.subject.length===0 && setMsg('Please enter the subject')}
       {allValues.email.length===0 && setMsg('Please enter your Email')}
       {allValues.name.length===0 && setMsg('Please enter your name')}
       
      
       

    }
    
{console.log(msg)}




    // useEffect(
    //     ()=>{
    //         // axios.get(contact_url).then(
    //         //     (response)=>{
    //         //         console.log(response.data)
    //              }
    //          ) 

            
        
    
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
        console.log("check all",allValues)
     }

     const handleSubmit=async(event)=>{
        event.preventDefault()
        const response = await axios.post(`${url}/contact`, allValues)

       

     }
    return(
        <section id='contact'>
        
            <ContactContainer>
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
               <h3 className='submit-msg'>{msg}</h3>
                {/* <a className="btn btn-primary btn-lg mail-button" href={props.mail} role="button">Email Me</a> */}
                {/* <h3 className='mobile'> <FontAwesomeIcon icon={faMobile} style={{width:'50px'}} />{props.mobile}</h3> */}
                </div></ContactContainer>
             </section>
    )
}
export default Contact