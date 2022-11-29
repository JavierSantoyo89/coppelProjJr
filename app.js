const express = require('express');
const app = express();
const  path = require('path');

// ------- Para poder usar metodo PUT & DELETE ------- //
const methodOverride =  require('method-override'); // Pasar poder usar los métodos PUT y DELETE
app.use(methodOverride('_method'));

// ------- Template engine ------- //
app.set('view engine', 'ejs');
app.set('views',path.join(__dirname,'/views'));

// ------- Ruta para hacer publica la carpeta "public" ------- //
app.use(express.static(__dirname + '/public'));

// ---- Configuracion previa para usar metodos post, put & delete ---- //
app.use(express.urlencoded({ extended: false})); // convierte el form a objeto literal
app.use(express.json()); // convierte a JSON

// ------- Variables de rutas ------- //
// ------- Variables de rutas ------- //
const routes = require('./routers/main');
const routerProduct = require('./routers/products');
const { log } = require('console');
const req = require('express/lib/request');


// ------- Cadena de ruta para error 404 ------- //
app.use((req,res,next)=>{
    res.status(404).render('not-found')
})


// ------- levantar servidor ------- //
const port = process.env.PORT || 1689
app.listen(port,()=>{
    console.log('Servidor funcionando en http://localhost:' + port);
});
