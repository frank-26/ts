abstract class Beings {
  public name;
  public constructor(name) {
    this.name = name;
  }
  public abstract sayHi();
}

const beings = new Beings(); // Error

class People extends Beings {
  public sayHi() {}
}

class Animal1 {
  public name;
  private age = 20;
  protected sex = 'male';
  public constructor(name) {
    this.name = name;
  }
}

let aa = new Animal1('Jack');
console.log(aa.name); // Jack
aa.name = 'Tom';
console.log(aa.name); // Tom
console.log(aa.age); // error

class Cat extends Animal1 {
  constructor(age) {
    super(age);
    console.log(this.name);
    console.log(this.sex);
    console.log(this.age);
  }
}

// type
class Animal2 {
  name: string;
  constructor(name: string) {
    this.name = name;
  }

  sayHi(this: Animal2, a: string): string {
    return `My name is ${this.name} ${a}`;
  }

  sayHello(this: Animal2): string {
    return `My name is ${this.name}`;
  }

  sayYes(a: string): string {
    return `My name is ${a}`;
  }
}

let aaa: Animal2 = new Animal2('Jack');
const aaaA = aaa.sayHi.bind(window);
aaaA('dsfds');
console.log(aaa.sayHi('x')); // My name is Jack
console.log(aaa.sayHello('x')); // My name is Jack
console.log(aaa.sayYes('x')); // My name is Jack

class MyClass {
  x = 10;
  someCallback() {
    console.log(this.x); // Prints 'undefined', not 10
    this.someMethod(); // Throws error "this.method is not a function"
  }
  someMethod() {}
}

let obj = new MyClass();
window.setTimeout(obj.someCallback, 10);

class MyClassa {
  static initalize() {
    //
  }
}

MyClassa.initalize();

class Foos {
  get bar() {
    return 42;
  }
}
let x = new Foos();
// Expected error here
x.bar = 10;
