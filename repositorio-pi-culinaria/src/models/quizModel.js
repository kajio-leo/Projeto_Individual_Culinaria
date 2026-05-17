var database = require("../database/config")

function guardar(respostass, idUser) {
    let i = 0;
    console.log("ACESSEI O QUIZ MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function guardar():", respostass, idUser);
    let promises = [];

    while (i < respostass.length) {
        var instrucaoSql = `
            INSERT INTO resposta (idUsuario, idPergunta, alternativa, resposta) VALUES ('${idUser}', '${(i + 1)}', '${respostass[i].alternativa}', '${respostass[i].resposta}');
        `;
        console.log("Executando a instrução SQL: \n" + instrucaoSql);
        i++
        promises.push(database.executar(instrucaoSql));
    }
    return Promise.all(promises);
}

function temnobanco(idUser) {
    console.log("ACESSEI O QUIZ MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", idUser)
        var instrucaoSql = `
            SELECT COUNT(idUsuario) AS qtdResp FROM resposta WHERE idUsuario = '${idUser}';
        `;
        console.log("Executando a instrução SQL: \n" + instrucaoSql);
        return database.executar(instrucaoSql);
    
}

module.exports = {
    guardar, 
    temnobanco
};