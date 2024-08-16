// never = nunca retorna nada
// usada para gerar erros

function criaErro(): never {
  throw new Error('Erro qualquer');
}

criaErro();
