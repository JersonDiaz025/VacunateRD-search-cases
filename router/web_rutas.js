const express = require("express");
const router = express.Router();
const api_covid = require("../apis.js/utils");

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
router.post("/inputSearch", async (req, resp) => {
  const values = await api_covid();
  console.log(req.body);
  // resp.render('card_info', {data:values});
  resp.json({ data: req.body });
});

// const algo = {
//     headers = {

//     },
//     cors={

//     },
//     body={

//     },
//     params ={

//     },
//     method ={

//     },
//     content-type={

//     }
// }

module.exports = router;
