import createItem from "./services/itens.js"
import * as cartService from "./services/cart.js"

const cart = []

console.log("Olá Shopee");

const item1 = await createItem("Pen-drive",20.99,1)
const item2 = await createItem("Pen-drive",20.99,2)
const item3 = await createItem("Pen-drive",20.99,3)

//add itens to cart
await cartService.addItemCart(cart, item1)
await cartService.addItemCart(cart, item2)
await cartService.addItemCart(cart, item3)

console.log("Itens do carrinho de compras");
console.log(await cartService.displayCart(cart));

//remove itens to cart

await cartService.calculateTotal(cart)
console.log("Total da compra");
console.log(await cartService.calculateTotal(cart));

await cartService.removeItemCart(cart, item1.name)
await cartService.removeItemCart(cart, item2.name)

console.log("Total da compras");
console.log(await cartService.calculateTotal(cart));
console.log(item2.subtotal());


