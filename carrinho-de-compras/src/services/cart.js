
async function addItemCart(userCart, item) {
    console.log(userCart);
    userCart.push(item)
}

async function deleteCart(userCart, item) {
    const indexFound = userCart.findIndex((p) => p.name === item.name);

    if (indexFound == -1) {
        console.log("item não encontrado");
        return;
    }

    if (userCart[indexFound].quantity > 1) {
        userCart[indexFound].quantity -= 1;
        return;
    }

    if (userCart[indexFound].quantity == 1) {
        userCart.splice(indexFound, 1);
        return;
    }
}

async function removeItemCart(userCart, name) {
    const index = userCart.findIndex((item) => item.name === name);

    if (index !== -1) {
        userCart.splice(index, 1);
    }
}

async function displayCart(usercart) {
    console.log("--------------------------------------------");
    console.log("------------------Carrinho------------------");
    usercart.forEach(element => {
        console.log("Nome: " + element.name + "\n");
        console.log("Preço: " + element.price + "\n");
        console.log("Quantidade: " + element.quantity + "\n");
        console.log("-------------------------------------------");
        console.log("                            SubTotal: " + element.subtotal());
    });

}

async function calculateTotal(userCart) {
    return userCart.reduce((total, item) => total + item.subtotal(), 0);
}

export {
    addItemCart,
    deleteCart,
    removeItemCart,
    calculateTotal,
    displayCart
}