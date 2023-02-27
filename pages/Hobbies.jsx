import React,{useState,useEffect} from 'react'
import harr from '../components/hobbyarr'
import Image from 'next/image'
import MyNavbar from '../components/MyNavbar'
import axios from 'axios'

let hobbyurl='https://gist.githubusercontent.com/Pravin1095/a7d90b2d588a9a22d68b84e809c64bab/raw/080d9e409684e21a76ac597e6592af16a6381f17/Hobbies.json'
const HobbyParent=()=>{

    const[hobbyjson,setHobby]=useState([])
    useEffect(
        ()=>{
            axios.get(hobbyurl).then(
                (response)=>{
                    setHobby(response.data)
                }
            )
        },[]
    )
    return(
        <Hobby harray={hobbyjson} />
    )
}
const Hobby=({harray})=>{
    return(
        <section id='hobby'>
        <MyNavbar />
        <h2 className='hobby-title'>My Hobbies</h2>
            <div className='container-fluid'>
            <div>{harray.map(
                (h,index)=>{
                    return <div className='hrow' key={index}>
                    <Image className={h.classType} src={h.imglink} alt={h.alter} width={150} height={150} />
                <h3>{h.title}</h3>
                <p className='hobby-description'>{h.description}</p>
                </div>

                }
            )}</div>
                
            </div>
        </section>
    )
}

export default HobbyParent