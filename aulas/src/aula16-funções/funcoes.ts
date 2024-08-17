type MapStringCallback = (item:string) => string;

// tipando funções para o ts interpretar
export function mapString(
  array: string[],
  callbackfn:
  MapStringCallback
): string[] {
  const newArray: string[] = [];

  for (let i = 0; i < array.length; i++) {
    const item = array[i];
    newArray.push(callbackfn(item));
  }
  return newArray;
}

const abc = ['a','b','c'];

const abcMapped = mapString(abc, item => item.toLocaleUpperCase());

console.log(abcMapped); // ['A','B','C']

