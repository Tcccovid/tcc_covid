const fs = require("fs")

class MeuErro extends Error {

  constructor() {
    super("Sejam bem-vindo");
    this.name = "Produto";
  }

}

try {
  console.log("Erro");
  throw new MeuErro();
  console.log("Algo está errado");
} catch (e) {
  console.log(e.name);
}
console.log("Chegou ao fim");