import React from 'react'
import HTMLandCSS from "./img/HTMLandCSS.png"
import score from "./img/score.png"
import "bootstrap/dist/css/bootstrap.min.css"
import "./index.css"

const MyCertificates = () => {
  return (
    <div className='div-all'>
          <div className="container py-5 ">
        <h1 className='text-center'>MY Certificates</h1>
      <div className="row align-items-center">
        <div className="col-md-6">
          <h2 >HTML and CSS</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum vitae esse illo? Omnis quod incidunt facilis maxime nulla voluptatem reprehenderit ipsam consectetur corrupti. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla officiis cum qui dicta molestias laudantium, totam neque perspiciatis enim tenetur, temporibus doloribus sapiente.</p>
        </div>
        <div className="col-md-6 d-flex justify-content-center aligh-items-center left-part mt-5">
                 <img src={HTMLandCSS} alt="HTML and CSS" width={400}/>
          <img src={score} alt="score" width={400} />
       
        </div>
      </div>
    </div> 
    </div>
 
  )
}

export default MyCertificates;
