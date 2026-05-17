var favoritoModel = require("../models/favoritoModel");

function favoritar(req, res) {
    var receita = req.body.receitasServer;
    var idUser = req.body.id;

    if (receita == undefined) {
        res.status(400).send("Suas respostas não foram salvas, estão indefinidas");
    } else {
        favoritoModel.favoritar(receita, idUser)
                    .then(
                        function (resultado) {
                            res.json(resultado);
                        }
                    ).catch(
                        function (erro) {
                            console.log(erro);
                            console.log(
                                "\nHouve um erro ao tentar favoritar! Erro: ",
                                erro.sqlMessage
                            );
                            res.status(500).json(erro.sqlMessage);
                        }
                    );
    }
}

module.exports = {
    favoritar
}