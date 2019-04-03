enum Days {Sun, Mon, Tue, Wed, Thu, Fri, Sat};
console.log(Days["Sun"] === 0); // true
console.log(Days["Mon"] === 1); // true
console.log(Days["Tue"] === 2); // true
console.log(Days["Sat"] === 6); // true

console.log(Days[0] === "Sun"); // true
console.log(Days[1] === "Mon"); // true
console.log(Days[2] === "Tue"); // true
console.log(Days[6] === "Sat"); // true

enum Color1 {Red, Green, Blue = "blue".length};

//如果紧接在计算所得项后面的是未手动赋值的项，那么它就会因为无法获得初始值而报错：
enum Color {Red = "red".length, Green, Blue};

enum CardSuit {
  Clubs,
  Diamonds,
  Hearts,
  Spades
}

// Sample usage
var card = CardSuit.Clubs;
console.log(card)
// card = '1324'

enum Color2 {
  Red,     // 0
  Green,   // 1
  Blue     // 2
}

enum Color3 {
  Red=3,     // 3
  Green,   // 4
  Blue     // 5
}


enum AnimalFlags {
  None        = 0,
  HasClaws    = 1 << 0,
  CanFly      = 1 << 1,
  EatsFish    = 1 << 2,
  Endangered  = 1 << 3,

  EndangeredFlyingClawedFishEating = HasClaws | CanFly | EatsFish | Endangered
}

// for performance
const enum Tristate {
  False,
  True,
  Unknown
}

enum Color11 {
  Red=33,
  Green,
  Blue
}

enum Color1 {
  DarkRed = '1',
  DarkGreen,
  DarkBlue
}

const lie = Tristate.False;