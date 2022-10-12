import React from "react";

import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>

 
      <div className="container-fluid nav_bg">
        <div className="row">
         
            <nav className="navbar navbar-expand-lg navbar-light ">
              <div className="container-fluid">
                <NavLink className="navbar-brand" to="/home">
                 BSS || Security
                </NavLink>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav ml-auto " >

                  <li className="nav-item">
                      <NavLink 
                       className="nav-link " to="/home">
                        Home
                        </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink  
                       className="nav-link " to="/service">
                        Services
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink   className="nav-link " to="/about">
                        About
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink  className="nav-link " to="/contact">
                        Contact
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      
    </>
  );
};
export default Navbar;
