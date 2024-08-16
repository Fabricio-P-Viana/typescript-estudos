function semRetorno(...args: string[]): void {
  console.log(args.join(' '));
}

// função sem retorno void
// de forma natural é definido

// modules modes, posso reescrever variaveis
export const pessoa = {
  nome: "Fabricio",
  sobrenome: "Viana",

  exibirNome(): void {
    console.log(this.nome, this.sobrenome);
  }
};
