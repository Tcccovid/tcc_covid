const fs = require("fs")

class MeuErro extends Error {

  constructor() {
    super("Sejam bem-vindo");
    this.name = "SituCidade";
  }

}

try {
  console.log("Erro?");
  throw new MeuErro();
  console.log("Algo não está certo");
} catch (e) {
  console.log(e.name);
}
console.log("acabou, seja feliz");