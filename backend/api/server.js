const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Servidor de prueba!!!?");
});

app.get("/usuario", function (req, res) {
  res.send({ nombreUsuario: "rafflesia", nivel: "Intermedio" });
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
