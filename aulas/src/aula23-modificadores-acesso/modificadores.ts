
// Public acessivel para todos
// Private acessivel apenas dentro da classe
// Protected acessivel dentro da classe e nas classes filhas
// Readonly não pode ser alterado
// Static acessivel sem instanciar a classe
// Abstract não pode ser instanciado, apenas herdado

export class Empresa {
  readonly nome: string; // default é public
  private readonly colaboradores: Colaborador[] = [];
  protected readonly cnpj: string;

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

// a classe funciona como um novo tipo
export class Colaborador {
  constructor(
    public readonly nome: string,
    public readonly sobrenome: string
  ) {} // versão curta o this já é criado automaticamente
}

