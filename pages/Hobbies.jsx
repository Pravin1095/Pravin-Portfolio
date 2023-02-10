import React from 'react'
import harr from '../components/hobbyarr'
import Image from 'next/image'
import MyNavbar from '../components/MyNavbar'

const HobbyParent=()=>{
    return(
        <Hobby harray={harr} />
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