// # 一旦有人告诉你，never 表示一个从来不会优雅的返回的函数时，你可能马上就会想到与此类似的 void，
//然而实际上，void 表示没有任何类型，never 表示永远不存在的值的类型。
/*
当一个函数没有返回值时，它返回了一个 void 类型，但是，当一个函数根本就没有返回值时（或者总是抛出错误），它返回了一个 never，
void 指可以被赋值的类型（在 strictNullChecking 为 false 时），但是 never 不能赋值给其他任何类型，除了 never。
*/
// ok, 做为函数返回类型的 never
let bar: never = (() => {
  throw new Error('Throw my hands in the air like I just dont care');
})();

let foo: never; // ok

function fooa(x: string | number): boolean {
  if (typeof x === 'string') {
    return true;
  } else if (typeof x === 'number') {
    return false;
  }

  // 如果不是一个 never 类型，这会报错：
  // - 不是所有条件都有返回值 （严格模式下）
  // - 或者检查到无法访问的代码
  // 但是由于 TypeScript 理解 `fail` 函数返回为 `never` 类型
  // 它可以让你调用它，因为你可能会在运行时用它来做安全或者详细的检查。
  return fail('Unexhaustive');
}

function fail(message: string): never {
  throw new Error(message);
}