import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import sharr from './skillhobbyarr';

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <section id='rcarousel'>
    <Carousel interval={null} variant='primary' activeIndex={index} onSelect={handleSelect}>

     {sharr.map(
      (sh,index)=>{
        return  <Carousel.Item key={index}>
       <h1>{sh.children}</h1>
      </Carousel.Item>

      })}
    
    </Carousel>
    </section>
  );
}

export default ControlledCarousel