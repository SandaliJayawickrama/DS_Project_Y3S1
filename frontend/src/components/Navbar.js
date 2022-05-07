import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <nav className="navbar navbar-dark bg-dark">
        
        <div class="container">
          <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <NavLink className="navbar-brand" to="/">
            Agri Product Online Purchasing Platform
            </NavLink>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item active">
                  <a class="nav-link" href="#">
                    Menu 
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    About
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Contact us
                  </a>
                </li>
                <li class="nav-item"> 
                  <a class="nav-link" href="#">
                    Sign In
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </nav>

      <div className="footer1">
        <center>
          Sandali &nbsp;&nbsp; Nayanee &nbsp;&nbsp; Manee &nbsp;&nbsp; Sandali &nbsp;&nbsp;
        </center>
      </div>
    

      <div className="footer2">
        <center>
            &copy All right Reserved - Agri Product Online Purchasing Platform
        </center>
      </div>
    </header>
  );
};

export default Navbar;
