var quizModel = require("../models/quizModel");

function guardar(req, res) {
    var respostass = req.body.respostasServer;
    var idUser = req.body.id;

    if (respostass == undefined) {
        res.status(400).send("Suas respostas não foram salvas, estão indefinidas");
    } else {
        quizModel.guardar(respostass, idUser)
                    .then(
                        function (resultado) {
                            res.json(resultado);
                        }
                    ).catch(
                        function (erro) {
                            console.log(erro);
                            console.log(
                                "\nHouve um erro ao realizar o quiz! Erro: ",
                                erro.sqlMessage
                            );
                            res.status(500).json(erro.sqlMessage);
                        }
                    );
    }
}

module.exports = {
    guardar
}