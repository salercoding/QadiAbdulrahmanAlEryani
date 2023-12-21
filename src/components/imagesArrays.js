//main image array
let images = [];

//image objects
let photo = {
  src: "sample-image.jpeg",
  alt: "sample image",
  id: "first",
  category: "sample"
};
images.push(photo);
images.push({
    src: "images/image-two-test.jpeg",
    alt: "testing",
    id: "second",
    category: "catImages",
});
images.push({
    src: "images/image-two-test.jpeg",
    alt: "testing",
    id: "third",
    category: "catTwoImages",
});
images.push({
    src: "images/image-three-test.jpg",
    alt: "testing",
    id: "fourth",
    category: "catImages"
});

//categories
function isCatImages(image){
    return image.category === "catImages";
}
let catImages = images.filter(isCatImages);

function isCatTwoImages(image){
    return image.category === "catTwoImages";
}
let catTwoImages = images.filter(isCatTwoImages);

export {images, catImages, catTwoImages};