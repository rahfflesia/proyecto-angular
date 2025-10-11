const express = require("express");
const router = express.Router();

router.get("/:id", function (req, res) {
  res.send({ mensaje: "endpoint de obtener usuario funcionando" });
});

module.exports = router;
