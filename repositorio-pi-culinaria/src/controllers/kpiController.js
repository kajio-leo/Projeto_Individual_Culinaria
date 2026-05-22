var kpiModel = require("../models/kpiModel");

function buscarKpi1(req, res) {
    var idUser = req.params.idUser;

    console.log(`Buscando os valores da kpi1`);

    kpiModel.buscarKpi1(idUser).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar os valores da kpi1", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function buscarKpi2(req, res) {
    var idUser = req.params.idUser;

    console.log(`Buscando os valores da kpi2`);

    kpiModel.buscarKpi2(idUser).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar os valores da kpi2", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

module.exports = {
    buscarKpi1,
    buscarKpi2
}