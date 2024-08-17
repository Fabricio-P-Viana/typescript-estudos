// quando eu tenho mais de um tipo de retorno ou variavel

// string | number | boolean

function addOrConcat(
  a:number | string,
  b:number | string
): number | string { // pode se string ou inteiro
  if (typeof a === 'number' && typeof b === 'number') return a + b;
  return `${a}${b}`;
}

console.log(addOrConcat(10,20));
console.log(addOrConcat('10',20));
console.log(addOrConcat(10,'20'));
console.log(addOrConcat('10','20'));

// Module mode
export default 1;
