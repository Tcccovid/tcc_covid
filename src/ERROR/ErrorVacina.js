const fs = require("fs")

class MeuErro extends Error {

  constructor() {
    super("Sejam bem-vindo");
    this.name = "Vacina";
  }

}

try {
  console.log("Analise por favor");
  throw new MeuErro();
  console.log("Erro encontrado");
} catch (e) {
  console.log(e.name);
}
console.log("menos uma, vá para próxima");