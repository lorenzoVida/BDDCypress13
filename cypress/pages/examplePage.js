class examplePage{
    txtBuscarProducto ="input[placeholder^='Buscar en exito.com']"

    visitarWeb(){
        cy.visit('https://www.exito.com/')
    }

    buscarProducto(nombreProducto){
        cy.get(this.txtBuscarProducto).type(nombreProducto)
    }
}
module.exports = new examplePage()