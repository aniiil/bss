import React from "react";
import ban from "../Images/img2.png";
import Common from "./Common";
import Footer from "./Footer";

const Home = () => {
  return (
    <>
      <Common
        name=" MORE THAN JUST SECURITY... "
        imgsrc={ban}
        visit="/service"
        btname="Get Started"
      />
      <div className="banner">
      <div className="container py-5">
        <div className="row row-cols-1 row-cols-md-4 g-4">
          <div className="col">
            <div className="card home_card ">
              <div className="card-body ">
                <p className="card-text">
                  MSME registered Company and happy clients
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card home_card">
              <div className="card-body ">
                <p className="card-text">
                  Registered with Start - up India with recognition number
                  DIPP37630
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card home_card">
              <div className="card-body ">
                <p className="card-text">Registered with ISO 9001:2015</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card home_card text-center">
              <div className="card-body   text-center">
                <p className="card-text  ">
                  Possessing valid PASARA license in four states NCT Delhi,
                  Uttar Pradesh, Kerala and Karnataka
                </p>
              </div>
            </div>
          </div>
         
        </div>
      </div>
      </div>
      <Footer />
    </>
  );
};
export default Home;
