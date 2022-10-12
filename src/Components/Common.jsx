import React from "react";
import { NavLink } from "react-router-dom";


const Common = (props) => {
  return (
    <>
      <section id="header" className="d-flex align-item-center">
        <div className="container-fluid ">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-1 order-lg-2 d-flex justify-content-center flex-column">
                  <h1>
                
                    <strong className="brand-name">
                      BSS || Security -
                    </strong>{props.name}
                  </h1>
                  <h2 className="my-3">
                    No compromise with quality & value of services delivery
                  </h2>
                  <div className="mt-3">
                    <NavLink to={props.visit} className="btn-get-started">
                      {props.btname}
                    </NavLink>
                  </div>
                </div>
                <div className="col-lg-6 order-1 order-lg-2 header-img  d-flex flex-row">
                  <img
                    src={props.imgsrc}
                    className="img-fluid animated"
                    alt="Common.img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="description">
    
      </section>
    </>
  );
};
export default Common;