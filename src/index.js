/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Card from "./Mycards";
import Sdata from "./Sdata";




// function Shubham(props) {
  
//   return (
//     <div>
//       <div style={{ margin: "50px" }}>
//         <img
//           style={{ width: "200px" }}
//           src={props.images}
//           alt="url dose not access"
//         ></img>
//         <div>
//           <p>{props.titles}</p>
//           <h3>{props.heading}</h3>
//           <button style={{ padding: "10px" }}>{props.buttons}</button>
//         </div>
//       </div>
//     </div>
//   );
// }

const Mydata=[
    {
    picture:'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/800px-Image_created_with_a_mobile_phone.png', titles:'Image Title'
    ,heading:'Image Name', buttons:'boy'
 } ,
 {
  picture:'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/800px-Image_created_with_a_mobile_phone.png',titles:'Image Title'
  ,heading:'Image Name', buttons:'Play girl'
 },
{
  pictureimages:'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/800px-Image_created_with_a_mobile_phone.png' ,titles:'Image Title'
    ,heading:'Image Name' ,buttons:'Play mail'

}
]



ReactDOM.render(
  <>

  {/* {Mydata.map(function(value){
   
    return(
     <Shubham 
    images={value.picture}
    titles={value.titles}
    heading={value.heading}
    buttons={value.buttons}
    />)
  })} */}


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
    {/* Revision props and map */}
    {/* <h1 style={{textAlign:'center'}}>this is simple Heading</h1>
<div>
    <div style={{margin:'50px'}}>
  <img style={{width:'200px'}} src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/800px-Image_created_with_a_mobile_phone.png' alt='url dose not access'></img>
<div>
  <p>Image Title</p>
  <h3>Image Name</h3>
  <button style={{padding:'10px'}}>Play</button>
</div>
  </div>
</div>

<div>
    <div style={{margin:'50px'}}>
  <img style={{width:'200px'}} src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/800px-Image_created_with_a_mobile_phone.png' alt='url dose not access'></img>
<div>
  <p>Image Title</p>
  <h3>Image Name</h3>
  <button style={{padding:'10px'}}>Play</button>
</div>
  </div>
</div>
<div>
    <div style={{margin:'50px'}}>
  <img style={{width:'200px'}} src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/800px-Image_created_with_a_mobile_phone.png' alt='url dose not access'></img>
<div>
  <p>Image Title</p>
  <h3>Image Name</h3>
  <button style={{padding:'10px'}}>Play</button>
</div>
  </div>
</div> */}
  </>,
  document.getElementById("root")
);
