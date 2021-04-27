CREATE TABLE SituacaoCidade (
        id_situcidade integer PRIMARY KEY,
        numerosDecasos integer,
        bandeira varchar,
        decretos varchar,
        Data integer,
        fk_Municipio_id_cep integer
    );