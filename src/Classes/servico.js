const Servico = require("../model/Servico")
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
module.exports = Servico;