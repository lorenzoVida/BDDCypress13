import { Given, When } from "cypress-cucumber-preprocessor/steps";

const busquedaProducto = require("../../pages/examplePage")
Given("Ingreso a la web exito.com para comprar",()=>{
    busquedaProducto.visitarWeb()
})

When("busco un producto de nombre {string}",(nombreProducto)=>{
    busquedaProducto.buscarProducto(nombreProducto)
})