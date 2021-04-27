const fs = require("fs")

class MeuErro extends Error {

  constructor() {
    super("Sejam bem-vindo");
    this.name = "Serviço";
  }

}

try {
  console.log("Ache o erro");
  throw new MeuErro();
  console.log("Analise novamente");
} catch (e) {
  console.log(e.name);
}
console.log("Menos uma, avance");