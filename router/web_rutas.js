const express = require("express");
const router = express.Router();


router.get('/', (req, resp)=>{
    resp.render('navbar',{titulo:'Pagina de inicio'});
});

router.get('/navbar', (req, resp)=>{
    resp.render('navbar', {titulo:'Pagina de inicio'});
});

router.get('/contactos', (req, resp)=>{
    resp.render('contactos', {titulo:'Contactanos por esta via'})
});

router.get('/nosotros', (req, resp)=>{
    resp.render('nosotros', {titulo:'Informacion sobre nosotros'});
});

module.exports = router;