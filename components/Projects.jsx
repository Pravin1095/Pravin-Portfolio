import React from 'react'

const Project=()=>{
    return(
        <section id='project'>
        <div className='container-fluid'>
        <h1 className='project-title'>My Project</h1>
        <p className='project-intro'>In my final semester I have done the project on "PERFORMANCE, COMBUSTION AND EMISSION EVALUATION OF
        DIESEL ENGINE USING COTTON SEED OIL METHYL ESTER UNDER DUAL FUEL MODE"</p>

        <p className='project-description'>In this project we prepared Biodiesel using Methanol and Cotton Seed Oil and analysed their performance, combustion and emission.</p>
        <img className='project-img' src='.images/biodieselproduction.jpg' alt='biodiesel-production-img'></img>
        
        </div>
        </section>
        
    )
}

export default Project