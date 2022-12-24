import React from "react";
import Image from 'next/image'

function Intro() {
  return (
    <div className="profile">
      <img className="my-photo" src='./images/Photo.jpeg' alt="photo-img" />
      <h2>Hello!</h2>
      <p className="about container">
        {" "}
        I am a Hard Working Candidate who is interested in developing Web Pages
        and with a growth mindset who is always trying to improve.
      </p>
    </div>
  );
}
export default Intro;