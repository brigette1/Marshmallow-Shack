const getDiv = document.getElementById('content');

function showPersonTwo() {
    const card = document.createElement('div');
    card.classList.add('card');
    getDiv.appendChild(card);

    const personTitle = document.createElement('div');
    personTitle.textContent = 'Du';
    personTitle.classList.add('person-title'); 
    card.appendChild(personTitle);

    const person = document.createElement('div'); 
    person.classList.add('about-person');
    card.appendChild(person);
    
    const role = document.createElement('div');
    role.textContent = "Hi I'm Du and I'm the Waiter!";
    role.classList.add('contact');
    person.appendChild(role);

    const phone = document.createElement('div'); 
    phone.textContent = '(222)222-2222';
    phone.classList.add('contact');
    person.appendChild(phone);

    const email = document.createElement('div');
    email.textContent = 'du@marshmallowshack.com';
    email.classList.add('contact');
    person.appendChild(email);
}

export {showPersonTwo};