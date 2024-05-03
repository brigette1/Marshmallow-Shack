const getDiv = document.getElementById('content');

function addFood() {
    const foodTitle = document.createElement('div'); 
    foodTitle.textContent = 'FOOD';
    foodTitle.classList.add('category-title');
    getDiv.appendChild(foodTitle); 



    const smoresTitle = document.createElement('div'); 
    smoresTitle.textContent = "Classic Campfire S'mores";
    smoresTitle.classList.add('food-title');
    getDiv.appendChild(smoresTitle);
    
    const smores = document.createElement('div');
    smores.textContent = 'A timeless favorite made with graham crackers, chocolate squares, and perfectly toasted marshmallows.';
    smores.classList.add('food');
    smoresTitle.appendChild(smores);



    const toastTitle = document.createElement('div'); 
    toastTitle.textContent = 'Marshmallow Stuffed French Toast';
    toastTitle.classList.add('food-title');
    getDiv.appendChild(toastTitle); 

    const toast = document.createElement('div');
    toast.textContent = 'Thick slices of French toast stuffed with gooey marshmallow fluff, topped with powdered sugar and maple syrup.';
    toast.classList.add('food');
    toastTitle.appendChild(toast);


    const paniniTitle = document.createElement('div'); 
    paniniTitle.textContent = 'Toasty Marshmallow Panini';
    paniniTitle.classList.add('food-title');
    getDiv.appendChild(paniniTitle); 

    const panini = document.createElement('div');
    panini.textContent = 'A savory option featuring melted cheese, sliced ham, and roasted red peppers sandwiched between two slices of grilled bread, with a layer of toasted marshmallow spread for a sweet twist.';
    panini.classList.add('food');
    paniniTitle.appendChild(panini);
}

export {addFood};