import React from "react";
import Common from "./Common";
import bn from "../Images/img1.png";
const About = () => {
  return (
    <>
      <Common
        name="About us "
        imgsrc={bn}
        visit="/contact"
        btname="Contact Us"
      />
      <div className="about-us">
        <div className="container">
        <div className="py-5 ">
          <h1 className="text-center ">About Us</h1>
        </div>
        <div className="container  contact_div">
          <div className="row">
            <div className="col-md-12 col-10 mx-auto">
              <p>
              BSS Security and Human Resource Services Pvt. Ltd. based at Indore with Branches / Strategic partners all over the country. We are also strategic partners and preferred vendors of Number of Govt. and reputed Organisations. Our Company is specialized to provide complete risk mitigating solutions to Corporate, Public Sector Organizations, Research Institutions and other high value clients. The Company has its own Branch Offices at Bangalore, Delhi, Kerala, Pune, Hyderabad and Chennai. We have the capability to undertake assignments anywhere in the country through our network and strategic partners.
              </p>
            </div>
            </div>
            </div>
        </div>
      </div>
    </>
  );
};
export default About;
