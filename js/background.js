const images = ["bg1.jpg", "bg2.jpg", "bg3.jpg", "bg4.jpg"];
const chosenImage = images[Math.floor(Math.random() * images.length)];
const backgroundImage = document.createElement("img");
let url = "img/"+chosenImage;
document.body.style.backgroundImage = "url("+url+")";
document.body.style.backgroundSize = "cover";
document.body.appendChild(backgroundImage);