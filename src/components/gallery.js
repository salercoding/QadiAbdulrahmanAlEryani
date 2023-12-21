import React from "react";
import { useState } from "react";

import { images, catImages, catTwoImages } from "./imagesArrays";



function Gallery() {
  const [category, setCategory] = useState(images);
  
  return (
    <div className="gallery">
      <h2> Gallery </h2>
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
  );
}

export default Gallery;