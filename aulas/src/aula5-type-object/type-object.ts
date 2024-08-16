// ts ja faz inferencia dentro de objetos

// :Record<string, unknown> esse é o type mas é desnecessario adicona-lo

const objetoA = {
  chaveA: 'valorA',
  chaveB: 'valorB'
}

objetoA.chaveA = 'OUTRO VALOR';
// objetoA.chaveC = 'NOVO VALOR'; // não posso criar novas chaves

const objetoB: {
  readonly chaveA: string; // não pode ser alterado
  chaveB: string;
  chaveC?: string; // opcional
  // quando não sabemos qual o tipo para outra chave criada depois da declaração
  [key: string]: unknown; // index signature
} = {
  chaveA: 'valorA',
  chaveB: 'valorB'
}
