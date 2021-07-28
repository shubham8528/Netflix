/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Card from "./Mycards";
import Sdata from "./Sdata";



ReactDOM.render(
  <>
    <div className="banName">
      <h2>LIST OF TOP NETFLIX SERIES IN 2020</h2>
    </div>
    <div className="container">
      {Sdata.map((mcard) => {
        return (
          <Card
            id={mcard.id}
            name={mcard.name}
            imagel={mcard.imagel}
            subtitle={mcard.subtitle}
            button={mcard.button}
          />
        );
      })}
    </div>
    
  </>,
  document.getElementById("root")
);
