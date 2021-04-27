const fs = require("fs")

class MeuErro extends Error {

  constructor() {
    super("Sejam bem-vindo");
    this.name = "InformacoesCovid";
  }

}

try {
  console.log("há um erro");
  throw new MeuErro();
  console.log("Verifique o erro");
} catch (e) {
  console.log(e.name);
}
console.log("acabou");