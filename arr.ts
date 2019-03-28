let fibonacci: number[] = [1, 1, 2, 3, 5, 'a'];
fibonacci.push('8');

let fibonacci1: Array<number> = [1, 1, 2, 3, 5];

interface NumberArray {
  [index: number]: number;
}
let fibonacci2: NumberArray = [1, 1, 2, 3, 5];

let list: any[] = ['Xcat Liu', 25, { website: 'http://xcatliu.com' }];

function sum() {
  let args: number[] = arguments;
}

function sum1() {
  let args: IArguments = arguments;
}

function sum(x: number, y: number): number {
  return x + y;
}