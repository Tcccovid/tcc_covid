const Municipio = require("../model/Municipio")
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
module.exports = Municipio;