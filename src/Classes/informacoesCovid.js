const InformacoesCovid = require("../model/InformacoesCovid")
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
module.exports = InformacoesCovid;