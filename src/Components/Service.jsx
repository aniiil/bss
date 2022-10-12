import React from "react";
import Sdata from "./Sdata";
import Card from "./Card";

const Service = () => {
  return (
    <>
      <div className="py-5 ser-bg">
      <h1 className=" head text-center py-5">Our Services</h1>
      <div className="container-fluid  mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-4">
             {
              Sdata.map((val,ind)=>{
                return<Card key={ind}
                imgsrc={val.imgsrc} 
                title={val.title}
                data={val.data}/>
              })
             }
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};
export default Service;
