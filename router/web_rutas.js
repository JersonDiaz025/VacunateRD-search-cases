const express = require("express");
const router = express.Router();

// pagina con ruta principal
router.get('/', (req, resp)=>{
    resp.render('home',{titulo:'El COVID-19'});
});

router.get('/navbar', (req, resp)=>{
    resp.render('navbar', {titulo:'Pagina de inicio'});
});

router.get('/contactos', (req, resp)=>{
    resp.render('contactos', {titulo:'Contactanos por esta via'});
});

router.get('/nosotros', (req, resp)=>{
    resp.render('nosotros', {titulo:'Informacion sobre nosotros'});
});

module.exports = router;