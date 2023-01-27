import React from 'react'
import { faMobile} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function ContactParent({contarr}){
    return <Contact title='Get in Touch !' mail='mailto:a.pravin3210@gmail.com' mobile='+91 8778595979' />
}
function Contact(props){
    return(
        <section id='contact'>
            <div className='container-fluid'>
            <div className='bottom'>
                <h2 className='contact-title'>{props.title}</h2>
                <form action='mailto:a.pravin3210@gmail.com'>
                <input type='text' placeholder='Your Name'></input>
                <br></br>
                <input type='email' placeholder='Your Email'></input>
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