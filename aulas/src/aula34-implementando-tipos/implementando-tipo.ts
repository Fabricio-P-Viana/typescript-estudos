export abstract class TipoPessoa { // abstract class
  protected abstract nome: string; // posso personalizar o nivel de acesso
  protected abstract sobreNome: string;
  protected abstract nomeCompleto(): string;
}

type Name = { // type alias
  nome: string;
}
type Sobrenome = { // type alias
  sobreNome: string;
}

type TipoPessoaComType = { // type alias
  nome: string; // não posso implementar o nivel de acesso sempre é public
  sobreNome: string;
  nomeCompleto(): string;
}

export class Pessoa implements TipoPessoaComType,Name,Sobrenome { // erro de implementação para type alias é implementado
  // posso implementar quantas types eu quiser
  constructor(public nome: string, public sobreNome: string) {
    // super();
  }

  nomeCompleto(): string {
    return `${this.nome} ${this.sobreNome}`;
  }
}

const pessoa = new Pessoa('Fernando', 'Daciuk');
console.log(pessoa.nomeCompleto());
