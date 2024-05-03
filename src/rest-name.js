const getDiv = document.getElementById('name');

function showRestName() {
    const restName = document.createElement('div'); 
    restName.textContent = 'THE MARSHMALLOW SHACK';
    restName.classList.add('rest-name');
    getDiv.appendChild(restName);
}

export {showRestName};