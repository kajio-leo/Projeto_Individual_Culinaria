var database = require("../database/config");

function buscarKpi1(idUser) {

    var instrucaoSql = `SELECT r.resposta AS opcao, 
        (SELECT COUNT(r.idPergunta) FROM resposta AS r WHERE idPergunta = 1) AS qtdTotal,
        (SELECT COUNT(r.idPergunta) FROM resposta AS r WHERE resposta = opcao) AS qtdIgual 
        FROM resposta AS r WHERE idUsuario = ${idUser} AND idPergunta = 1;`;
    
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarKpi2(idUser) {
    
    var instrucaoSql = `SELECT (SELECT f.idReceita FROM favorita AS f WHERE f.idReceita IN (SELECT idReceita FROM favorita WHERE idUsuario = ${idUser}) GROUP BY f.idReceita ORDER BY COUNT(f.idReceita) LIMIT 1) AS menosPopular,
        (SELECT COUNT(f.idUsuario) FROM favorita AS f WHERE f.idReceita = 
        (SELECT f2.idReceita FROM favorita AS f2 WHERE f2.idReceita IN (SELECT idReceita FROM favorita WHERE idUsuario = ${idUser}) GROUP BY f2.idReceita ORDER BY COUNT(f2.idReceita) LIMIT 1)) AS qtdUser,
        (SELECT COUNT(id) FROM usuario) AS qtdUserTot;`
    
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarKpi1,
    buscarKpi2
};