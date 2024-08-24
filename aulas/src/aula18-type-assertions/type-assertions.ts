
/* Recomendados */
// Condicional de tipo
const body = document.querySelector('body'); // retorna um HTMLBodyElement | null
// body.style.background = 'red'; // erro: Object is possibly 'null'
if ( body ) body.style.background = 'red'; // quando não temos certeza do tipo que estamos lidando

/* Não Recomendados */
// Non-null assertion operator | ! | não é a melhor forma de lidar com isso
const body2 = document.querySelector('body')!; // retorna um HTMLBodyElement
body2.style.background = 'red';

/* Recomendados */
// Type assertions | o tipo mais aconselhado é o as | quando temos certeza do tipo que estamos lidando
const body3 = document.querySelector('body') as HTMLBodyElement; // retorna um HTMLBodyElement
body3.style.background = 'red';

/* Recomendados */
// HTMLElement
const input = document.querySelector('.input') as HTMLInputElement; // retorna um HTMLInputElement
input.value = 'Qualquer coisa';
input.focus();

/* Não Recomendados */
// type assertion
// const body4 = document.querySelector('body') as  number; // não é possível fazer isso
// body4.style.background = 'red';

// type assertion
const body4 = ( document.querySelector('body') as unknown) as number; // não é utilzado mas é possível
// precisa subir o nível de abstração para depois descer

