const getDiv = document.getElementById('content'); 

function loadHours() {
    const hoursTitle = document.createElement('div');
    hoursTitle.textContent = 'HOURS';
    hoursTitle.classList.add('hours-title');
    getDiv.appendChild(hoursTitle);

    const hours = document.createElement('div'); 
    hours.classList.add('hours');
    getDiv.appendChild(hours);

    const sun = document.createElement('div'); 
    sun.textContent = 'Sunday: 11am - 8pm';
    sun.classList.add('day');
    hours.appendChild(sun); 

    const mon = document.createElement('div'); 
    mon.textContent = 'Monday: 11am - 8pm'; 
    mon.classList.add('day');
    hours.appendChild(mon); 

    const tues = document.createElement('div');
    tues.textContent = 'Tuesday: 11am - 8pm';
    tues.classList.add('day');
    hours.appendChild(tues); 

    const wed = document.createElement('div'); 
    wed.textContent = 'Wednesday: 11am - 8pm'; 
    wed.classList.add('day');
    hours.appendChild(wed); 

    const thurs = document.createElement('div'); 
    thurs.textContent = 'Thursday: 11am - 9pm'; 
    thurs.classList.add('day');
    hours.appendChild(thurs);

    const fri = document.createElement('div'); 
    fri.textContent = 'Friday: 11am - 9pm'; 
    fri.classList.add('day');
    hours.appendChild(fri);

    const sat = document.createElement('div'); 
    sat.textContent = 'Saturday: 11am - 11pm'; 
    sat.classList.add('day');
    hours.appendChild(sat); 
}

export {loadHours};