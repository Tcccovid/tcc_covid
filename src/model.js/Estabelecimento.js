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