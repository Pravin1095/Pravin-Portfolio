import { faBootstrap } from '@fortawesome/free-brands-svg-icons'
import React,{useState,useEffect} from 'react'
import foot from '../components/footarr.js'
import axios from 'axios'
import MyNavbar from '../components/MyNavbar.jsx'



const foot_url='https://gist.githubusercontent.com/Pravin1095/5b9f6ca9b6f016fd7d5b7efa15f0a3d5/raw/d130ebb7f428349835549796fea73106ff33ad1e/Footer.json'
const FooterParent=()=>{
    return(
        <Footer farray={foot} />
    )
}
const Footer=({farray})=>{
    const [f,setFoot]=useState([])
    useEffect(
        ()=>{
            axios.get(foot_url).then((response)=>{
                setFoot(response.data)
            })
        },[]
    )
    return(
       
        <section id='contact2'>
        <MyNavbar />
         {console.log(f.social)}
         {console.log(typeof f.social)}
<div className="bottom-container container-fluid">
    {/* <div>{f.social.map(
        (foots,index)=>{
            return <React.Fragment key={index}>
            <a className='footer-link' href=''>{foots.smedia}</a>
            </React.Fragment>
        }
     )}</div> */}
    
     <p className="copyright">f.copyright[0]</p>
     {console.log(f.copyright)}
     
 </div>
 </section>
    )
}

export default FooterParent

