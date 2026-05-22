var express = require("express");
var router = express.Router();

var kpiController = require("../controllers/kpiController");

router.get("/buscar-kpi1/:idUser", function (req, res) {
    kpiController.buscarKpi1(req, res);
});

router.get("/buscar-kpi2/:idUser", function (req, res) {
    kpiController.buscarKpi2(req, res);
})

module.exports = router;