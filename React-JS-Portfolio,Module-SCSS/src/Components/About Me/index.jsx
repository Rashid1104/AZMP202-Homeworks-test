import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css"

const AboutMe = () => {
  return (
    <div className='main-1'>
        <h1 className="text-center text-dark">About Me</h1>
        <section className="d-flex align-items-center justify-content-center ">
      <img
        src="https://camo.githubusercontent.com/4d9f5ecceb711eec6e2018f38a5677dc657c9738d4a65ba3b928c41c0a45b439/68747470733a2f2f6d69726f2e6d656469756d2e636f6d2f6d61782f313336302f302a37513379765349765f7430696f4a2d5a2e676966"
        alt="Coding GIF"
        className="img-fluid me-4"
       
      />
      <div>
          <h2 className="text-center">What can I do?</h2>
          <p className="p-4">
          I can work as a web designer and also work on the design of different sites (from the easiest to the most complex). I can also work on functionality in Java script
          </p>
          <div className="d-flex justify-content-center align-items-center">
            <img  src="https://global.discourse-cdn.com/sitepoint/original/3X/b/5/b59a78e2ed76c705f3c0dcb300f3f222aefdcd99.png" alt="" />  
          </div>
       
      </div>
    
    </section> 
    </div>
   
  )
}

export default AboutMe