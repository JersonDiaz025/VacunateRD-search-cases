const express = require("express");
const router = express.Router();
const api_covid = require("../utils/utils");

//main routes
router.get("/", (req, resp) => {
  resp.render("home", { titulo: "Information on COVID-19" });
});

router.get("/navbar", (req, resp) => {
  resp.render("navbar", { titulo: "Pagina de inicio" });
});

router.get("/contacts", (req, resp) => {
  resp.render("contacts", { titulo: "Contactanos por esta via" });
});

router.get("/card_info", (req, resp) => {
  resp.render("card_info", { data: {} });
});

// route of inputSearch
router.post("/inputSearch", async (req, resp)=> {
  const result = req.body.country;
  if(req.body.country){
    const values = await api_covid(result);
    resp.render('card_info', {data:values})
  }else{
    resp.redirect('card_info');
  }
});

module.exports = router;
