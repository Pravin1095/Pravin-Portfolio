import React from "react";
import Image from 'next/image'


const IntroParent=()=>{
  return <React.Fragment><Intro image='/images/Photo.jpeg' title='Hello!' content='My name is Pravin. I did my B.Tech in Mechanical. I am interested in doing things practically and in this way I gained my interest in Web Development and have done a course in Udemy. I also have knowledge in Programming Skills like Python and Java. Apart from learning I like to play chess and do exercises to keep my mind and body fit.' />
  </React.Fragment>
  
}


const Intro=(props)=> {
  return (
    <section id='intro'>
    <div className="profile">
      <Image className="my-photo" src={props.image} alt="photo-img" width={200} height={250}/>
      <h2 className='intro-title'>{props.title}</h2>
      <p className="about container">
        {props.content}
      </p>
    </div></section>
  );
}
export default IntroParent;