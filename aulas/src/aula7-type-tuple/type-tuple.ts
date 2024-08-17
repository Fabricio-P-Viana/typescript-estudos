
// TUPLA
// tamanho e index fixos

const dadosCliente: readonly [number,string] = [1,'fabricio']; // readonly valores imutaveis
const dadosCliente2: [number,string,string?] = [1,'fabricio']; // valor opcional
// : [T,U,...]

const dadosCliente3: [number,string, ...string[]] = [1,'fabricio']; // rest operator

// Module mode
export default 1;
