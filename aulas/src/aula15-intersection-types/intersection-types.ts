// & AND

type TemNome = { nome: string };
type TemSobreNome = { sobreNome: string };
type TemIdade = { idade: number };

type Pessoa = TemNome | TemSobreNome | TemIdade; // fica confuso pode ser vazio ou pode ter os 3
type PessoaIntersection = TemNome & TemSobreNome & TemIdade; // tem que ter os 3 obrigatoriamente


type AB = 'A'| 'B'; // CONJUNTO 1
type AC = 'A'| 'C'; // CONJUNTO 2
type Intersecao = AB & AC; // INTERSEÇÃO DESSES DOIS

const pessoa: Pessoa = {
  idade: 30,
  nome: 'Fabricio'
}
console.log(pessoa);

const pessoa2: PessoaIntersection = {
  idade: 12,
  nome: 'Fabricio',
  sobreNome:'Viana'
};
console.log(pessoa2);

// Module Mode
export default 1;
