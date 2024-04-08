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


async function verClientes() {
    try {
        const client = await pool.connect();
        const result = await client.query('SELECT * FROM cliente');
        client.release();
        console.log(result.rows);
        return result.rows;
    } catch (error) {
        console.error('Error al obtener clientes:', error);
        throw error;
    }
}

async function idCliente(dni){
try{
    const client = await pool.connect()
    const result = await client.query('SELECT dni, nombre, apellido, localidad,direccion,telefono from cliente where dni = $1',[dni])
    client.release()
    console.log(result.rows[0])
    return  result.rows[0]
}
catch(error){
    console.log("el error es: ", error)
}
}
async function agregarClientes(dni,nombre,apellido,localidad,direccion,telefono,contraseña){
    res.setHeader('Access-Control-Allow-Origin', '*')
    
    try{
        const client = await pool.connect()
        const resulta = await client.query('INSERT INTO cliente(dni,nombre,apellido,localidad,direccion,telefono,contraseña)values($1,$2,$3,$4,$5,$6,$7)RETURNING *',[dni,nombre,apellido,localidad,direccion,telefono,contraseña])
        client.release()
        console.log("se agrego exitosamente")
        return resulta.rows
        
    }
    catch(error){
        console.error(`No se pudo insertar el cliente:`, error)

    }
}
async function actualizarcliente(dni,nuevoNombre){
    try{
        const client = await pool.connect()
        const result = await client.query('update cliente set nombre = $1 where dni = $2',[nuevoNombre,dni])
        client.release()
        console.log( 'se actualizo a: ',nuevoNombre)
    }
    catch(error){
        console.log("error al conectar: ", error)
    }
}

async function eliminarCliente(dni){
    try{
        const client = await pool.connect()
        const result = await client.query('delete from cliente where dni = $1',[dni])
        if  (result.length < 0 ) {
            console.log( "no existe cliente" );
    }   client.release()
    console.log("se elimino el cliente: ", dni)
    return result.rows[0]
}
    catch(error){
        console.log( "no se elimino", error);
    }
}

module.exports = {verClientes, 
idCliente,actualizarcliente,
agregarClientes,eliminarCliente}