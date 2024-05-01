import { loadHours } from './operationalHours';
import { showLocation } from './location';
import cocoa from './cocoa.jpg';

const getDiv = document.getElementById('content');

function loadHome() {
    const description = document.createElement('div');
    description.textContent = "Come visit us at our cozy and nostalgic cafe specializing in all things marshmallow. It's a place where guests can gather around the campfire or cozy up indoors to enjoy delicious treats centered around everyone's favorite childhood snack - marshmallows!"
    description.classList.add('rest-description');
    getDiv.appendChild(description);
    
    const image = new Image();
    image.src = cocoa;
    image.classList.add('cocoa-img')
    getDiv.appendChild(image);


    showLocation();
    loadHours();


  }

export {loadHome};