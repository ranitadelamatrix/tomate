class storage{
    constructor(){
        //Setear según corresponda-----------------------
        let cantidadDeProductosDefault = [0,0,0];
        let precioDeProductosDefault = [10000,20000,30000];
        //----------------------------------------------
        let cantidadDeProductos = [];
        let cantidadTotalDeProductos = 0;

        for (let i=1; i <= cantidadDeProductosDefault.length; i++){
            //cantidades
            let keyCantidadDeProductos = "cantidadProducto"+i;
            cantidadDeProductos[i-1] = localStorage.getItem(keyCantidadDeProductos);
            if (cantidadDeProductos[i-1] == null){
                cantidadDeProductos[i-1] = cantidadDeProductosDefault[i-1];
                localStorage.setItem(keyCantidadDeProductos,cantidadDeProductos[i-1]);
                cantidadTotalDeProductos += cantidadDeProductos[i-1];
            }
            //precios
            let keyPrecioDeProductos = "precioProducto"+i;
            localStorage.setItem(keyPrecioDeProductos,precioDeProductosDefault[i-1]);
        }
        this.cantidadDeProductos = cantidadDeProductos;
        this.precioDeProductos = precioDeProductosDefault;
        this.cantidadTotalDeProductos = cantidadTotalDeProductos;
        //console.log([this.cantidadDeProductos,this.precioDeProductos, this.cantidadTotalDeProductos]);
    }

    actualizar(cantidades){
        let cantidadDeProductos = [];
        let cantidadTotalDeProductos = 0; 
        for (let i=1; i <= cantidades.length; i++){
            let keyCantidadDeProductos = "cantidadProducto"+i;
            localStorage.setItem(keyCantidadDeProductos,cantidades[i-1]);
            cantidadDeProductos[i-1] = cantidades[i-1];
            cantidadTotalDeProductos += cantidades[i-1];
        }
        this.cantidadDeProductos = cantidadDeProductos;
        this.cantidadTotalDeProductos = cantidadTotalDeProductos;
        console.log([this.cantidadDeProductos,this.cantidadTotalDeProductos]);
    }
}
class carritoDeCompras{
    constructor(descuento=0, items){
        this.contadorCarrito = document.getElementById("cantidadtotales");
        this.cantidad = document.getElementById("cantidad");
        this.totalCompra = document.getElementById("total");
        this.descuentoTotal = document.getElementById("descuento");
        this.totalConDescuento = document.getElementById("total-descuento");
        this.btnPago = document.getElementById("btn-pago-eliminar");
        this.descuento = descuento;

        this.productoEnCarrito1 = document.getElementById("productos-carrito-funko1")
        this.totalProductosEnCarrito1 = document.getElementById("total-funko1")
        this.productoEnCarrito2 = document.getElementById("productos-carrito-funko2")
        this.totalProductosEnCarrito2 = document.getElementById("total-funko2")
        this.productoEnCarrito3 = document.getElementById("productos-carrito-funko3")
        this.totalProductosEnCarrito3 = document.getElementById("total-funko3")
    }


    actualizar(cuenta,arregloDeProductos){
        //contadores
        this.contadorCarrito.value = cuenta;
        this.cantidad.innerHTML = "<p class='text-right'> <b>N° productos <span>" + cuenta + "</span></b></p><br>";
        //productos

        
        if (parseInt(arregloDeProductos[0].cantidad)>0){
            let precioTotalProducto1 = parseInt(arregloDeProductos[0].cantidad)*parseInt(arregloDeProductos[0].precio);
        this.productoEnCarrito1.innerHTML = "<p>" + parseInt(arregloDeProductos[0].cantidad) + " x Funko " + arregloDeProductos[0].pkmn + " $" + parseInt(arregloDeProductos[0].precio);
        this.productoEnCarrito1.innerHTML += "<img src=" + arregloDeProductos[0].img + " width='60' height='60' ></p>";
        this.productoEnCarrito1.innerHTML += "<input type='button' class='btn btn-danger' onclick='eliminaProducto(" + parseInt(arregloDeProductos[0].id) + ")' value='X'>";
        this.totalProductosEnCarrito1.innerHTML = "<p class='text-right'><b>Total $ <input class='sinBorde' type='text' value=" + precioTotalProducto1 + " disabled></b></p>";
        }
        else{
            this.productoEnCarrito1.innerHTML = "";
            this.totalProductosEnCarrito1.innerHTML = "";
        }

        if (parseInt(arregloDeProductos[1].cantidad)>0){
            let precioTotalProducto2 = parseInt(arregloDeProductos[1].cantidad)*parseInt(arregloDeProductos[1].precio);
        this.productoEnCarrito2.innerHTML = "<p>" + parseInt(arregloDeProductos[1].cantidad) + " x Funko " + arregloDeProductos[1].pkmn + " $" + parseInt(arregloDeProductos[1].precio);
        this.productoEnCarrito2.innerHTML += "<img src=" + arregloDeProductos[1].img + " width='60' height='60' ></p>";
        this.productoEnCarrito2.innerHTML += "<input type='button' class='btn btn-danger' onclick='eliminaProducto(" + parseInt(arregloDeProductos[1].id) + ")' value='X'>";
        this.totalProductosEnCarrito2.innerHTML = "<p class='text-right'><b>Total $ <input class='sinBorde' type='text' value=" + precioTotalProducto2 + " disabled></b></p>";
        }
        else{
            this.productoEnCarrito2.innerHTML = "";
            this.totalProductosEnCarrito2.innerHTML = "";
        }
        
        if (parseInt(arregloDeProductos[2].cantidad)>0){
            let precioTotalProducto3 = parseInt(arregloDeProductos[2].cantidad)*parseInt(arregloDeProductos[2].precio);
        this.productoEnCarrito3.innerHTML = "<p>" + parseInt(arregloDeProductos[2].cantidad) + " x Funko " + arregloDeProductos[2].pkmn + " $" + parseInt(arregloDeProductos[2].precio);
        this.productoEnCarrito3.innerHTML += "<img src=" + arregloDeProductos[2].img + " width='60' height='60' ></p>";
        this.productoEnCarrito3.innerHTML += "<input type='button' class='btn btn-danger' onclick='eliminaProducto(" + parseInt(arregloDeProductos[2].id) + ")' value='X'>";
        this.totalProductosEnCarrito3.innerHTML = "<p class='text-right'><b>Total $ <input class='sinBorde' type='text' value=" + precioTotalProducto3 + " disabled></b></p>";
        }
        else{
            this.productoEnCarrito3.innerHTML = "";
            this.totalProductosEnCarrito3.innerHTML = "";
        }
        //-------------------------------------------
        
       
        //totales
        if (cuenta > 0){
            let totalParcial = producto1.cantidad*producto1.precio+producto2.cantidad*producto2.precio+producto3.cantidad*producto3.precio;
            let aDescontar = parseInt(totalParcial*this.descuento);
            let totalFinal = totalParcial - aDescontar;
            this.totalCompra.innerHTML = "<p class='text-right'> <b>Total $ <span id='total'>" + totalParcial + "</span></b></p><br>";
            this.descuentoTotal.innerHTML = "<p class='text-right'> <b>Descuento $ <span id='total'>" + aDescontar + "</span></b></p><br>";
            this.totalConDescuento.innerHTML = "<p class='text-right'> <b>TOTAL A PAGAR $ <span id='descuento'>" + totalFinal + "</span></b></p><br>";
            this.btnPago.innerHTML = "<a href='./assets/html/carrito.html' class='btn bntCarrito w-100 m-1'>Finalizar pedido</a>";"<a href='carrito.html' class='btn bntCarrito w-100 m-1'>Finalizar pedido</a>";
            this.btnPago.innerHTML += "<input type='button' class='btn bntCarrito w-100 m-1 btnFinalizar' value='Pago2'>";
            this.btnPago.innerHTML += "<input type='button' class='btn bntVaciar w-100 m-1' value='Vaciar' onclick='vaciarCarrito()'>";
        }
        else{
            this.totalCompra.innerHTML = "";
            this.descuentoTotal.innerHTML = "";
            this.totalConDescuento.innerHTML = "";
            this.btnPago.innerHTML = "";
        }
    }
}

//--------------------------------------------------


//--------------------------------------------------
class producto{
    constructor(id,pkmn,img,cantidad,precio){
        this.id = id;
        this.pkmn = pkmn;
        this.img = "../../assets/img/" + img;
        this.cantidad = cantidad;
        this.precio = precio;
    }
}
//---------------------------------------------------

//Función para agregar el producto al carrito de compras
function agregarProducto(value){
    for (let i=1; i <= 3; i++){
        if(value == i){
            arregloDeProductos[i-1].cantidad++;
            inventario.actualizar([parseInt(arregloDeProductos[0].cantidad), parseInt(arregloDeProductos[1].cantidad), parseInt(arregloDeProductos[2].cantidad)]);
        }
    }
    carrito.actualizar(inventario.cantidadTotalDeProductos,arregloDeProductos);
}

//-----------------------------------------------------------------------
function eliminaProducto(value){
    for (let i=1; i <= 3; i++){
        if(value == i){
            arregloDeProductos[i-1].cantidad = 0;
            inventario.actualizar([parseInt(arregloDeProductos[0].cantidad), parseInt(arregloDeProductos[1].cantidad), parseInt(arregloDeProductos[2].cantidad)]);
        }
    }
    carrito.actualizar(inventario.cantidadTotalDeProductos,arregloDeProductos);
}

//-----------------------------------------------------------------------
function vaciarCarrito(){
    arregloDeProductos = [0,0,0]
    inventario.actualizar(arregloDeProductos);
    carrito.actualizar(inventario.cantidadTotalDeProductos,arregloDeProductos);
}

//-----------------------------------------------------------------------



inventario = new storage();
producto1 = new producto(1,"Pikachu","img_pikachu.jpg",inventario.cantidadDeProductos[0],inventario.precioDeProductos[0]);
producto2 = new producto(2,"Charmander","img_charmander.jpg",inventario.cantidadDeProductos[1],inventario.precioDeProductos[1]);
producto3 = new producto(3,"Lapras","img_lapras.jpg",inventario.cantidadDeProductos[2],inventario.precioDeProductos[2]);
arregloDeProductos = [producto1,producto2,producto3];
inventario.actualizar([parseInt(arregloDeProductos[0].cantidad), parseInt(arregloDeProductos[1].cantidad), parseInt(arregloDeProductos[2].cantidad)]);
carrito = new carritoDeCompras(0.1,inventario.items); //10% de descuento
carrito.actualizar(inventario.cantidadTotalDeProductos,arregloDeProductos);

