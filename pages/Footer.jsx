import { faBootstrap } from '@fortawesome/free-brands-svg-icons'
import React from 'react'
import foot from '../components/footarr.js'


const FooterParent=()=>{
    return(
        <Footer farray={foot} />
    )
}
const Footer=({farray})=>{
    return(
        <section id='contact2'>
<div className="bottom-container container-fluid">
    <div>{farray.map(
        (foots,index)=>{
            return <React.Fragment key={index}>
            <a className='footer-link' href={foots.link}>{foots.social}</a>
            </React.Fragment>
        }
     )}</div>
    
     <p className="copyright">© Pravin A</p>
     
 </div>
 </section>
    )
}

export default FooterParent

