import React from "react";
//import { isInputElement } from "react-router-dom/dist/dom";

//import "./timeline.css";
//import { useState } from "react";

import { photo } from "./imagesArrays";

const imageOne = new photo("images/image-two-test.jpeg", "something", "1965", "skating", "man on a skateboard");
imageOne.addDescription("this is something about what you're seeing here.");

function Gallery() {
  return (
    <div className="gallery">
      <h2>Gallery</h2>
      <div className="timeline">
        {imageOne.display()}
      </div>
      </div>
  
      );
}


export default Gallery;
