// http
const http = require('http');

// express
const express = require('express');
const app = express();
const port = process.env.PORT || 4000;

// fetch
// const fetch = require('node-fetch');


// const server = http.createServer((req, resp)=>{
//     resp.end('Mostrando tu peticion v1.11');
// })
// const port = 2000;
// server.listen(port, ()=>{
//     console.log('open server')
// });

// (1)ruta- solicitudes del cliente
// app.get('/', (req, resp)=>{
//     // console.log(__dirname)
//     resp.send('Respondiendo a tu solicitud v1.2');
// });
// (2)ruta
// app.get('/inquietudes', (req, resp)=>{
//     resp.send('Atendiendo tus inquietudes');
// });

// (3)MIDDLEWARE
// accedemos a los archivos staticos de la carpeta public
// app.use(express.static(__dirname + '/public'));

// 404
// app.use((req, res, next)=>{
//     res.status(404).sendFile(__dirname + "/public/404.html");
// });



// (4)ruta
app.listen(port, () => {
    console.log('starting server');
});


// ----------------------------------------------------------------------------
// Motor de plantillas JS integrado ejs
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

// configuracion de ruta publica
app.use('/public', express.static('public'));

// (2)rutas web
app.use('/', require('./router/web_rutas'));


app.use((req, resp, next) => {
    resp.status(404).render('404', { titulo: 'Error 404 pagina no encontrada' });
});



























// const {frutas,peoples} = require('./frutas');

// // Frutas
// frutas.forEach((items)=>{
//     console.count(items)
// })

// // Peoples
// const getPeoples = (items)=>{
//     for(let a = 0; a<items.length; a++){
//         console.log(items[a])
//     }
// }
// getPeoples(peoples);

