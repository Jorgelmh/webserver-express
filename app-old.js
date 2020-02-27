const http = require('http')

http.createServer((req, res) => {

    res.writeHead(200, {'Content-Type' : 'application/json'})

    let salida = {
        nombre: 'jorge',
        edad: 32,
        url: req.url
    }

    res.write(JSON.stringify(salida))
    res.end()
}).listen(8080)

console.log('escuchando puerto 8080');