const fs = require("fs")

class MeuErro extends Error {

  constructor() {
    super("Sejam bem-vindo");
    this.name = "Municipio";
  }

}

try {
  console.log("Possui algum erro");
  throw new MeuErro();
  console.log(" Verifique se não contem erro");
} catch (e) {
  console.log(e.name);
}
console.log("Fim");