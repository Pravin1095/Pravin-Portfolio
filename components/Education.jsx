import React from 'react'
import Eduarr from './Eduarr'

const Educations=()=>{

    function sendAttack(params){
        console.log(params)

    }
    return(Eduarr.map((eduarray) => (
        <Education
          key={eduarray.id}
          Link={eduarray.link}
          Institute={eduarray.institute}
          Programme={eduarray.school}
          Year={eduarray.year}
          sendAttack={sendAttack} />
      )
      ))
}

const Education = (props) => {
    return (
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

export default Educations
