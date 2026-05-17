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

function favoritado(req, res) {
    var idUser = req.body.id;
    var idRec = req.body.idReceita;

    if (idUser == undefined) {
        res.status(400).send("Seu id do usuário está undefined!");
    } else if (idRec == undefined) {
        res.status(400).send("Seu id da receita está undefined");
    } else {

        favoritoModel.favoritado(idUser, idRec)
            .then(
                function (resultadoAutenticar) {
                        console.log(resultadoAutenticar);

                        res.json({
                            ja: resultadoAutenticar[0]["qtdFav"] > 0
                        })
                    }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao verificar se ja foi favoritado", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}


module.exports = {
    favoritar,
    favoritado
}