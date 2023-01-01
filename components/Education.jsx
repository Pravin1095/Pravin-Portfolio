import React from 'react'


function Education(props){
return(
    <section id='education'>
     <div className='flex-container'>
     <div className='school'>
     <a href={props.Link}>{props.Institute}</a>
     <p>{props.Programme}</p>
     </div>
     <div className='year'>
     <p>{props.Year}</p>
     </div></div> 
     
     <hr className='hor-line'></hr>
     
     </section>
)
}

export default Education