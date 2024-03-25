
//Declaración simplificada de productos

id = [1,2,3];
nombreProducto = ["Funko Pikachu", "Funko Charmander", "Funko Lapras"];
precio = [localStorage.getItem("precioProducto1"),localStorage.getItem("precioProducto2"),localStorage.getItem("precioProducto3")];
cantidad = [localStorage.getItem("cantidadProducto1"),localStorage.getItem("cantidadProducto2"),localStorage.getItem("cantidadProducto3")];

//console.log(precio);
//console.log(cantidad);

// Muestra los campos de cada producto con inventario(añadido al carrito) en html
function actualizarLista(id,nombreProducto,precio,cantidad){
    let contador = 1;
    for (let i =0; i < cantidad.length; i++){
        if (cantidad[i] > 0){
            key = "item" + contador;
            const item = document.getElementById(key);
            let subTotal = parseInt(cantidad[i]) * parseInt(precio[i]);
            item.innerHTML = '<td scope="col">'+contador+'</td><td scope="col">'+nombreProducto[i]+'</td><td scope="col">'+precio[i]+'</td><td scope="col">'+cantidad[i]+'</td><td scope="col">'+subTotal +'</td><td scope="col"><input type="button" class="btn btn-danger" onclick="eliminaProducto('+parseInt(id[i])+')" value="X"></td>';
            contador++;
        }
        
    }
    calculosTotales();
}

// Elimina los campos mostrados en html
function limpiarLista(){
    let item1 = document.getElementById("item1");
    let item2 = document.getElementById("item2");
    let item3 = document.getElementById("item3");
    item1.innerHTML ="";
    item2.innerHTML ="";
    item3.innerHTML ="";
}

//Elimina producto y actualiza inventario
function eliminaProducto(value){
    limpiarLista();
    for (let i = 1; i <= 3; i++){
        if(value == i){
            let key = "cantidadProducto" + i;
            localStorage.setItem(key,0);
        }
    }
    cantidad = [localStorage.getItem("cantidadProducto1"),localStorage.getItem("cantidadProducto2"),localStorage.getItem("cantidadProducto3")];
    actualizarLista(id,nombreProducto,precio,cantidad);
}

//vacia carrito  y actualiza inventario
function vaciarCarrito(){
    limpiarLista();
    for (let i = 1; i <= 3; i++){
        let key = "cantidadProducto" + i;
        localStorage.setItem(key,0);
    }
    cantidad = [localStorage.getItem("cantidadProducto1"),localStorage.getItem("cantidadProducto2"),localStorage.getItem("cantidadProducto3")];
}

//Calcula subtotal, descuento, iva, total en tablas
function calculosTotales(){
    let subtotal = document.getElementById("subtotal");
    let subtotalDescuento = document.getElementById("subtotalDescuento");
    let iva = document.getElementById("iva");
    let total = document.getElementById("total");
    let totalizador=0;
    for (let i = 0; i < 3; i++){
        totalizador += cantidad[i] * precio[i];
    }
    subtotal.innerHTML = totalizador;
    let totalizadorDescontado = 0.9*totalizador;
    subtotalDescuento.innerHTML = totalizadorDescontado;
    let ivaCalculado = totalizadorDescontado*0.19;
    iva.innerHTML = ivaCalculado;
    let totalFinal = totalizadorDescontado*1.19;
    total.value = totalFinal;
}

//Función solo para retroalimentar el proceso de fin de compra (en vez del summit).
function finalizar(){
    let nombre = document.getElementById("nombre");
    let email = document.getElementById("email");
    let total = document.getElementById("total");
    if (nombre.value != "" && email.value != "")
        alert(`Gracias por comprar ${nombre.value}. Su comprobante será enviado a ${email.value} por un moto de ${total.value}`);

}


actualizarLista(id,nombreProducto,precio,cantidad);
