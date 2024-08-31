export class Pessoa {
  constructor(
    public readonly nome: string,
    public readonly sobrenome: string,
    private idade: number,
    protected cpf: string
  ) {}

  getIdade(): number {
    return this.idade;
  }
  getCpf(): string {
    return this.cpf;
  }
  getNomeCompleto(): string {
    return `${this.nome} ${this.sobrenome}`;
  }
}

export class Aluno extends Pessoa {
  getNomeCompleto(): string { // polimorfismo
    return `isso vem do aluno ${this.nome} ${this.sobrenome}`; // sobrescrevendo o método
  }
}
export class Cliente extends Pessoa {
  getNomeCompleto(): string { // polimorfismo
    return `isso vem do cliente ${this.nome} ${this.sobrenome}`; // sobrescrevendo o método
  }
}

const pessoa = new Pessoa('José', 'Miranda', 30, '111.111.111-11');
const aluno = new Aluno('José', 'Miranda', 30, '111.111.111-11');
const cliente = new Cliente('Maria', 'Silva', 30, '111.111.111-11');


