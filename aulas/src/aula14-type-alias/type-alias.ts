// criar "apelidos" para variaveis

type CorRGB = 'VERMELHO' | 'AMARELO' | 'AZUL';
type CorCMYK = 'CIANO' | 'MAGENTA' | 'AMARELO' | 'PRETO';

type CorPreferida = CorRGB | CorCMYK; // junção das cores

type Idade = number;
type Pessoa = { // parecido com interface
  nome: string;
  idade: Idade;
  salario: number;
  corPreferida?: CorPreferida;
};

const pessoa: Pessoa = { // tipo Pessoa
  nome: "Fabricio",
  idade: 18,
  salario: 100_000, // 200000 -> posso separa por underline
}

export function setCorPreferida(pessoa:Pessoa,cor: CorPreferida): Pessoa {
  return { ...pessoa, corPreferida: cor};
}

console.log(setCorPreferida(pessoa,'AZUL'));
