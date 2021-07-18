function foo(readonly bar:number){
console.log(bar)
}

class Foo{
  readonly baz:number;
}

let aX: number[] = [1, 2, 3, 4]
let ronumbers: ReadonlyArray<number> = aX

ronumbers[0] = 4 //WRONG! It cannot be assigned

//But it could be used for iterating over its values for reading purposes
for (const num of ronumbers) {
  console.log(num)
}

// before
export interface Thing {
  foo: string;
}

// after
export interface Thing {
  readonly data: string;
}

// Before
export type UnsafeType = { prop: number };

// After
export type SafeType = Readonly<{ prop: number }>;

// Before
class UnsafeComponent {
  loaderShow$ = new Boolean(true);
}

// After
class SafeComponent {
  readonly loaderShow$ = new Boolean(true);
}

// Before
const unsafeArray: Array<number> = [1, 2, 3];
const unsafeArrayOtherWay: number[] = [1, 2, 3];

// After
const safeArray: ReadonlyArray<number> = [1, 2, 3];
const safeArrayOtherWay: readonly number[] = [1, 2, 3];

// three levels
const unsafeArray: number[] = [1, 2, 3]; // bad
const safeArray: readonly number[] = [1, 2, 3]; // good
const verySafeTuple: readonly [number, number, number] = [1, 2, 3]; // awesome


// Map:
// Before
const unsafeMap: Map<string, number> = new Map<string, number>();

// After
const safeMap: ReadonlyMap<string, number> = new Map<string, number>();


// Set:
// Before
const unsafeSet: Set<number> = new Set<number>();

// After
const safeSet: ReadonlySet<number> = new Set<number>();