// http
const http = require('http');

// const server = http.createServer((req, resp)=>{
//     resp.end('Mostrando tu peticion v1.11');
// })
// const port = 2000;
// server.listen(port, ()=>{
//     console.log('open server')
// });
  


// express
const express = require('express');
const app = express();
const port = 2000;



// (1) solicitudes del cliente
app.get('/', (req, resp)=>{
    resp.send('Respondiendo a tu solicitud v1.2')
});
// (2)
app.get('/inquietudes', (req, resp)=>{
    resp.send('Atendiendo tus inquietudes')
});


app.listen(port, ()=>{
    console.log('iniciando la respuesta')
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

