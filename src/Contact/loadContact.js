import { showPersonOne } from "./personOne";
import { showPersonTwo } from "./personTwo";
import { showPersonThree } from "./personThree";

const getDiv = document.getElementById('content');

function loadContact() {
    const contactTitle = document.createElement('div');
    contactTitle.textContent = 'CONTACT US';
    contactTitle.classList.add('contact-title'); 
    getDiv.appendChild(contactTitle);

    showPersonOne();
    showPersonTwo();
    showPersonThree();
}

export {loadContact};
