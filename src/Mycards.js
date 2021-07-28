/* eslint-disable jsx-a11y/alt-text */
import React from "react";

function Card(props) {
  
  return (
    <>
 
   
      <div className="boxx" >
        <div className="box">
          <div className="boxImg">
            <img src={props.imagel} />
          </div>

          <h4 className="temp">{props.subtitle}</h4>
          <h1 className="srizName">{props.name}</h1>
          <a href={props.link} target="_blank" rel="noreferrer">
            <button className="mybtn"> {props.button}</button>
          </a>
        </div>
      </div>


  
          </>
  );
}


export default Card;
console.log(Card)
