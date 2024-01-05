//exporting module
console.log("exporting module");

const shippingCost = 10;
export const cart = []; 

export const addToCart = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(`${quantity} ${product} added to cart`);
}

//Named export to export multiple things
const totalPrice = 237;
const totalQuantiy = 20;
export {totalPrice, totalQuantity};

export default function (product, quantity) { //we export the value directly for defaults not a pointer variable
    cart.push({ product, quantity });
    console.log(`${quantity} ${product} added to cart`);
}
//imports are not copies of exports but pretty much a live version of the export