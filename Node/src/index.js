// const productsService = require("./services/products")
// const config = require("./services/config")
// const dataBase = require("./services/database")

import { disconnectDatabase, databaseType } from "./utils/database.js";
import * as api from "./utils/api.js";


async function main() {

    //let products = productsService.getFullName(1, "Macarrão")
    // let products = productsService.getProductLabel("Macarrão")
    // console.log(config.dev.version);
    // console.log(dataBase.connectDataBase("myDataBase"));


    api.getDataFromApi();
    disconnectDatabase();
}

main()