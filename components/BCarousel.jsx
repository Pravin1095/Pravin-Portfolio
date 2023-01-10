import React from "react";
import Skills from './Skills.jsx'
//import { Carousel } from 'bootstrap'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloud, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
function BCarousel() {
  const toggleCarousel = (action) => {
    // const { Carousel } = bootstrap;
    // const carousel = new Carousel("#carouselExampleControls");
  //   if (action === "next") {

  //     carousel.next(); 
  //   } else {
  //     carousel.prev();
  //   }
  };
  return (
    <section id='bcarousel'>
      <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <Skills />
          </div>
          <div className="carousel-item">
            <div><FontAwesomeIcon icon={faGraduationCap} style={{ width: '50px' }}></FontAwesomeIcon></div>
            <h2>My Education!</h2>
          </div>
          <div className="carousel-item">
            <h3>My Hobbies!</h3>
          </div>
        </div>

        <a onClick={() => toggleCarousel("prev")} className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a onClick={() => toggleCarousel("next")} className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>

    </section>
  );
}
export default BCarousel;