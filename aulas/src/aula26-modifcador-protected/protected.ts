export class Empresa {
  readonly nome: string;
  protected readonly colaboradores: Colaborador[] = []; // pode ser acessado pelas classes filhas
  private readonly cnpj: string;

  constructor(nome: string, cnpj: string) {
    this.nome = nome;
    this.cnpj = cnpj;
  }

  adicionaColaborador(colaborador:Colaborador): void {
    this.colaboradores.push(colaborador);
  }
  mostrarColaboradores(): void{
    for(const colaborador of this.colaboradores){
      console.log(colaborador);
    }
  }
}

export class Colaborador {
  constructor(
    public readonly nome: string,
    public readonly sobrenome: string
  ) {}

}

export class Udemy extends Empresa {
  constructor() {
    super('Udemy','11.111.111/0001-11');
  }
  popColaborador(): Colaborador | null {
    const colaborador = this.colaboradores.pop();
    if(colaborador) return colaborador;
    return null;
  }
}

