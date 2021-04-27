const fs = require("fs")

class MeuErro extends Error {

  constructor() {
    super("Sejam bem-vindo");
    this.name = "Posto";
  }

}

try {
  console.log("Procure o erro");
  throw new MeuErro();
  console.log("ache o erro");
} catch (e) {
  console.log(e.name);
}
console.log("tudo certo");