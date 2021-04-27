const fs = require("fs")

class MeuErro extends Error {

  constructor() {
    super("Sejam bem-vindo");
    this.name = "Estabelecimento";
  }

}

try {
  console.log("deu erro");
  throw new MeuErro();
  console.log("Certifique-se que não possui nada errado");
} catch (e) {
  console.log(e.name);
}
console.log("funcionou");