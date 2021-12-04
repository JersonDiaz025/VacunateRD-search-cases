// http
const http = require("http");
const bodyParser = require("body-parser")

// express
const express = require("express");
const app = express();
const port = process.env.PORT || 4000;

// ----------------------------------------------------------------------------
// Motor de plantillas JS integrado ejs
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

// configuracion de ruta publica
app.use("/public", express.static("public"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// (2)rutas web
app.use("/", require("./router/web_rutas"));

app.use((req, resp, next) => {
  resp.status(404).render("404", { titulo: "Error 404 pagina no encontrada" });
});

app.listen(port, () => {
  console.log(`Server started on port: ${port}`);
});
