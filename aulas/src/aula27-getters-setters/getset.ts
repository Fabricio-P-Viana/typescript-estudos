export class Pessoa {
  constructor(
    private readonly nome: string,
    private readonly sobrenome: string,
    private idade: number,
    private _cpf: string // underline é uma convesão para não dar recursividade
  ) {
    this.cpf = _cpf; // setter no construtor
  }

  // getNome(): string { // forma antiga de fazer get ou set
  //   return this.nome;
  // }
  // getCpf(): string { // forma antiga de fazer get ou set
  //   return this.cpf.replace(/\D/g, ''); // fazer algo antes de retornar
  // }
  // setCpf(cpf: string): void { // forma antiga de fazer get ou set
  //   this.cpf = cpf;
  // }

  get cpf(): string { // forma nova de fazer get ou set
    console.log('GETTER CHAMADO');
    return this._cpf;
  }
  set cpf(cpf: string) { // forma nova de fazer get ou set
    console.log('SETTER CHAMADO');
    this._cpf = cpf;
  }
}

const pessoa = new Pessoa('Fabricio', 'Viana', 21, '111.111.111-11');

pessoa.cpf = '222.222.222-22'; // acesso ao set
console.log(pessoa.cpf); // acesso ao get
