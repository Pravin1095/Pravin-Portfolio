import React, {  useState } from 'react'

const Trainee=()=>{
    var[resume,setResume]=useState('Download my Resume!')
  

    const funcResume=()=>{
        setResume(resume='ThankYou for downloading my Resume')
       
        console.log(resume)
        
    }
    return(
        <section id='resumeid'>
       <div className='container-fluid'>
        <p className='resume-about'>I am a Fresher who is very much interested in development role.You can download my Resume from below.</p>
        <h2 className='res-title'>{resume}</h2>
        <a href='./docs/Pravin A_Resume.pdf' download>
        <button className='resume-button' onClick={funcResume} >Download Resume!</button>
        </a>
        </div>
        </section>
        

    )
}
export default Trainee