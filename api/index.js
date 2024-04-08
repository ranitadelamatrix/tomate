const express = require('express')
const app = express()
const errorHandler = require('./errorHandler')
const router = require('./controlador')

const cors = require('cors')
app.use(cors())
app.use(express.json())
app.use('/',router)
const port = 3000
app.use(errorHandler)

app.listen(port ,()=>{
    console.log("puerto funcionando")
})

