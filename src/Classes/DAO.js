var Estabelecimento = {

    create: async function (objeto){
    let estabelecimento = await Estabelecimento.create(objeto);
    console.log(estabelecimento);
    }
,
    ler: async function (){
        let estabelecimento = await Estabelecimento.findAll();
        console.log(estabelecimento);
        }
        ,

    atualizar: async function (Nome_estabe, Endereco_estebe){
        const novo = await Estabelecimento.findByPk(id);
        await novo.update({Nome_estabe:`${Novo}`});
        await novo.update({Endereco_estebe:`${Novo_E}`});
    }
,
    deletar: async function (CNPJ){
        const object = await Estabelecimento.findByPk(id);
        let estabelecimento = await object.destroy();
        console.log(estabelecimento);
 }
}
var Vacina = {

    create: async function (objeto){
    let vacina = await Vacina.create(objeto);
    console.log(vacina);
    }
,
    ler: async function (){
        let vacina = await Vacina.findAll();
        console.log(vacina);
        }
        ,

    atualizar: async function (faixaEtaria, dados){
        const novo = await Vacina.findByPk(id);
        await novo.update({faixaEtaria:`${Novo}`});
        await novo.update({dados:`${Novo_d}`});
    }
,
    deletar: async function (faixaEtaria){
        const object = await Vacina.findByPk(id);
        let vacina = await object.destroy();
        console.log(vacina);
 }
}
var InformacoesCovid = {

    create: async function (objeto){
    let informacoescovid = await InformacoesCovid.create(objeto);
    console.log(informacoescovid);
    }
,
    ler: async function (){
        let informacoescovid = await InformacoesCovid.findAll();
        console.log(informacoescovid);
        }
        ,

    atualizar: async function (Cuidados, Oqueécovid){
        const novo = await InformacoesCovid.findByPk(id);
        await novo.update({Cuidados:`${Novo}`});
        await novo.update({Oqueécovid:`${Novo_O}`});
    }
,
    deletar: async function (Oqueécoronavirus){
        const object = await InformacoesCovid.findByPk(id);
        let informacoescovid = await object.destroy();
        console.log(informacoescovid);
 }
}

var SituacaoCidade = {

    create: async function (objeto){
    let situacaosidade = await SituacaoCidade.create(objeto);
    console.log(situacaosidade);
    }
,
    ler: async function (){
        let situacaosidade = await SituacaoCidade.findAll();
        console.log(situacaosidade);
        }
        ,

    atualizar: async function (numerosDecasos, decretos, Data){
        const novo = await InformacoesCovid.findByPk(id);
        await novo.update({numerosDecasos:`${Novo}`});
        await novo.update({decretos:`${Novo_de}`});
        await novo.update({Data:`${Novo_da}`});
    }
,
    deletar: async function (bandeira){
        const object = await  SituacaoCidade.findByPk(id);
        let situacaosidade = await object.destroy();
        console.log(situacaosidade);
 }
}
var Produto = {

    create: async function (objeto){
    let produto = await Produto.create(objeto);
    console.log(produto);
    }
,
    ler: async function (){
        let produto = await Produto.findAll();
        console.log(produto);
        }
        ,

    atualizar: async function (Nome_produto, Valor_produto){
        const novo = await Produto.findByPk(id);
        await novo.update({Nome_produto:`${Novo}`});
        await novo.update({Valor_produto:`${Novo_pr}`});
        
    }
,
    deletar: async function (Valor_produto){
        const object = await Produto.findByPk(id);
        let produto = await object.destroy();
        console.log(produto);
 }
}
var Servico = {

    create: async function (objeto){
    let servico = await Servico.create(objeto);
    console.log(servico);
    }
,
    ler: async function (){
        let servico = await Servico.findAll();
        console.log(servico);
        }
        ,

    atualizar: async function (Nome_servico, Valor_servico){
        const novo = await Servico.findByPk(id);
        await novo.update({Nome_servico:`${Novo}`});
        await novo.update({Valor_servico:`${Novo_ser}`});
        
    }
,
    deletar: async function (Valor_servico){
        const object = await Servico.findByPk(id);
        let servico = await object.destroy();
        console.log(servico);
 }
}
var Municipio = {

    create: async function (objeto){
    let municipio = await Municipio.create(objeto);
    console.log(municipio);
    }
,
    ler: async function (){
        let municipio = await Municipio.findAll();
        console.log(municipio);
        }
        ,

    atualizar: async function (nome_da_cidade, Cpf){
        const novo = await Municipio.findByPk(id);
        await novo.update({nome_da_cidade:`${Novo}`});
        await novo.update({Cpf:`${Novo_se}`});
        
    }
,
    deletar: async function (nome_da_cidade){
        const object = await Municipio.findByPk(id);
        let municipio = await object.destroy();
        console.log(municipio);
 }
}
var Posto = {

    create: async function (objeto){
    let posto = await Posto.create(objeto);
    console.log(posto);
    }
,
    ler: async function (){
        letposto = await Posto.findAll();
        console.log(posto);
        }
        ,

    atualizar: async function (endereco, nome){
        const novo = await Posto.findByPk(id);
        await novo.update({endereco:`${Novo}`});
        await novo.update({nome:`${Novo_nome}`});
        
    }
,
    deletar: async function (nome){
        const object = await Posto.findByPk(id);
        let posto = await object.destroy();
        console.log(posto);
 }
}

