/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Card from "./App";
import App from "./Mycards"

function Cards(){
  return(
    <><Card 
    title="LIST OF TOP NETFLIX SERIES IN 2020"
    imagel="http://ufvcascade.ca/wp-content/uploads/2021/01/the-queens-gambit-netflix-tv-series-WEB.jpg"
    subtitle="NETFLIX ORIGINAL SERIES"
    name="Stranger Things"
    button="WATCH NOW"
     />
  
  <Card
  
    imagel="https://wl-brightside.cf.tsp.li/resize/728x/jpg/68b/b70/6c266e5d93817a2221b128a5e9.jpg"
    subtitle="NETFLIX ORIGINAL SERIES"
    name="Stranger Things"
    button="WATCH NOW"
     />
  
  <Card
  
    imagel="https://english.cdn.zeenews.com/sites/default/files/2021/05/25/938590-money-heist.png"
    subtitle="NETFLIX ORIGINAL SERIES"
    name="Stranger Things"
    button="WATCH NOW"
     />
    </>
  )

}
export default Cards;
