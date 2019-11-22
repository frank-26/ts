// https://medium.com/@tomsu/typescript-tips-tricks-c8fdef998d50
// # 使用字面量类型
// 泛型 Id 类型
type Id<T extends string> = {
  type: T;
  value: string;
};

// 特殊的 Id 类型
type FooId = Id<'foo'>;
type BarId = Id<'bar'>;

// 可选：构造函数
const createFoo = (value: string): FooId => ({ type: 'foo', value });
const createBar = (value: string): BarId => ({ type: 'bar', value });

let foo11 = createFoo('sample');
let bar1 = createBar('sample');

foo11 = bar; // Error
foo11 = foo11; // Okey



const textEl = document.querySelector('input');
console.log(textEl.value);
console.log(textEl!.value);

interface Movie {
  id: string;
  name: string;
}
class SearchPageComponent {
  movie: Movie;
  constructor(private bs: BookmarksService) {}
  getFirstMovie() {
      // 🛑 types are not assignable
      this.movie = this.bs.items[0];
      // 👍 so you have to manually assert type:
      this.movie = this.bs.items[0] as Movie;
  }
  getSecondMovie() {
      this.movie = this.bs.items[1] as Movie;
  }
}


interface RootObject {
  cats: Cat[];
  favoriteNumber: number;
  favoriteWord: string;
}

interface Cat {
  name: string;
  nullableId?: number | string;
  optionalFeature?: string;
}