// Enum
// estrutura de dados não ordenada

enum Cores {
  VERMELHO = 1, // 0 default usando = posso definir de onde começa
  AZUL, // 1
  AMARELO = 1000, // 2 default usando = defino qualquer valor
  LARANJA = "LARANJA",
}

enum Cores { // ELE JUNTA ENUMS DO MESMO NOME
 ROXO=4,
}

console.log(Cores);
// {
//   '0': VERMELHO,
//   '1':AZUL,
//   '2':AMARELO,
//    VERMELHO: 0,
//    AZUL: 1,
//    AMARELO: 2
// }

// posso chamar pela chave e vem o valor ou vise versa
// console.log(Cores.AZUL); // 1
// console.log(Cores[1]); // AZUL

function escolhaCores(cors:Cores): void {
  console.log(Cores[cors]);
}

escolhaCores(Cores.ROXO);
