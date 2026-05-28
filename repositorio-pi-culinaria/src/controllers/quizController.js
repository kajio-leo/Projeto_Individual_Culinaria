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

function temnobanco(req, res) {
    var idUser = req.body.id;

    if (idUser == undefined) {
        res.status(400).send("Seu id do usuário está undefined!");
    } else {

        quizModel.temnobanco(idUser)
            .then(
                function (resultadoAutenticar) {
                        console.log(resultadoAutenticar);

                        res.json({
                            tem: resultadoAutenticar[0]["qtdResp"] > 0
                        })
                    }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao verificar se ja fez o quiz", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

}

function deletar(req, res) {
    var idUser = req.params.idUser;

    quizModel.deletar(idUser)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        )
        .catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao deletar os resultados anteriores do quiz: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

module.exports = {
    guardar,
    temnobanco,
    deletar
}