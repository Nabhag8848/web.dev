const allImages = document.querySelectorAll("img");

allImages.forEach((image) => {
  console.dir(image.alt);
});