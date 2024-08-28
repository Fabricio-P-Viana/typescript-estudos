// tentando tipar o this dentro de uma função

function funcao(this: Date,argumento1: string, age: number): void {
  console.log(this);
  console.log(argumento1,age);
}

// this não aparece nesta função
// funcao('ola'); // erro: O contexto 'this' de tipo 'void' não é atribuível para o 'this' do método de tipo 'Date'

//usando call primeiro é o this usando call e os outros são argumentos
funcao.call(new Date(),'ola',12);

//usando apply primeiro é o this e todos os outros argumentos ficam dentro de um array
funcao.apply(new Date(),['ola',12]);
