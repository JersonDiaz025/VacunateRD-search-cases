const http = require('http')
const server = http.createServer((req, resp)=>{
    resp.end('Estoy atendiendo tu solicitud')
})

const port = 2000;
server.listen(port,()=>{
    console.log('respuesta despachada')
})







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

