// type alias e interface são muito parecidos, mas não são a mesma coisa
// type alias é uma forma de dar um nome para um tipo
// interface é uma forma de definir um contrato

type TipoPessoa = Name & Sobrenome & NomeCompleto;

type Name = {
  nome: string;
}
type Sobrenome = {
  sobreNome: string;
}

type NomeCompleto = {
  nomeCompleto(): string;
}

export class Pessoa implements TipoPessoa {
  constructor(public nome: string, public sobreNome: string) {
    // super();
  }

  nomeCompleto(): string {
    return `${this.nome} ${this.sobreNome}`;
  }
}

const pessoa = new Pessoa('Fernando', 'Daciuk');
console.log(pessoa.nomeCompleto());

// interface estão mais relacionadas a objetos e POO

interface TipoName { // converte o type alias para interface
  nome: string;
}
interface TipoSobreName { // converte o type alias para interface
  nome: string;
}

// fazendo a junção das interfaces para simular o que o type alias faz tambem
interface Pessoa2 extends TipoName,TipoSobreName {}

// em objetos é a mesma coisa para adicionar um tipo
const pessoaObj:Pessoa2 = {
  nome:"Fabricio"
}
