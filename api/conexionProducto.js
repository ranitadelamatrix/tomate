const {Pool} = require('pg')
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'comercio',
    password: 'pancho1677',
    port:5432
})

pool.connect((err,client,release)=>{
    if (err){
        console.log("error al conectar: ", err)
    }else{
        console.log("conexion exitosa")
    }
})


async function verProductos() {
    try {
        const client = await pool.connect();
        const result = await client.query('SELECT * FROM productos');
        client.release();
        console.log(result.rows);
        return result.rows;
    } catch (error) {
        console.error('Error al obtener productos:', error);
        throw error;
    }
}

async function idProductos(id){
try{
    const client = await pool.connect()
    const result = await client.query('SELECT idproductoss, nombre, cantidad, precio from productos where idproductos = $1',[id])
    client.release()
    console.log(result.rows[0])
    return  result.rows[0]
}
catch(error){
    console.log("el error es: ", error)
}
}
async function agregarProducto(nombre,rubro,proveedor,cantidad,precio){
    try{
        const client = await pool.connect()
        const resulta = await client.query('INSERT INTO productos(nombre,rubro,proveedor,cantidad,precio)values($1,$2,$3,$4,$5)RETURNING *',[nombre,rubro,proveedor,cantidad,precio])
        client.release()
        console.log("se agrego exitosamente")
        return resulta.rows
        
    }
    catch(error){
        console.error(`No se pudo insertar el producto:`, error)

    }
}
async function actualizarProducto(id,precio){
    try{
        const client = await pool.connect()
        const result = await client.query('update productos set precio = $1 where idproductos = $2',[nuevoNombre,dni])
        client.release()
        console.log( 'se actualizo a: ',nuevoNombre)
    }
    catch(error){
        console.log("error al conectar: ", error)
    }
}

async function eliminarProducto(id){
    try{
        const client = await pool.connect()
        const result = await client.query('delete from productos where idproductos = $1',[id])
        if  (result.length < 0 ) {
            console.log( "no existe el producto" );
    }   client.release()
    console.log("se elimino el producto: ", id)
    return result.rows[0]
}
    catch(error){
        console.log( "no se elimino", error);
    }
}
