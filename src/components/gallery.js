import React from "react";
//import { isInputElement } from "react-router-dom/dist/dom";

//import "./timeline.css";
//import { useState } from "react";

//import { images, catImages, catTwoImages } from "./imagesArrays";

function Gallery() {
  //const [category, setCategory] = useState(images);

  return (
    <div className="gallery">
      <h2>Gallery</h2>
      <div className="timeline">
       <div className="containerGalleryA">
        <img className="typeA" src="images/image-two-test.jpeg"/>
        <h3 className="typeA">Date</h3>
        <p className="typeA">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sapien eget mi proin sed libero enim sed faucibus. At ultrices mi tempus imperdiet nulla malesuada pellentesque. Sed arcu non odio euismod lacinia at. Augue ut lectus arcu bibendum at. Consectetur purus ut faucibus pulvinar elementum integer enim neque. Ipsum dolor sit amet consectetur adipiscing elit duis tristique. Faucibus scelerisque eleifend donec pretium. Tellus orci ac auctor augue mauris augue neque gravida. Justo laoreet sit amet cursus sit. Tellus orci ac auctor augue.</p>
   
        <p className="typeB">info</p>
        <h3 className="typeB">Date</h3>
        <img className="typeB" src="images/image-two-test.jpeg"/>
      </div>
      </div>
      </div>
      );
}


/*<h2> Gallery </h2>
<h3> Filter: </h3>
<button type="button" onClick={() => setCategory(images)}>
  all
</button>
<button type="button" onClick={() => setCategory(catImages)}>
  Category One
</button>
<button type="button" onClick={() => setCategory(catTwoImages)}>
  Category Two
</button>
<div>
  {category.map((image) => (
    <a href={image.src} target="_blank" rel="noopener noreferrer">
      <img
        key={image.id}
        className="gallery__item"
        src={image.src}
        alt={image.alt}
      />{" "}
    </a>
  ))}
  </div>
</div>
);*/



export default Gallery;
