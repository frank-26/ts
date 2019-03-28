abstract class Beings {
  public name;
  public constructor(name) {
      this.name = name;
  }
  public abstract sayHi();
}


const beings = new Beings(); // Error


class People extends Beings {
  public sayHi(){}
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
  sayHi(): string {
    return `My name is ${this.name}`;
  }
}

let aaa: Animal2 = new Animal2('Jack');
console.log(aaa.sayHi()); // My name is Jack