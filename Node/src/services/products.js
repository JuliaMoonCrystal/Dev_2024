async function getFullName(id, productName) {
    console.log(id + " ------ " + productName);
    await breackLine() 
}

async function breackLine() {
    return  productName
}

//hidden function
async function getProductLabel(productName) {
    return  console.log("\n");
}

module.exports = {
    getFullName,
    getProductLabel,
}