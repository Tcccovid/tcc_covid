    CREATE TABLE Posto (
        id_posto integer PRIMARY KEY,
        endereco varchar,
        nome varchar,
        fk_Municipio_id_cep integer
    );