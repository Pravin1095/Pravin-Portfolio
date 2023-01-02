import React from "react";

function Name() {
  return (
    <section className='top' id='name'>
    <div className="container-fluid">
      <nav class="navbar navbar-expand-lg navbar-light ">
      <a className="navbar-brand" href="#"></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <a class="nav-link fcolor" href="#intro">
                About
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link fcolor" href="#skill">
                Skills
              </a>
            </li>

            <li class="nav-item">
              <a class="nav-link fcolor" href="#contact">
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