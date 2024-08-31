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
  constructor(
    readonly nome: string, // não precisa declarar novamente
    readonly sobrenome: string,
    idade: number,
    cpf: string,
    public sala: string, // novo atributo da classe
  ) {
    super(nome, sobrenome, idade, cpf); // chamando o construtor da classe pai
  }

  getNomeCompleto(): string {
    console.log('Fazendo algo antes!');
    return super.getNomeCompleto(); // chamando o método da classe pai
    // isso é usando para fazer algo antes sem sobrescrever o método
  }
}

export class Cliente extends Pessoa {
  getNomeCompleto(): string {
    return `isso vem do cliente ${this.nome} ${this.sobrenome}`;
  }
}

const pessoa = new Pessoa('José', 'Miranda', 30, '111.111.111-11');
const aluno = new Aluno('José', 'Miranda', 30, '111.111.111-11','101');
const cliente = new Cliente('Maria', 'Silva', 30, '111.111.111-11');


