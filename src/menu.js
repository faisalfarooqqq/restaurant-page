function menuContainer(){
   const menu = document.createElement('div');
   
   menu.appendChild(
    createMenu(
        "Pizza", 
        "Veggi Cheese Pizza", 
        "$50"
        )
    );
   
   menu.appendChild(
    createMenu(
        "Chocolate Donut", 
        "Chocolate donut filled with peanut butter", 
        "$20"
        )
    );
   
   menu.appendChild(
    createMenu(
        "Coffee", 
        "black cofee", 
        "$5"
        )
    );
   
    menu.appendChild(
    createMenu(
        "Zinger Burger", 
        "Chicken zinger burger with cheese", 
        "$80"
        )
    );

    return menu;
}

function createMenu(name, description, price){

    const item = document.createElement('div');
    
    const itemName = document.createElement('h2');
    const itemDescription = document.createElement('p');
    const itemPrice = document.createElement('p');

    itemName.textContent = name;
    itemDescription.textContent = description;
    itemPrice.textContent = price;

    item.appendChild(itemName);
    item.appendChild(itemDescription);
    item.appendChild(itemPrice);

    return item;
}

function menuComponent(){
    const menuDiv = document.createElement('div');
    menuDiv.appendChild(menuContainer());

    return menuDiv;
}

export {menuComponent}