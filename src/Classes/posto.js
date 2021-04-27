const Posto = require("../model/Posto")
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
module.exports = Posto;