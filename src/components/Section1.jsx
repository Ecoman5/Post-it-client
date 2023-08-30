import React from 'react'
import '../style/section1.css'
import lifestyle from "../assets/lifestyle.png"
import nature from "../assets/nature.png"
import technology from "../assets/technology.png"

const Section1 = () => {
  return (
    <div className="d-md-flex mt-5 g-4 justify-content-center align-items-center container partdiv">
      <div className="life d-flex ">
        <div>
          <img src={lifestyle} alt="" />
        </div>
        <div className="ps-3">
          <h4>Lifestyle</h4>
          <p>The 20 Biggest Fashion Companies In Nigeria 2022</p>
        </div>
      </div>
      <div className="nature d-flex">
        <div>
          <img src={nature} alt="" />
        </div>
        <div className="ps-3">
          <h4>Nature</h4>
          <p>The 20 Biggest Agro Companies In Nigeria 2022</p>
        </div>
      </div>
      <div className="tech d-flex">
        <div>
          <img src={technology} alt="" />
        </div>
        <div className="ps-3">
          <h4>Technology</h4>
          <p>The 20 Biggest Fintech Companies In Nigeria 2022</p>
        </div>
      </div>
    </div>
  );
}

export default Section1