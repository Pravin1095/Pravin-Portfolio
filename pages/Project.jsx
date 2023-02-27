import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Project_Clg from './Project_Clg';
import Project_Cs_Parent from './Project_Cs';


const Project=()=> {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <section id='rcarousel'>

    <Carousel interval={null} activeIndex={index} onSelect={handleSelect}>

  <Carousel.Item>
    <Project_Clg />
  </Carousel.Item>
  <Carousel.Item>
    <Project_Cs_Parent />
  </Carousel.Item>
    
    </Carousel>
    </section>
  );
}

export default Project