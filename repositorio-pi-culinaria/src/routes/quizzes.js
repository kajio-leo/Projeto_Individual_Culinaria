var express = require("express");
var router = express.Router();

var quizController = require("../controllers/quizController");

router.post("/guardar", function (req, res) {
    quizController.guardar(req, res);
}) 

router.post("/temnobanco", function (req, res) {
    quizController.temnobanco(req, res);
});
module.exports = router;