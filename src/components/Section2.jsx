import React from 'react'
import '../style/section2.css'

const Section2 = () => {
  return (
    <div>
      <div className="sec-2 text-center px-2 py-5 container">
        <h3>
          Try Post <span>it</span>.
        </h3>
        <p>
          Do you want to write or discover stories from writers on any topic?
        </p>
        <div className="d-flex justify-content-center align-items-center">
          <input type="text" placeholder="Enter Email address" />
          <button>Get Started</button>
        </div>
      </div>
    </div>
  );
}

export default Section2