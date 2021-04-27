const Produto = require("../model/Produto")
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
module.exports = Produto;