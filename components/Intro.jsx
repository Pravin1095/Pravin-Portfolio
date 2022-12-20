import React from "react";


function Intro() {
  return (
    <div className="profile">
      <img className="my-photo" src='./Photo.jpeg' alt="photo-img" />
      <h2>Hello!</h2>
      <p className="about">
        {" "}
        I am a Hard Working Candidate who is interested in developing Web Pages
        and with a growth mindset who is always trying to improve.
      </p>
    </div>
  );
}
export default Intro;