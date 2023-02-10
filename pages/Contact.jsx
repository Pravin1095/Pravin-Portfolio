import React from 'react'
import { faMobile} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import MyNavbar from '../components/MyNavbar';
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

function ContactParent({contarr}){
    
    return <Contact title='Get in Touch !' mail='mailto:a.pravin3210@gmail.com' mobile='+91 8778595979' />
}
function Contact(props){
    
    return(
        <section id='contact'>
        <MyNavbar />
            <div className='container-fluid'>
            <div className='bottom'>
                <h2 className='contact-title'>{props.title}</h2>
                <form action='https://formsubmit.co/a.pravin3210@gmail.com' method='POST'>
                <input type='text' placeholder='Your Name' required></input>
                <br></br>
                <input type='email' placeholder='Your Email' required></input>
                <input type='hidden'></input>
                <input type='text' placeholder='Subject'></input>
                <textarea placeholder='Message'></textarea>
                <input type='submit' placeholder='Send Me'></input>

                </form>
                {/* <a className="btn btn-primary btn-lg mail-button" href={props.mail} role="button">Email Me</a> */}
                <h3 className='mobile'> <FontAwesomeIcon icon={faMobile} style={{width:'50px'}} />{props.mobile}</h3>
                </div></div>
             </section>
    )
}
export default ContactParent