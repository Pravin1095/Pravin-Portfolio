import React,{useState,useEffect} from 'react'
import { faMobile} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import MyNavbar from '../components/MyNavbar';
import axios, { all } from 'axios';

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
const ContactParent=()=>{
    
    return <Contact title='Get in Touch !' mail='mailto:a.pravin3210@gmail.com' mobile='+91 8778595979' />
}


const Contact=(props)=>

{
    

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
       {allValues.name.length===0 && setMsg('Please enter your name')}
       {allValues.mail.length===0 && setMsg('Please enter your Email')}
       {allValues.sub.length===0 && setMsg('Please enter the subject')}
       {allValues.message.length===0 && setMsg('Please enter the message')}

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
        mail: '',
        sub: '',
        message: ''
     });

     
     
     const changeHandler = (event) => {
        setAllValues({...allValues, [event.target.name] : event.target.value})
        console.log(allValues)
     }

     const handleSubmit=async(event)=>{
        event.preventDefault()
        // const JSONdata = JSON.stringify(allValues)

        // // API endpoint where we send form data.
        // const endpoint = '/api/form'
    
        // // Form the request for sending data to the server.
        // const options = {
        //   // The method is POST because we are sending data.
        //   method: 'POST',
        //   // Tell the server we're sending JSON.
        //   headers: {
        //     'Content-Type': 'application/json',
        //   },
        //   // Body of the request is the JSON data we created above.
        //   body: JSONdata,
        // }
    
        // // Send the form data to our forms API on Vercel and get a response.
        // const response = await fetch(endpoint, options)
    
        // // Get the response data from server as JSON.
        // // If server returns the name submitted, that means the form works.
        // const result = await response.json()
        // alert(`Is this your full name: ${result.allValues}`)
        
    //     // var form_datas=JSON.parse(localStorage.getItem('form') || '[]') 
    //     // var form_data={
    //     //     name:allValues.name,
    //     //     mail:allValues.mail,
    //     //     sub:allValues.sub,
    //     //     message:allValues.message
    //     // }
        
    //     // form_datas.push(form_data)
    //     // localStorage.setItem('form',JSON.stringify(form_datas))
    //     console.log(allValues.name)

        axios.post(contact_url,{
            name:allValues.name,
            mail:allValues.mail,
            sub:allValues.sub,
            message:allValues.message
        }).then((response)=>{
            console.log(response)
        })
        // const allData={
        //     id:Date.now(),
        //     name:allValues.name,
        //     mail:allValues.mail,
        //     sub:allValues.sub,
        //     message:allValues.message
        // }

       
        //     const data=await fetch('/api/form',{
        //         method:'POST',
        //         body:JSON.stringify({
        //             name:allValues.name,
        //             mail:allValues.mail,
        //             sub:allValues.sub,
        //             message:allValues.message}),
        //         headers:{
        //             'Content-type':'application/json',
        //         },
                
        //     })
        //     console.log('Response :',data);
            // catch(error){
            //     console.log('Error',error)

            // }
        
        // axios.post('/api/form',{
        //     method:'POST',
        //     name:allValues.name,
        //     mail:allValues.mail,
        //     sub:allValues.sub,
        //     message:allValues.message})
        // .then(
        //     (response)=>{
        //         console.log(response)

        //     }
        // )

       

     }
    return(
        <section id='contact'>
        <MyNavbar />
            <div className='container-fluid'>
            <div className='bottom'>
                <h2 className='contact-title'>{props.title}</h2>
                <form onSubmit={handleSubmit}>
                <input onChange={changeHandler} name='name' value={allValues.name} type='text' placeholder='Your Name' required></input>
                
                {allValues.name.length===0 ? <div className='req-class'>Required</div> : null}
                
                <input onChange={changeHandler} name='mail' value={allValues.mail} type='email' placeholder='Your Email' required></input>
                {allValues.mail.length===0 ? <div className='req-class'>Required</div> : null}
                
                <input onChange={changeHandler} name='sub' value={allValues.sub} type='text' placeholder='Subject'></input>
                {allValues.sub.length===0 ? <div className='req-class'>Required</div> : null}
                
                <textarea onChange={changeHandler} name='message' value={allValues.message} placeholder='Message'></textarea>
                {allValues.message.length===0 ? <div className='req-class'>Required</div> : null}
                
                <input className='contact-submit-button' onClick={submitMessage} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} style={{backgroundColor:buttonstyle ? 'white':'black'}} type='submit' placeholder='Send Me'></input>

                </form>
               <h3 className='submit-msg'>{msg}</h3>
                {/* <a className="btn btn-primary btn-lg mail-button" href={props.mail} role="button">Email Me</a> */}
                <h3 className='mobile'> <FontAwesomeIcon icon={faMobile} style={{width:'50px'}} />{props.mobile}</h3>
                </div></div>
             </section>
    )
}
export default ContactParent