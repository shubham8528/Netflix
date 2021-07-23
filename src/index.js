/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Card from "./Mycards";
import data from "./Sdata";
console.log(data)
ReactDOM.render(
  <>
    <div className="banName">
      <h2>LIST OF TOP NETFLIX SERIES IN 2020</h2>
    </div>
    <Card
      imagel={data[0].imagel}
      subtitle={data[0].subtitle}
      name={data[0].name}
      button={data[0].button}
      link={data[0].link}
    />
    <Card
      imagel={data[1].imagel}
      subtitle={data[1].subtitle}
      name={data[1].name}
      button={data[1].button}
      link={data[1].link}
    />

    <Card
      imagel={data[2].imagel}
      subtitle={data[2].subtitle}
      name={data[2].name}
      button={data[2].button}
      link={data[2].link}
    />

    <Card
      imagel={data[3].imagel}
      subtitle={data[3].subtitle}
      name={data[3].name}
      button={data[3].button}
      link={data[3].link}
    />
  </>,
  document.getElementById("root")
);
