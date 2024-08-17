function semRetorno(...args: string[]): void {
  console.log(args.join(' '));
}

// função sem retorno void
// de forma natural é definido

// modules modes, posso reescrever variaveis
 const pessoa = {
  nome: "Fabricio",
  sobrenome: "Viana",

  exibirNome(): void {
    console.log(this.nome, this.sobrenome);
  }
};

// Module mode
export default 1;
