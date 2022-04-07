const express = require('express')
const Contenedor = require('./Clase')
const app = express()
const oContenedor = new Contenedor('productos.txt');
let contadorVisitas = 0




// index
app.get('/', (req, res) => {
    contadorVisitas++
    // var ip = req.header('x-forwarded-for') || req.connection.remoteAddress;
    // res.sendFile(__dirname + '/index.html')

    res.send(`
    <!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta http-equiv="X-UA-Compatible" content="IE=edge" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>Express Server - CODER Backend</title>
<link rel="stylesheet" href="https://bootswatch.com/5/sketchy/bootstrap.min.css">
</head>
<body>
<div class="page-header" style="display: flex; justify-content: center; align-items: center">
    <h1>
    Express Server - CODER Backend
    </h1>
</div>
<div style="display: flex; justify-content: center; align-items: center">
    <a href="/productos" style="margin: 0 2rem">
    <button
        type="button"
        class="btn btn-outline-primary"
    >
        productos : [get '/productos']
    </button></a
    >
    <a href="/productoRandom" style="margin: 0 2rem">
    <button
        type="button"
        class="btn btn-outline-secondary"
    >
        producto Random : [get '/productoRandom' ]
    </button></a
    >
</div>
</br>
<div class="page-header">
    <h6 id="progress">#visitas : ${contadorVisitas}</h6>
    <h6 id="progress">#Meta : 100</h6>
</div>
<div class="bs-component" style="justify-content: center; align-items: center">
    <div class="progress">
    <div class="progress-bar" role="progressbar" style="width: ${contadorVisitas}%;" aria-valuenow="${contadorVisitas}" aria-valuemin="0" aria-valuemax="100"></div>
    </div>
</div>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" ></script>
</body>
</html>
    
    
    `)
    
})

// All Products
app.get('/productos', async (req, res) => {
    const allProducts = await oContenedor.getAll()
    res.send(allProducts)
})

// Random Product
app.get('/productoRandom', async (req, res) => {
    const allProducts = await oContenedor.getAll()
    const randomIndex = Math.floor(Math.random() * allProducts.length)
    const randomProduct = allProducts[randomIndex]
    res.send(randomProduct)
})

// Server configuration
const PORT = process.env.PORT || 8081
const server = app.listen(PORT, () => {
    console.log(`Server running on: ${__dirname}${server.address().port}/`)
})
server.on('error', (error) => console.log(`Server error: ${error}`))