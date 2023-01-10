import React from "react";

const Name = () => {
  return (
    <section className='top' id='name'>
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg navbar-light ">
          <a className="navbar-brand" href="#"></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link fcolor" href="#intro">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link fcolor" href="#skill">
                  Skills
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link fcolor" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <h1 className='name fontsize'>I am Pravin.</h1>
        <h2 className='name fontsizew'>Welcome!</h2>
      </div>
    </section>
  );
}
export default Name;