// 这个类型可以将任何类型的键值转化成number类型
type TypeToNumber<T> = {
    [key in keyof T]: number
  }

  const objx: TypeToNumber<Person> = { name: 10, age: 10 }

  for (let x in objx){
      console.log(x)
  }