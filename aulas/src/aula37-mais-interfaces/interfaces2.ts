// type Pessoa = { // com type não pode ter o mesmo identificador 'nome'
//   nome: string;
// }

// declaration merging em interface

interface Pessoa { // agora com interfaces é possivel, ela junta tudo em uma só
  nome: string;
}

interface Pessoa {
  sobrenome: string;
}

interface Pessoa {
  readonly enderecos: string[];
}

interface Pessoa {
  readonly idade?: number; // opcional
}

const pessoa: Pessoa = {
  nome:'Fabricio',
  sobrenome: 'Viana',
  enderecos: ['Av Brasil']
}

