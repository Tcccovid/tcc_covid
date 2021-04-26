var input = require('fs').readFileSync('/dev/stdin', 'utf8');
let linhas = input.split('\n');

class Pilha {

    constructor() {
      this.lista = new Array();
    }
  
    push(e) {
      // Adiciona um elemento no topo da pilha
      this.lista.push(e);
    }
  
    pop() {
      // Retorna o elemento do topo da pilha, removendo ele.
      if (this.isEmpty()) {
        return null;
      }
      return this.lista.pop()
    }
  
    size() {
      // Retorna a quantidade de elementos na pilha
      return this.lista.length;
    }
  
    isEmpty() {
      // Retorna um boleano indicando se a pilha está vazia ou não.
      return this.lista.length == 0;
    }
  
    top() {
      // Retorna o elemento do topo da pilha, mas não remove.
      if (this.isEmpty()) {
        return null;
      }
      let i = this.lista.length - 1;
      return this.lista[i];
    }
  
  }

  let qnt = linhas.length;


while(qnt != 0){
    let entrada = linhas.shift();
    entrada = entrada.split('');
    let pilha = new Pilha();
    let a = true;
    let qa = 0;
    let qb = 0;
    let q1 = 0;
    let q2 = 0;
    for(let v of entrada){
        if(v === '('){
            pilha.push(v);
            q1++;
            qa++;
        }
        if(v === ')'){
          q2++;
            if(pilha.top() === '('){
                pilha.pop();
            }
            qb ++;
        }
    }
   if(pilha.size() !== 0 || qa != qb){
       a = false;
   }
   
    if(q1 == 0 && q2 == 0){

    }
else{
if(a){
    console.log('correct');
}

else {
    console.log('incorrect');
}
}
qnt--;
}