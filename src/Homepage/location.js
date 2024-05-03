const getDiv = document.getElementById('content'); 

function showLocation() {
    const locationTitle = document.createElement('div'); 
    locationTitle.textContent = 'LOCATION';
    locationTitle.classList.add('location-title'); 
    getDiv.appendChild(locationTitle);

    const address = document.createElement('div');
    address.textContent = "123 S'more Street, Marshmallow Meadows, Fluffyville, USA"
    address.classList.add('address');
    getDiv.appendChild(address);
}

export {showLocation};