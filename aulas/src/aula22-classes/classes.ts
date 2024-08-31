// versão longa
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


const empresa1 = new Empresa('Empresa 1','11.111.111/0001-11');
console.log(empresa1); // Empresa { nome: 'Empresa 1', colaboradores: [], cnpj: '11.111.111/0001-11' }
// empresa1.nome = 'Empresa 2'; // erro

// criando colaboradores
const colaborador1 = new Colaborador('José', 'Miranda');
const colaborador2 = new Colaborador('Maria', 'Silva');
const colaborador3 = new Colaborador('Ana', 'Costa');
// empresa1.colaboradores.push(colaborador1); // erro pois é privado

empresa1.adicionaColaborador(colaborador1);
empresa1.adicionaColaborador(colaborador2);
empresa1.adicionaColaborador(colaborador3);
console.log(empresa1);
// Empresa { nome: 'Empresa 1', colaboradores: [ Colaborador { nome: 'José', sobrenome: 'Miranda' }, Colaborador { nome: 'Maria', sobrenome: 'Silva' }, Colaborador { nome: 'Ana', sobrenome: 'Costa' } ], cnpj: '11.111.111/0001-11' }

empresa1.mostrarColaboradores();
// Colaborador { nome: 'José', sobrenome: 'Miranda' }
