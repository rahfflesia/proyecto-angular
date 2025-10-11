const express = require("express");
const app = express();

app.get("usuarios/:id", function (req, res) {
  const userId = req.params.id;
});
