const express = require("express");
const router = express.Router();

//main routes
router.get('/', (req, resp)=>{
    resp.render('home',{titulo:'Information on COVID-19'});
});

router.get('/navbar', (req, resp)=>{
    resp.render('navbar', {titulo:'Pagina de inicio'});
});

router.get('/contacts', (req, resp)=>{
    resp.render('contacts', {titulo:'Contactanos por esta via'});
});


module.exports = router;