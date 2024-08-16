let x;
if (typeof x === 'undefined') x = 20;
console.log(x);

export function cretePerson(
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

export function squareOf(x:any) { // number || null
  if (typeof x === 'number') return x*x;
  return null;
}
