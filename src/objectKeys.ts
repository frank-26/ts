// https://fettblog.eu/typescript-better-object-keys/

// So what’s happening? The type declaration for Object.keys is as follows:

type OnlyPerson = {
  name: string, age: number, id: number,
}
declare const here: OnlyPerson;

Object.keys(here).forEach(key => {
  // 💥 ???
  console.log(here[key])
})



// Option 1. Type-casting

Object.keys(here).forEach((key) => {
  console.log((here as any)[key])
})
// cool
Object.keys(here).forEach((key) => {
  console.log(here[key as keyof OnlyPerson])
})


// Option 2. Extending Object Constructor
/**
2. 
This string array contains string representations of the number 
indices to index either the array or the string’s position. 
Meaning that the string array has the same length as its input.
 */

// TS 内置的 ObjectConstructor
interface ObjectConstructor {
  keys(o: object): string[]
  keys(o: {}): string[]
}
type ObjectKeys<T> = 
  T extends object ? (keyof T)[] : //For any real object, we return its keys.
  T extends number ? [] : // If we pass a number, we get an empty array.
  T extends Array<any> | string ? string[] : //If we pass a string or an array, we get a string array in return.
  never;


  // interface ObjectConstructor {
  //   keys<T>(o: T): ObjectKeys<T>
  // }

  const myStr = '1234567788'

  Object.keys(myStr).forEach((key) => {
    console.log(key)
  })