import { chain, get } from "lodash";

const getDiv = document.getElementById('content');

function showPersonOne() {
    const card = document.createElement('div');
    card.classList.add('card');
    getDiv.appendChild(card);

    const personTitle = document.createElement('div');
    personTitle.textContent = 'Juan';
    personTitle.classList.add('person-title'); 
    card.appendChild(personTitle);

    //new div containing all contact info
    const person = document.createElement('div'); 
    person.classList.add('about-person');
    card.appendChild(person);
    
    const role = document.createElement('div');
    role.textContent = "Hi I'm Juan and I'm the Chef!";
    role.classList.add('contact');
    person.appendChild(role);

    const phone = document.createElement('div'); 
    phone.textContent = '(111)111-1111';
    phone.classList.add('contact');
    person.appendChild(phone);

    const email = document.createElement('div');
    email.textContent = 'juan@marshmallowshack.com';
    email.classList.add('contact');
    person.appendChild(email);
}

export {showPersonOne};