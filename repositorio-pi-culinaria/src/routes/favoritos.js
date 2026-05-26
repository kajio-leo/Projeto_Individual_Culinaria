var express = require("express");
var router = express.Router();

var favoritoController = require("../controllers/favoritoController");

router.post("/favoritar", function (req, res) {
    favoritoController.favoritar(req, res);
}) 

router.post("/favoritado", function (req, res) {
    favoritoController.favoritado(req, res);
}) 

router.post("/buscarFavoritadosPorUsuario", function (req, res) {
    favoritoController.favoritado(req, res);
}) 

router.get("/buscarFavoritadosPorUsuario/:idUsuario", function (req, res) {
    favoritoController.buscarFavoritadosPorUsuario(req, res);
}) 

module.exports = router;