let x;
if (typeof x === 'undefined') x = 20;
console.log(x);

function cretePerson(
  firstName:string,
  lastName?: string
): {
  firstName: string;
  lastName?: string;
} {
  return {
    firstName,
    lastName
  }
}

function squareOf(x:any) { // number || null
  if (typeof x === 'number') return x*x;
  return null;
}

// Module mode
export default 1;
