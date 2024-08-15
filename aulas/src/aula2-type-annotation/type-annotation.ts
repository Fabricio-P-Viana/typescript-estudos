
// tipos de dados primitivos

let nome: string = "Fabricio";
let idade: number = 12; // todo tipo de numero
let adulto: boolean= true;
let simbolo: symbol = Symbol('Fabricio');
// let big: bigint = 10h;

// inferencia de tipos não seja redundante, o ts ja reconhece os tipos basicos

// Arrays
let arrayDeNumeros: Array<number> = [1, 2, 3];
let arrayDeStrings: Array<string> = ['a', 'b', 'c'];
// ou
let arrayDeNumeros2 : number[] = [1, 2, 3];
let arrayDeString2: string[] = ['a', 'b', 'c'];

// objetos
let pessoa: { nome: string, idade: number, adulto?: boolean } = {
  nome: "Fabricio",
  idade: 0
}

// ? opcionais

// funções
function soma(x: number,y: number): number {
  return x+y;
}
// tipo de arrow function no ts
const soma2: (x: number, y:number) => number = (x,y) => x+y;
