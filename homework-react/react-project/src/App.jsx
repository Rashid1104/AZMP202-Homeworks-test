import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '@fortawesome/fontawesome-free/css/all.min.css';
import img1 from "./assets/components/img/sl7.png";
import img2 from "./assets/components/img/sl4.png";
import img3 from "./assets/components/img/sl3.png";
import img4 from "./assets/components/img/fl2.png";
import img5 from "./assets/components/img/fl1.png";
import img6 from "./assets/components/img/1.png";
import img7 from "./assets/components/img/3.png";
import img8 from "./assets/components/img/4.png";
import img9 from "./assets/components/img/5.png";
import img10 from "./assets/components/img/6.png";
import img11 from "./assets/components/img/portr1.png";
import img12 from "./assets/components/img/portr2.png";
import img13 from "./assets/components/img/portr3.png";
import img14 from "./assets/components/img/b2.png";
import img15 from "./assets/components/img/b3.png";
import img16 from "./assets/components/img/b4.png";
import Header from './assets/layouts/header';
import Footer from './assets/layouts/footer';
import Cards from './assets/components/card/card';
import Card from './assets/components/card/card2';

function App() {
  return (
    <>
      <Header />
      <div className="carousel slide" id="carouselExampleControls" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={img1} className="d-block w-100" alt="First slide" />
            <div className="carousel-caption d-flex flex-column justify-content-center">
              <p className="text">Floral</p>
              <h2 className="p-text">Excellent bouquets for you</h2>
            </div>
          </div>
          <div className="carousel-item">
            <img src={img2} className="d-block w-100" alt="Second slide" />
            <div className="carousel-caption d-flex flex-column justify-content-center">
              <p className="text">Floral</p>
              <h2 className="p-text">Excellent bouquets for you</h2>
            </div>
          </div>
          <div className="carousel-item">
            <img src={img3} className="d-block w-100" alt="Third slide" />
            <div className="carousel-caption d-flex flex-column justify-content-center">
              <p className="text">Fixed-Height Slider</p>
              <h2 className="p-text">Excellent bouquets for you</h2>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev custom-control"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <div className="d-flex flex-column align-items-left">
            <span className="custom-line"></span>
            <span className="custom-text">Next</span>
          </div>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next custom-control"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <div className="d-flex flex-column align-items-right">
            <span className="custom-line"></span>
            <span className="custom-text">Next</span>
          </div>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div className="main-part-1">
        <div className="right-part">
          <h1>
          Local Florist Just <br />
           For You
          </h1>
          <p>Lorem ipsum dolor sit amet, pri autem nemore bonorum te. <br />Autem fierent ullamcorper ius no. Te tibique intellegam mediocritatem his, est quis.</p>
          <p>Mary Byrd, owner</p>
        <img src={"https://mobirise.com/extensions/floram4/floral-studio/assets/images/signature.png"} alt="" />
        </div>
        <div className="left-part">
          <img src={img4} alt="" />
          <img src={img5} alt="" />
        </div>
      </div>
      <div className="card-part-3">
    <div className="card-text">
        <p>Contacts</p>
      <h1>Our Team</h1>     
        </div>
        <div className="container">
  <div className="row">
    <div className="col-3 for-icons">
      <div className="social-icons">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <i className="fa-brands fa-facebook-f"></i>
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <i className="fa-brands fa-twitter"></i>
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <i className="fa-brands fa-instagram"></i>
        </a>
      </div>
      <img src={img11} alt="" className="profile-image" />
      <h4>Velva Kopf</h4>
      <p>Biologist</p>
    </div>
    <div className="col-3 for-icons">
      <div className="social-icons">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <i className="fa-brands fa-facebook-f"></i>
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <i className="fa-brands fa-twitter"></i>
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <i className="fa-brands fa-instagram"></i>
        </a>
      </div>
      <img src={img12} alt="" className="profile-image" />
      <h4>Sarah Palmer</h4>
      <p>Florist</p>
    </div>
    <div className="col-3 for-icons">
      <div className="social-icons">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <i className="fa-brands fa-facebook-f"></i>
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <i className="fa-brands fa-twitter"></i>
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <i className="fa-brands fa-instagram"></i>
        </a>
      </div>
      <img src={img13} alt="" className="profile-image" />
      <h4>Jessica Swift</h4>
      <p>Photographer</p>
    </div>
  </div>
</div>     
    </div>
    <div className="main-box-1 big-box">
    <div className="container">
           <div className="box-2">
        <div className="first-part">
          <h1>Our Mission</h1>
          <p>Lorem ipsum dolor sit amet, pri omnium verterem id, sit labore dicunt an, ea civibus.</p>
          <button className="button">Read More</button>
        </div>
        <div className="second-part">
          <img src={img16} alt="" />
        </div>
    </div>
        </div>
    </div>
      <div className="main-part-2">
<div className="dop">
  <div className="container">
    <h2>Our clients</h2>
    <div className="row">
        {/* {первые 6} */}
      <div className="col-2">
        <img src={img6} alt=""  />
      </div>
      <div className="col-2">
        <img src={img9} alt="" />
      </div>
      <div className="col-2">
      <img src={img7} alt="" />
      </div>
      <div className="col-2">
      <img src={img8} alt="" />
      </div>
      <div className="col-2">
      <img src={img10} alt="" />
      </div>
      <div className="col-2">
      <img src={img7} alt="" />
      </div>
      {/* {вторые 6} */}
      <div className="col-2">
      <img src={img8} alt="" />
      </div>
      <div className="col-2">
      <img src={img7} alt="" />
      </div>
      <div className="col-2">
      <img src={img10} alt="" />
      </div>
      <div className="col-2">
      <img src={img6} alt="" />
      </div>
      <div className="col-2">
      <img src={img9} alt="" />
      </div>
      <div className="col-2">
      <img src={img10} alt="" />
      </div>
    </div>
  </div>
</div>
      </div>
     
      <div className="card-part-1">
    <div className="container">
        <div className="card-text">
        <p>Devoted to wonderful beauty
       </p>
      <h1>Flowers Pricing</h1>     
        </div>
      <div className="row box">
          <div className="col-3 colars">
          <img src={img15} alt="" />
          <h5>Dahlia</h5>
          <p>$45</p>
          </div>
          <div className="col-3 colars">
           <img src={img14} alt="" />
           <h5>Mazus</h5>
          <p>$45</p>
          </div>
          <div className="col-3 colars">
          <img src={img16} alt="" />
          <h5>Pansies</h5>
          <p>$45</p>
          </div>
          <div className="col-3 colars">
          <img src={img15} alt="" />
          <h5>Dahlia</h5>
          <p>$45</p>
          </div>
          <div className="col-3 colars">
          <img src={img14} alt="" />
          <h5>Mazus</h5>
          <p>$45</p>
          </div>
          <div className="col-3 colars">
          <img src={img16} alt="" />
          <h5>Pansies</h5>
          <p>$45</p>
          </div>
      </div>
    </div>
   <Card />
  </div>
      <Cards 
       email="email@site.com" 
       tel="+369 35 353562 3544" 
       address="4th Avenue 4856, New York"
      />
      <div className="main-part-4">
        <div className = "text-main-4">
          <i className="fa-regular fa-heart"></i>
         <h1>Subscribe to Us</h1>
      <p>  Interactively utilize leveraged interfaces vis-a-vis state of <br /> the art human capital. Interactively parallel task focused <br /> content via low-risk high-yield internal or organic sources.</p>
      <div className="input-btn-2">
        <input type="text" name=""  placeholder="Your Email"/>
       <button className = "button">Send</button>
       </div>
      </div>
     
      </div>
      <Footer />
    </>
  );
}

export default App;




