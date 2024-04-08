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

async function compraRealizada(id_cliente,id_producto,cantidad){
    try{
    const client = await pool.connect()
    const result = await client.query('insert into compra (id_cliente,id_producto,cantidad)values($1,$2,$3)RETURNING *',[id_cliente,id_producto,cantidad])
    const restar = await client.query('update productos set cantidad = cantidad - $1 where idproductos = $2',[cantidad,id_producto])
    client.release()
console.log("se agrego compra")
return result.rows}
    catch(error){
    console.log("el error es ",error)
}
}
async function verCompra() {
    try {
        const client = await pool.connect();
        const result = await client.query('select cliente.nombre, cliente.apellido, productos.nombrearticulo,productos.cantidad, compra.fecha_compra from cliente inner join compra on cliente.idcliente = compra.id_cliente inner join productos on productos.idproductos = compra.id_producto');
        client.release();
        console.log(result.rows);
        return result.rows;
    } catch (error) {
        console.error('Error al obtener clientes:', error);
        throw error;
    }
}