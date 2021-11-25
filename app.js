// http
const http = require('http');

// express
const express = require('express');
const app = express();
const port = 2000;


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
app.listen(port, ()=>{
    console.log('iniciando la respuesta');
});

// ----------------------------------------------------------------------------
// Motor de plantillas JS integrado
// ejs
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');


// (2)rutas
app.get('/', (req, resp)=>{
    resp.render('index',{titulo:'Pagina de inicio'});
});

app.get('/home', (req, resp)=>{
    resp.render('home', {titulo:'Pagina de inicio'});
});

app.get('/servicios', (req, resp)=>{
    resp.render('servicios', {titulo:'Area de servicios'});
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

