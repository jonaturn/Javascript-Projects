//importing module
// import {addToCart, totalPrice as price, totalQuantiy} from "./shoppingCart.js";
// addToCart("bread", 5);
// console.log(price, totalQuantiy);
console.log("Importing module");

// import * as ShoppingCart from "./shoppingCart.js";

// ShoppingCart.addToCart("bread", 5);
// console.log(ShoppingCart.totalPrice);

//Default exports one thing per module

// import add, {cart} from "./shoppingCart.js"
// add("dildo", 10);
// add("condom", 10);
// add("plan B", 10);

// console.log(cart);
//dont mix named and default exports in same module

//top level await blocks the execution of the rest of the code both in the exporting module and importing module
//top level await allows us to directly access the objects in the promise without a .then() handler.

//old way of doing modules
const shoppingCart2 = (function() {
    const cart = [];
    const shippingCost = 10;
    const totalPrice =237;
    const totalQuantiy = 23;

    const addToCart = function(product, quantity) {
        cart.push({ product, quantity})
        console.log(`${quantity} ${product} added to cart`);
    };

    const orderStock = function() {         
        console.log(`${quantity} ${product} ordered fro suppler`);
    }

    return { //only what we return can be accessed everything else is private
        addToCart,
        cart,
        totalPrice,
        totalQuantiy,
    };
}) ()

shoppingCart2.addToCart("penis", 1);

//this module is no longer the global scope so everything here is only accessible within the module and not accessible in the global scope ie. browser console
//this old way of moduling has some drawbacks,to follow the rule of one module per file, we will need to have many files declared in the HTML and we must pay attention to the sequence of declaration
//hence to make things easier they added native modules

//CommonJS modules
// Node.js runs JS on a server outside of a browser
