// 记录特定类型的形状类型
type Record<K extends keyof any, T> = {
  [P in K]: T;
};

// https://levelup.gitconnected.com/advanced-typescript-types-with-examples-1d144e4eda9e
const SERVICES1: Record<string, string> = { 
  doorToDoor: "delivery at door",
  airDelivery: "flying in",
  specialDelivery: "special delivery",
  inStore: "in-store pickup",
  foo:123,
};

export interface ProductInCart{
  id:string
  amount:number
  name:string
  label?:string
}

export class CartModel{
  products:Record<number,ProductInCart>={}
  error?:Error=undefined
}

const cartModel = new CartModel()
console.log('cartModel: ', cartModel.products['foo']);
console.log('cartModel: ', cartModel.products[1]);

type petsGroup = 'dog' | 'cat' | 'fish';
interface IPetInfo {
    name:string,
    age:number,
}

type IPets = Record<petsGroup, IPetInfo>;

const animalsInfo:IPets = {
    dog:{
        name:'dogName',
        age:2
    },
    cat:{
        name:'catName',
        age:3
    },
    fish:{
        name:'fishName',
        age:12
    }
}
const animalsInfo1 = {
  dog:{
      name:'dogName',
      age:2
  },
  cat:{
      name:'catName',
      age:3
  },
  fish1:{
      name:'fishName',
      age:'12'
  }
}
// 还是不行的
Object.keys(animalsInfo).forEach((x )=>console.log(animalsInfo[x]))

Object.keys(animalsInfo1).forEach((x)=>console.log(animalsInfo1[x as keyof typeof animalsInfo1]))


export type PersonTypes = {
  name: string;
  value: string;
  gender: boolean;
};
const people: PersonTypes[] = [
  {name: 'apl', value: 'apple', gender: true},
  {name: 'gal', value: 'google', gender: false},
]


people.forEach((person: PersonTypes) =>{
  console.log(person.name);
});

