var database = require("../database/config")

function favoritar(receita, idUser) {
    console.log("ACESSEI O FAVORITO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function guardar():", receita, idUser);
    
    var instrucaoSql = `
        INSERT INTO favorita (idUsuario, idReceita) VALUES ('${idUser}', '${receita}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
        
}

function favoritado(idUser, idRec) {
    console.log("ACESSEI O FAVORITO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", idUser, idRec)
        var instrucaoSql = `
            SELECT COUNT(*) AS qtdFav FROM favorita WHERE idUsuario = '${idUser}' AND idReceita = '${idRec}';
        `;
        console.log("Executando a instrução SQL: \n" + instrucaoSql);
        return database.executar(instrucaoSql);
    
}

function buscarFavoritadosPorUsuario(idUser) {

  var instrucaoSql = `SELECT nome, descr FROM vw_card WHERE id = ${idUser}`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

module.exports = {
    favoritar,
    favoritado,
    buscarFavoritadosPorUsuario
};