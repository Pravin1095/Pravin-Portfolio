import React from "react";

function Name() {
  return (
    <div className="top">
      <nav class="navbar navbar-expand-lg navbar-light ">
        <a class="navbar-brand" href="#">
          Navbar
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarTogglerDemo">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <a class="nav-link" href="#">
                About
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Skills
              </a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="#">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <h1 className="name">I am Pravin.</h1>
      <h2 className="name">Welcome!</h2>
    </div>
  );
}
export default Name;