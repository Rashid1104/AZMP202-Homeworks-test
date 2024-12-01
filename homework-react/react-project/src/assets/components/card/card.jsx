const Cards = (prompt) => {
    return <>
     <div className="card-part-4">
    <div className="container">
        <div className="card-text">
        <p>Contacts</p>
      <h1>Where to find</h1>     
        </div>
      <div className="row">
          <div className="col-3 column-4">
            <h5 className = "card-p">Toronto</h5>
            <nav>
                <ul>
                    <li>Say Hello
                        <p>{prompt.email}</p>
                        </li>
                    <li>Phone
                        <p>{prompt.tel}</p>
                        </li>
                    <li>Address
                       <p>{prompt.address}</p> 
                        </li>
                </ul>
            </nav>

          </div>
          <div className="col-3 column-2">
            <h5 className = "card-p">Paris</h5>
            <nav>
                <ul>
                    <li>Say Hello
                        <p>{prompt.email}</p>
                        </li>
                    <li>Phone
                        <p>{prompt.tel}</p>
                        </li>
                    <li>Address
                       <p>{prompt.address}</p> 
                        </li>
                </ul>
            </nav>

          </div>
          <div className="col-3 column-3">
            <h5 className = "card-p">Barcelona</h5>
            <nav>
                <ul>
                    <li>Say Hello
                        <p>{prompt.email}</p>
                        </li>
                    <li>Phone
                        <p>{prompt.tel}</p>
                        </li>
                    <li>Address
                       <p>{prompt.address}</p> 
                        </li>
                </ul>
            </nav>

          </div>
      </div>
    </div>
  
  </div></>;
  };
  
  export default Cards;