const SituacaoCidade = require("../model/SituacaoCidade")
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
module.exports = SituacaoCidade;