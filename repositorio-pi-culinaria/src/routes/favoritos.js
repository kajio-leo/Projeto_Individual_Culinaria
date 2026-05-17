var express = require("express");
var router = express.Router();

var favoritoController = require("../controllers/favoritoController");

router.post("/favoritar", function (req, res) {
    favoritoController.favoritar(req, res);
}) 

module.exports = router;