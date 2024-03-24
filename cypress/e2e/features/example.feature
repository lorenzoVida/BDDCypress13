Feature: comprar productos
 @focus
    Scenario Outline: buscar producto
        Given Ingreso a la web exito.com para comprar
        When busco un producto de nombre "<nombreProducto>"
        Examples:
            | nombreProducto |
            | mochilas  |
            | macbook  |