// declaração de arrays
// Array<T> - T[]

function multiplicaArgs(...args: Array<number>): number {
  return args.reduce((ac,valor) => ac*valor,1);
}

function concatenaStrings(...args: string[]): string {
  return args.join(' ');
}

// automaticamente ja sabe o tipo da variavel
const result = multiplicaArgs(1,2,3);
const resultString = concatenaStrings('a','b','c');

// Module mode
export default 1;
