var Days;
(function (Days) {
    Days[Days["Sun"] = 0] = "Sun";
    Days[Days["Mon"] = 1] = "Mon";
    Days[Days["Tue"] = 2] = "Tue";
    Days[Days["Wed"] = 3] = "Wed";
    Days[Days["Thu"] = 4] = "Thu";
    Days[Days["Fri"] = 5] = "Fri";
    Days[Days["Sat"] = 6] = "Sat";
})(Days || (Days = {}));
;
console.log(Days["Sun"] === 0); // true
console.log(Days["Mon"] === 1); // true
console.log(Days["Tue"] === 2); // true
console.log(Days["Sat"] === 6); // true
console.log(Days[0] === "Sun"); // true
console.log(Days[1] === "Mon"); // true
console.log(Days[2] === "Tue"); // true
console.log(Days[6] === "Sat"); // true
var Color1;
(function (Color1) {
    Color1[Color1["Red"] = 0] = "Red";
    Color1[Color1["Green"] = 1] = "Green";
    Color1[Color1["Blue"] = 0] = "Blue";
})(Color1 || (Color1 = {}));
;
//如果紧接在计算所得项后面的是未手动赋值的项，那么它就会因为无法获得初始值而报错：
var Color;
(function (Color) {
    Color[Color["Red"] = "red".length] = "Red";
    Color[Color["Green"] = void 0] = "Green";
    Color[Color["Blue"] = void 0] = "Blue";
})(Color || (Color = {}));
;
var CardSuit;
(function (CardSuit) {
    CardSuit[CardSuit["Clubs"] = 0] = "Clubs";
    CardSuit[CardSuit["Diamonds"] = 1] = "Diamonds";
    CardSuit[CardSuit["Hearts"] = 2] = "Hearts";
    CardSuit[CardSuit["Spades"] = 3] = "Spades";
})(CardSuit || (CardSuit = {}));
// Sample usage
var card = CardSuit.Clubs;
console.log(card);
// card = '1324'
var Color2;
(function (Color2) {
    Color2[Color2["Red"] = 0] = "Red";
    Color2[Color2["Green"] = 1] = "Green";
    Color2[Color2["Blue"] = 2] = "Blue"; // 2
})(Color2 || (Color2 = {}));
var Color3;
(function (Color3) {
    Color3[Color3["Red"] = 3] = "Red";
    Color3[Color3["Green"] = 4] = "Green";
    Color3[Color3["Blue"] = 5] = "Blue"; // 5
})(Color3 || (Color3 = {}));
var AnimalFlags;
(function (AnimalFlags) {
    AnimalFlags[AnimalFlags["None"] = 0] = "None";
    AnimalFlags[AnimalFlags["HasClaws"] = 1] = "HasClaws";
    AnimalFlags[AnimalFlags["CanFly"] = 2] = "CanFly";
    AnimalFlags[AnimalFlags["EatsFish"] = 4] = "EatsFish";
    AnimalFlags[AnimalFlags["Endangered"] = 8] = "Endangered";
    AnimalFlags[AnimalFlags["EndangeredFlyingClawedFishEating"] = 15] = "EndangeredFlyingClawedFishEating";
})(AnimalFlags || (AnimalFlags = {}));
var Color11;
(function (Color11) {
    Color11[Color11["Red"] = 33] = "Red";
    Color11[Color11["Green"] = 34] = "Green";
    Color11[Color11["Blue"] = 35] = "Blue";
})(Color11 || (Color11 = {}));
(function (Color1) {
    Color1["DarkRed"] = "1";
    Color1[Color1["DarkGreen"] = void 0] = "DarkGreen";
    Color1[Color1["DarkBlue"] = void 0] = "DarkBlue";
})(Color1 || (Color1 = {}));
var lie = 0 /* False */;
