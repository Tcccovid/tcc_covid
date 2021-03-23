/* TCC_projeto: */

CREATE TABLE Estabelecimento (
    Nome_estabe varchar,
    id_estabelecimento integer PRIMARY KEY,
    Endereco_estebe varchar,
    WhatsApp integer,
    Instagram varchar,
    Telefone integer,
    CNPJ integer,
    fk_Municipio_id_cep integer
);

CREATE TABLE Vacina (
    id_vacina integer PRIMARY KEY,
    nome varchar,
    faixaEtaria integer,
    dados varchar
);

CREATE TABLE InformacoesCovid (
    id_infocovid integer PRIMARY KEY,
    Cuidados varchar,
    Oqueécovid varchar,
    Oqueécoronavirus varchar
);

CREATE TABLE SituacaoCidade (
    id_situcidade integer PRIMARY KEY,
    numerosDecasos integer,
    bandeira varchar,
    decretos varchar,
    Data integer,
    fk_Municipio_id_cep integer
);

CREATE TABLE Produto (
    id_Produto integer PRIMARY KEY,
    Quantidade integer,
    Nome_produto varchar,
    Valor_produto integer
);

CREATE TABLE Servico (
    id_servico integer PRIMARY KEY,
    Nome_servico varchar,
    Valor_servico integer
);

CREATE TABLE Municipio (
    id_municipio integer PRIMARY KEY,
    nome_da_cidade varchar,
    Campo integer
);

CREATE TABLE Posto (
    id_posto integer PRIMARY KEY,
    endereco varchar,
    nome varchar,
    fk_Municipio_id_cep integer
);

CREATE TABLE contem (
    fk_Estabelecimento_id_estabelecimento integer,
    fk_Produto_id_Produto integer
);

CREATE TABLE Possui (
    fk_Estabelecimento_id_estabelecimento integer,
    fk_Servico_id_servico integer
);

CREATE TABLE Possui (
    fk_Posto_id_posto integer,
    fk_Vacina_id_vacina integer
);
 
ALTER TABLE Estabelecimento ADD CONSTRAINT FK_Estabelecimento_2
    FOREIGN KEY (fk_Municipio_id_cep)
    REFERENCES Municipio (id_municipio)
    ON DELETE RESTRICT;
 
ALTER TABLE SituacaoCidade ADD CONSTRAINT FK_SituacaoCidade_2
    FOREIGN KEY (fk_Municipio_id_cep)
    REFERENCES Municipio (id_municipio)
    ON DELETE RESTRICT;
 
ALTER TABLE Posto ADD CONSTRAINT FK_Posto_2
    FOREIGN KEY (fk_Municipio_id_cep)
    REFERENCES Municipio (id_municipio)
    ON DELETE RESTRICT;
 
ALTER TABLE contem ADD CONSTRAINT FK_contem_1
    FOREIGN KEY (fk_Estabelecimento_id_estabelecimento)
    REFERENCES Estabelecimento (id_estabelecimento)
    ON DELETE RESTRICT;
 
ALTER TABLE contem ADD CONSTRAINT FK_contem_2
    FOREIGN KEY (fk_Produto_id_Produto)
    REFERENCES Produto (id_Produto)
    ON DELETE SET NULL;
 
ALTER TABLE Possui ADD CONSTRAINT FK_Possui_1
    FOREIGN KEY (fk_Estabelecimento_id_estabelecimento)
    REFERENCES Estabelecimento (id_estabelecimento)
    ON DELETE RESTRICT;
 
ALTER TABLE Possui ADD CONSTRAINT FK_Possui_2
    FOREIGN KEY (fk_Servico_id_servico)
    REFERENCES Servico (id_servico)
    ON DELETE SET NULL;
 
ALTER TABLE Possui ADD CONSTRAINT FK_Possui_1
    FOREIGN KEY (fk_Posto_id_posto)
    REFERENCES Posto (id_posto)
    ON DELETE RESTRICT;
 
ALTER TABLE Possui ADD CONSTRAINT FK_Possui_2
    FOREIGN KEY (fk_Vacina_id_vacina)
    REFERENCES Vacina (id_vacina)
    ON DELETE SET NULL;