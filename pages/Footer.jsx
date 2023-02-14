import { faBootstrap } from '@fortawesome/free-brands-svg-icons'
import React,{useState,useEffect} from 'react'
import foot from '../components/footarr.js'
import axios from 'axios'
import MyNavbar from '../components/MyNavbar.jsx'



const foot_url='https://gist.githubusercontent.com/Pravin1095/5b9f6ca9b6f016fd7d5b7efa15f0a3d5/raw/67a22e1996888c93ce9e794b55b28836e784d9f7/Footer.json'
const FooterParent=()=>{
    const [f,setFoot]=useState([])
    useEffect(
        ()=>{
            axios.get(foot_url).then((response)=>{
                setFoot(response.data)
            })
        },[]
    )
    return(
        <Footer copy='© Pravin A' farray={foot} farray2={f} />
    )
}
const Footer=({farray,farray2,copy})=>{
    
    return(
       
        <section id='contact2'>
        <MyNavbar />
         
<div className="bottom-container container-fluid">
    <div>{farray2.map(
        (foots,index)=>{
            return <React.Fragment key={index}>
            <a className='footer-link' href={foots.link}>{foots.smedia}</a>
            </React.Fragment>
        }
     )}</div>
    
     <p className="copyright">{copy}</p>
     
     
 </div>
 </section>
    )
}

export default FooterParent

