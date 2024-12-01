// const Card = ({ items }) => {
//     return (
//       <>
//         <div className="card-part-2">
//           <div className="container">
//             <p>Devoted to wonderful beauty</p>
//             <h2>Events Pricing</h2>
//             <div className="row">
//               {items.map((item, index) => (
//                 <div className="col-3 card" key={index}>
//                   <h1>
//                     {item.price}
//                     <p>per table</p>
//                   </h1>
//                   <h3>{item.ivents}</h3>
//                   <p>{item.description}</p>
//                   <button className="button">Shop Now</button>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </>
//     );
//   };
  
//   export default Card;
const Card = () => {
    return (
      <>
        <div className="card-part-2">
          <div className="container">
          <div className="card-text">
            <p>Devoted to wonderful beauty</p>
            <h1>Events Pricing</h1>
          </div>
            <div className="row">
                <div className="col-3 car-2">
                    <div className="div">
                         <h1>$16</h1><p className = "p-price">per table</p>
                    </div>                
                  <h4>Birthday Events</h4>
                  <p className ="desc">Lorem ipsum dolor sit amet laudem partem perfecto per</p>
                  <button className="button">Shop Now</button>
                </div>
                <div className="col-3 car-2">
                <div className="div">
                         <h1>$31</h1><p className = "p-price">per table</p>
                    </div>
                  <h4>Wedding Events</h4>
                  <p className ="desc">Lorem ipsum dolor sit amet laudem partem perfecto per</p>
                  <button className="button">Shop Now</button>
                </div>
                <div className="col-3 car-2">
                <div className="div">
                         <h1>$52</h1><p className = "p-price">per table</p>
                    </div>
                  <h4>Party Events</h4>
                  <p className ="desc">Lorem ipsum dolor sit amet laudem partem perfecto per</p>
                  <button className="button">Shop Now</button>
                </div>
            </div>
          </div>
        </div>
      </>
    );
  };
  
  export default Card;
  