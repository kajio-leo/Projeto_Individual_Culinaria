CREATE DATABASE projetoindividual;
USE projetoindividual;

CREATE TABLE usuario (
id INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(80),
email VARCHAR(321),
senha VARCHAR(30));

CREATE TABLE receita (
id INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(60),
descricao VARCHAR(100),
preparo VARCHAR(2000),
tempoPreparoMin INT
);

CREATE TABLE ingrediente (
id INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(60)
);

CREATE TABLE unidadeMed (
id INT PRIMARY KEY AUTO_INCREMENT,
tipo VARCHAR(30)
);

CREATE TABLE receitaIngrediente (
id INT AUTO_INCREMENT,
idReceita INT,
idIngrediente INT, 
quantidade VARCHAR(20),
unidadeMed INT,
CONSTRAINT fkRecReceitaIngrediente FOREIGN KEY (idReceita) REFERENCES receita(id),
CONSTRAINT fkIngrReceitaIngrediente FOREIGN KEY (idIngrediente) REFERENCES ingrediente(id),
CONSTRAINT fkUnidReceitaIngrediente FOREIGN KEY (unidadeMed) REFERENCES unidadeMed(id),
CONSTRAINT pkCompReceitaIngrediente PRIMARY KEY (id, idReceita, idIngrediente) 
);

CREATE TABLE pergunta (
id INT PRIMARY KEY,
pergunta VARCHAR(200),
alternativaA VARCHAR(30),
alternativaB VARCHAR(30),
alternativaC VARCHAR(30),
alternativaD VARCHAR(30),
alternativaE VARCHAR(30)
);

CREATE TABLE favorita (
id INT AUTO_INCREMENT,
idUsuario INT,
idReceita INT,
dtFavorita DATETIME DEFAULT CURRENT_TIMESTAMP,
CONSTRAINT fkIdUserFav FOREIGN KEY (idUsuario) REFERENCES usuario(id),
CONSTRAINT fkIdReceitaFav FOREIGN KEY (idReceita) REFERENCES receita(id),
CONSTRAINT pkCompostaFav PRIMARY KEY (id, idUsuario, idReceita)
);

CREATE TABLE resposta (
id INT AUTO_INCREMENT,
idUsuario INT,
idPergunta INT,
alternativa VARCHAR(20),
resposta VARCHAR(50),
data_resposta DATETIME DEFAULT CURRENT_TIMESTAMP,
CONSTRAINT fkIdUserResp FOREIGN KEY (idUsuario) REFERENCES usuario(id),
CONSTRAINT fkIdPerguntaResp FOREIGN KEY (idPergunta) REFERENCES pergunta(id),
CONSTRAINT pkCompostaResp PRIMARY KEY (id, idUsuario, idPergunta)
);

INSERT INTO pergunta VALUES 
	(1, 'O que você prefere?', 'Doce', 'Salgado', null, null, null),
    (2, 'Qual seu bolo favorito?', 'Cenoura', 'Morango', 'Limão', 'Chocolate', 'Fubá'),
    (3, 'Qual seu docinho de festa preferido?', 'Brigadeiro', 'Beijinho', 'Bicho de Pé(de morango)', 'Cajuzinho', 'Bala de coco'),
    (4, 'Qual sagado é mais gostoso?', 'Coxinha', 'Quibe', 'Esfiha', 'Risole', 'Bauru(joelho)'),
    (5, 'O que é melhor?', 'Feijoada', 'Parmeggiana', 'Strogonoff', 'Virado à Paulista', 'Lasanha'),
    (6, 'Qual ambiente você mais gosta?', 'Padaria', 'Cafeteria', 'Restaurante', 'Boteco', 'Feira'),
    (7, 'Como prefere celebrar momentos especiais?', 'Restaurante', 'Karaokê', 'Pubs(bares) com música ao vivo', 'Confraternização em casa', 'Sozinho'),
    (8, 'Com que frequência	você se reúne para comer com sua família (pais, avós, avôs, tios e tias)?', '4 ou mais vezes por mês', '2-3 vezes por mês', '1 vez por mês', '1 vez a cada três meses', '1 vez por ano'),
    (9, 'Com que frequência você divide a mesa com sua família que mora com você?', 'Todo dia', 'Dia sim, dia não', '3 vezes por semana', 'De vez em quando', 'Nunca'),
    (10, 'Gostaria de ver receitas incríveis para fazer e comer em família?', 'Simmm!', 'Não!', null, null, null);
    
INSERT INTO unidadeMed (tipo) VALUES
	('g'),
    ('mg'),
    ('kg'),
    ('ml'),
    ('l'),
	('xícara'),
    ('xícaras'),
	('colher de sopa'),
	('colheres de sopa'),
	('colher de sobremesa'),
	('colheres de sobremesa'),
	('colher de chá'),
	('colheres de chá'),
	('colher de café'),
	('colheres de café'),
	('pitada'),
	('pitadas'),
    ('fio'),
    ('gota'),
    ('gotas'),
    ('dente'),
    ('maço'),
    ('a gosto'),
    ('unidade');
    
INSERT INTO ingrediente (nome) VALUES
	('manteiga'),
	('açúcar refinado'),
	('açúcar mascavo'),
	('farinha'),
	('bicarbonato'),
	('fermento'),
	('extrato de baunilha'),
	('chocolate 70%'),
	('chocolate ao leite'),
	('ovo'),
	('ovos'),
    ('Arroz'),
    ('Arroz japonês'),
    ('Costela de Porco'),
    ('Vagem'),
    ('Berinjela'),
    ('Molho Shoyu'),
    ('Refrigerante saber Cola'),
    ('Amido de milho'),
	('Gengibre'),
	('Cebolinha');

INSERT INTO receita (nome, descricao, preparo, tempoPreparoMin) VALUES
	('Cookies', 'Biscoito do tipo cookie com gotas de chocolate', 'Dourar a manteiga, resfriar ela até solidificar, bater com o açúcar mascavo e o açúcar refinado, até ficar 
    mais clara, adicionar os ovos e o extrato de baunilha e mexer, adicionar a farinha, o bicarbonato e o fermento e incorporar os secos. Picar os chocolates em pedaços
    menores e adicionar à massa, fazer o formato desejado e deixar na geladeira por no mínimo quatro horas. Se desejar pode congelar, a massa congelada tende a manter mais
    a forma durante o assamento. Assar à 180 graus Celsius até ficar dourado', 120),
    ('Bolo de Cenoura', 'Bolo de cenoura fofinho com cobertura de chocolate', null, 60),
    ('Mousse de Chocolate', 'Mousse de chocolate aerado', null, 45),
    ('Bolo de Limão', 'Bolo de limão fofinho com calda', null, 60),
    ('Torta de Maçã', 'Torta de maçã com açúcar mascavo e canela', null, 90),
    ('Salada de Frutas', 'Salada de frutas com mel', null, 30),
    ('Costelinha Oriental', 'Costela de porco com berinjela e vagem em um molho agridoce', 'Lavar o arroz japonês e colocar na panela junto com a quantidade de água
    indicada no saco do arroz. Cortar a costelinha em tiras, temperar com sal e pimenta do reino, picar a berinjela
    em tiras do comprimento de um dedo, limpar as vagens, ralar o gengibre. Colocar um fio de azeite na panela e selar a costelinha até dourar, depois de dourar adicionar o molho
    de soja e o refrigerante de cola, deixar ferver e depois de fervido adicionar a vagem e fechar a panela, depois de 5 minutos adicionar a berinjela e deixar cozinhar por mais
    10 minutos. Separar uma parte do molho e dissolver o amido de milho nele, depois de dissolvido incorporar ao restante do molho e da carne na panela. Picar cebolinha
    e servir junto com o arroz e a carne.', 90),
    ('Frango com Quiabo', 'Frango suculento com quiabo', null, 60),
    ('Hot Dog', 'Cachorro quente com purê de batatas', null, 60),
    ('Strogonoff de Frango', 'Strogonoff de frango cremoso', null, 60),
    ('Macarrão à Bolonhesa', 'Macarrão à Bolonhesa', null, 40),
    ('Coxinha', 'Coxinha de frango com requeijão cremoso', null, 90);
    
    
INSERT INTO receitaIngrediente (idReceita, idIngrediente, quantidade, unidadeMed) VALUES
	(1, 1, '225', 1),
    (1, 2, '150', 1),
    (1, 3, '250', 1), 
    (1, 4, '350', 1), 
    (1, 5, '1/2', 12), 
    (1, 6, '1', 12),
    (1, 7, '1', 14),
    (1, 8, '240', 1),
    (1, 9, '170', 1),
    (1, 11, '2', 24);

CREATE VIEW vw_card AS SELECT f.idUsuario AS id, f.idReceita AS idRec, r.nome AS nome, r.descricao AS descr FROM receita AS r
JOIN favorita AS f ON f.idReceita = r.id
ORDER BY f.dtFavorita DESC;

SELECT idRec, nome, descr FROM vw_card WHERE id = 1;

CREATE VIEW vw_kpi1 AS 
SELECT r.resposta AS opcao, 
(SELECT COUNT(r.idPergunta) FROM resposta AS r WHERE idPergunta = 1) AS qtdTotal,
(SELECT COUNT(r.idPergunta) FROM resposta AS r WHERE resposta = opcao) AS qtdIgual 
FROM resposta AS r WHERE idUsuario = 3 AND idPergunta = 1;

SELECT * FROM vw_kpi1;

CREATE VIEW vw_kpi2 AS
SELECT (SELECT f.idReceita FROM favorita AS f WHERE f.idReceita IN (SELECT idReceita FROM favorita WHERE idUsuario = 1) GROUP BY f.idReceita ORDER BY COUNT(f.idReceita) LIMIT 1) AS menosPopular,
(SELECT COUNT(f.idUsuario) FROM favorita AS f WHERE f.idReceita = 
(SELECT f2.idReceita FROM favorita AS f2 WHERE f2.idReceita IN (SELECT idReceita FROM favorita WHERE idUsuario = 1) GROUP BY f2.idReceita ORDER BY COUNT(f2.idReceita) LIMIT 1)) AS qtdUser,
(SELECT COUNT(id) FROM usuario) AS qtdUserTot;

SELECT * FROM vw_kpi2; 

