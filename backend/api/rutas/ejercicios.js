const express = require("express");
const router = express.Router();

const prisma = require("../../config/db");

router.get("/", async function (req, res) {
  const catalogoEjercicios = await prisma.ejercicios.findMany();
  res.json(catalogoEjercicios);
});

module.exports = router;
