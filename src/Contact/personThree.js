const getDiv = document.getElementById('content');

function showPersonThree() {
    const card = document.createElement('div');
    card.classList.add('card');
    getDiv.appendChild(card);

    const personTitle = document.createElement('div');
    personTitle.textContent = 'Tree';
    personTitle.classList.add('person-title'); 
    card.appendChild(personTitle);

    const person = document.createElement('div'); 
    person.classList.add('about-person');
    card.appendChild(person);
    
    const role = document.createElement('div');
    role.textContent = "Hi I'm Tree and I'm the Manager!";
    role.classList.add('contact');
    person.appendChild(role);

    const phone = document.createElement('div'); 
    phone.textContent = '(333)333-3333';
    phone.classList.add('contact');
    person.appendChild(phone);

    const email = document.createElement('div');
    email.textContent = 'tree@marshmallowshack.com';
    email.classList.add('contact');
    person.appendChild(email);
}

export {showPersonThree};