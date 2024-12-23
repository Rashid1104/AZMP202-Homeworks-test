import React from "react";
import Coders from "./img/coders.jpg"
import "./index.css"

const curses = [
  {
    name: "Coders",
    logo: Coders, 
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    link: "https://www.instagram.com/codersazerbaijan/",
  },
  {
    name: "Kod Akademiya",
    logo: "data:image/png;base64,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", 
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    link: "https://www.instagram.com/code.edu.az/",
  },
];

const MyCurses = () => {
  return (
    <div className="cards-all">
        <div className="container my-5">
      <h1 className="text-center mb-4">
       My Curses
      </h1>
      <div className="row">
        {curses.map((curse, index) => (
          <div className="col-md-6 mb-4" key={index}>
            <div className="cards-img card shadow-sm h-100">
              <img
                src={curse.logo}
                className="card-img-top p-4"
                alt={`${curse.name} logo`}
              />
              <div className="card-body text-center">
                <h2 className="card-title">{curse.name}</h2>
                <p className="card-text">{curse.description}</p>
                <a href={curse.link} target="_blank" className="btn btn-primary">
                  Visit Website
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default MyCurses;

