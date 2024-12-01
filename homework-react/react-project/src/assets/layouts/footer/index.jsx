const   Footer = () => {
    return <footer>
  <div className="header">
  <div className="right-part-footer">
       <img src={"https://mobirise.com/extensions/floram4/floral-studio/assets/images/signature.png"} alt="" />
       <div className="input-btn">
        <input type="text" name=""  placeholder="Your Email"/>
       <button className = "button">Send</button>
       </div>
        </div>
        <div className="left-part-footer">
            <nav>
                
                <ul>
                    <h4>About</h4>
                    <li>About Us</li>
                    <li>Our Partners</li>
                    <li>Our Servises</li>
                </ul>
            </nav>
            <nav>
                <ul>
                      <h4>Contact</h4>
                    <li>Contact Us</li>
                    <li>FAQ Page</li>
                    <li>About Me</li>
                </ul>
            </nav>
            <h4>Follow Us</h4>
        </div>
  </div>
    </footer>;
  };
  
  export default  Footer;