function test(a:string):string {
  console.log(a)
  return a
}

test('a')

let myFavoriteNumber: string = 'seven';
myFavoriteNumber = '7'; 

// 任意值的属性和方法:声明一个变量为任意值之后，对它的任何操作，返回的内容的类型都是任意值
let anyThing: any = 'Tom';

console.log(anyThing.myName);
console.log(anyThing.myName.firstName);
anyThing.setName('Jerry');
anyThing.setName('Jerry').sayHello();
anyThing.myName.setFirstName('Cat');

let something;//=== let something:any
something = 'seven';
something = 7;

something.setName('Tom');

function getLength(something: string | number): number {
  return something.length;
}

function getString(something: string | number): string {
  return something.toString();
}

let myFavoriteNumber1: string | number;
myFavoriteNumber1 = 'seven';
console.log(myFavoriteNumber1.length); // 5
myFavoriteNumber1 = 7;
console.log(myFavoriteNumber1.length);

// 