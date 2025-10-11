const express = require("express");
const app = express();
const port = 3000;

const rutasUsuario = require("./rutas/usuario");
const rutasEjercicios = require("./rutas/ejercicios");

app.get("/", function (req, res) {
  res.send("Raíz de la api");
});

app.use("/usuarios", rutasUsuario);

app.use("/ejercicios", rutasEjercicios);

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
