interface State {
  text: string;
  counter: number;
}

const state: Readonly<State> = {
  text: "hello world",
  counter: 42,
};

state.text = "update"; // Expected error: state is readonly

const stateUpdate1: Partial<State> = {
  counter: 70,
};

const stateUpdate2: Partial<State> = {
  text: "update",
  flag: true, // Expected error: no `flag` in State
};

type TypeName<T> = T extends string
  ? "string"
  : T extends number
    ? "number"
    : T extends boolean
      ? "boolean"
      : T extends undefined
        ? "undefined"
        : T extends Function ? "function" : "object";

type T0 = TypeName<string>; // "string"
type T1 = TypeName<"a">; // "string"
type T2 = TypeName<true>; // "boolean"
type T3 = TypeName<() => void>; // "function"
type T4 = TypeName<string[]>; // "object"