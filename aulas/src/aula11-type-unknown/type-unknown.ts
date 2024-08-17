//

let x: unknown;
let y: unknown;

// ele é mais seguro que any
// ele não permite somar sem antes verificar

if (typeof x === 'number' && typeof y === 'number') console.log(x+y);

// Module mode
export default 1;
