// usar valores como titulos

let x = 10;
const y = 10; // tipo literal sempre sera 10

let a:100 = 100; // tipo literal

// let a = 102; // não pode alterar

// não é aconselhado usar isso em let

let b = 100 as const; // outra forma de fazer tipo literal

const person = {
  nome:'Luiz' as const, // inalteravel
  sobrenome:'miranda'
}

function escolhaCor(cor: 'VERMELHO' | 'AMARELO' | 'AZUL') {
  return cor;
}

console.log(escolhaCor("AMARELO")); // so pode ser essas 3 opções


// Module mode
export default 1;
