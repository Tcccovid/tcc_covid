const Vacina = require("../model/Vacina")
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
module.exports = Vacina;