import React from 'react'
import '../style/banner.css'
import { Link } from 'react-router-dom';

const Banner = () => {
 return (
   <div className="ban">
     <div className="ban-text">
       <h1>Stay Curious.</h1>
       <p>
         Lorem ipsum dolor sit ameetur adipiscing elit. Coctetur egestas massa
         velit aliquam. Molestim bibendum hnt ipsum orci, platea aliquam id ut.
       </p>
       <Link to="/register">
         <button className="bt">Get Started</button>
       </Link>
     </div>
   </div>
 );
}

export default Banner