import React from "react";
import Image from 'next/image'


const IntroParent=()=>{
  return <React.Fragment><Intro image='./images/Photo.jpeg' title='Hello!' content='I am a Hard Working Candidate who is interested in developing Web Pages and with a growth mindset who is always trying to improve.' />
  </React.Fragment>
  
}


const Intro=(props)=> {
  return (
    <section id='intro'>
    <div className="profile">
      <img className="my-photo" src={props.image} alt="photo-img" />
      <h2 className='intro-title'>{props.title}</h2>
      <p className="about container">
        {props.content}
      </p>
    </div></section>
  );
}
export default IntroParent;