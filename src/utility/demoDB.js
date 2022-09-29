
const addToDB = id => {
    let foodMenu = {};
    const storedCart = localStorage.getItem('menu-cart');
    if (storedCart) {
        foodMenu = JSON.parse(storedCart);
    }


    const quantity = foodMenu[id];
    if (quantity) {
        const newQuantity = quantity + 1;
        foodMenu[id] = newQuantity;
    }
    else {
        foodMenu[id] = 1;
    }
    localStorage.setItem('menu-cart', JSON.stringify(foodMenu));
}

const getStoredFood = () => {
    let foodMenu = {};
    const storedCart = localStorage.getItem('menu-cart');
    if (storedCart) {
        foodMenu = JSON.parse(storedCart);
    }
    return foodMenu;

}


// const deleteFoodMenu = () => {
//     localStorage.removeItem('menu-cart');
// }

export {
    addToDB,
    getStoredFood,
}