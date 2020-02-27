const express = require('express')
const app = express()
const hbs = require('hbs')

const port = process.env.PORT || 3000;

require('./hbs/helpers')

app.use(express.static( __dirname + '/public' ))

//express HBS engine
hbs.registerPartials(__dirname + '/views/parciales')

app.set('view engine', 'hbs')

//helpers -> si no existe una variable el engine llama al helper


app.get('/', (req, res)=>{
    res.render('home', {
        nombre: 'jorge',
        anio: new Date().getFullYear()
    })
})

app.get('/json', (req, res) => {
    let salida = {
        nombre: 'jorge',
        edad: 32,
        url: req.url
    }
    res.send(salida)
})

app.get('/data', (req, res) => {
    
    res.send('hola Data')
})

app.listen(port, () =>{
    console.log(`escuchando peticiones en el puerto ${port}`);
})