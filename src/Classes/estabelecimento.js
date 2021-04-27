const Estabelecimento = require("../model/Estabelecimento")
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
module.exports = Estabelecimento;