import { addFood } from "./food";
import { addBeverages } from "./beverages";

const getDiv = document.getElementById('content');

function loadMenu() {
    addFood();

    const line = document.createElement('div');
    line.textContent = ('==============================================================================================');
    line.classList.add('line');
    getDiv.appendChild(line);
    
    addBeverages();
}

export {loadMenu};