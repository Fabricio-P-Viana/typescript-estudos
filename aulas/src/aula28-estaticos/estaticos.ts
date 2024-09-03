export class Pessoa {
  static idadePadrao = 0;
  static cpfPadrao = '000.000.000-00';

  constructor(
    public readonly nome: string,
    public readonly sobrenome: string,
    public idade: number,
    public cpf: string
  ) {}

  metodoNormal() { // acessando static em metodos 'normais'
    console.log(Pessoa.cpfPadrao,Pessoa.idadePadrao);
  }

  // factory method
  static criaPessoa(nome:string,sobrenome: string): Pessoa { // não tenho acesso pela instacia mas pela classe
    return new Pessoa(nome,sobrenome,Pessoa.idadePadrao,Pessoa.cpfPadrao);
  }
}

const pessoa = Pessoa.criaPessoa('Fabricio', 'Viana');
const pessoa2 = Pessoa.criaPessoa('Vitor', 'Viana');


