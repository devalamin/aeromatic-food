// use local storage to manage cart data
const addToDB = id => {
    let foodMenu = {};

    //get the shopping cart from local storage
    const storedCart = localStorage.getItem('menu-cart');
    if (storedCart) {
        foodMenu = JSON.parse(storedCart);
    }

    // add quantity
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
    //get the shopping cart from local storage
    const storedCart = localStorage.getItem('menu-cart');
    if (storedCart) {
        foodMenu = JSON.parse(storedCart);
    }
    return foodMenu;

}

// const removeFromDb = id => {
//     const storedCart = localStorage.getItem('menu-cart');
//     if (storedCart) {
//         const foodMenu = JSON.parse(storedCart);
//         if (id in foodMenu) {
//             delete foodMenu[id];
//             localStorage.setItem('menu-cart', JSON.stringify(foodMenu));
//         }
//     }
// }

// const deleteFoodMenu = () => {
//     localStorage.removeItem('menu-cart');
// }

export {
    addToDB,
    getStoredFood,
}