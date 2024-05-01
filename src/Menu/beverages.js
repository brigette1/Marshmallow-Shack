const getDiv = document.getElementById('content');

function addBeverages() {
    const beveragesTitle = document.createElement('div'); 
    beveragesTitle.textContent = 'BEVERAGES';
    beveragesTitle.classList.add('category-title');
    getDiv.appendChild(beveragesTitle); 



    const latteTitle = document.createElement('div'); 
    latteTitle.textContent = "Toasted Marshmallow Latte";
    latteTitle.classList.add('bev-title');
    getDiv.appendChild(latteTitle);
    
    const latte = document.createElement('div');
    latte.textContent = 'A comforting latte with a hint of toasted marshmallow flavor, topped with foam and a sprinkle of cinnamon.';
    latte.classList.add('bev');
    latteTitle.appendChild(latte);



    const cocoaTitle = document.createElement('div'); 
    cocoaTitle.textContent = 'Hot Cocoa with Marshmallow Clouds';
    cocoaTitle.classList.add('bev-title');
    getDiv.appendChild(cocoaTitle); 

    const cocoa = document.createElement('div');
    cocoa.textContent = 'Rich and creamy hot cocoa served with a generous helping of marshmallow fluff, creating fluffy "clouds" on top.';
    cocoa.classList.add('bev');
    cocoaTitle.appendChild(cocoa);
}

export {addBeverages};