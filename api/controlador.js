const express = require('express')
express.json()
const router = express.Router()
const { agregarClientes } = require('./conexionCliente')
const {verClientes} = require('./conexionCliente')



router.get('/',(req,res)=>{
res.status(200).json({message: 'funcionando'})
})

router.get('/clientes', async(req,res)=>{
    const clientes = await verClientes()
    res.status(200).json(clientes)
})


router.post('/', async (req,res)=>{
    const {dni,nombre,apellido,direccion,localidad,telefono,contraseña} = req.body
    if (!dni||!nombre||!apellido||!direccion||!localidad||!telefono||!contraseña){
        return res.status(400).json({message: "faltan datos obligatorios"})
    }
    try{
const clientenuevo = await agregarClientes(dni,nombre,apellido,direccion,localidad,telefono,contraseña)
res.status(200).json(clientenuevo)}
    catch(error){
        console.log(error)
    }
})
module.exports = router