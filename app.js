// ------ This practice is belonged from freeCodeCamp.org ------ //

// 1) Very first topic: .test() Method
let testStr = "freeCodeCamp";
let testRegex = /Camp/;
console.log(testRegex.test(testStr));         // true


// 2) Second topic: Find Multiple words using | operator
let names = "Hadi Raza Hassan Ali";
let findNames = /Hadi|Ali|Raza/;
console.log(findNames.test(names));           // true

// 3) Third topic: Ignores uppercase and lowercase letters
let company = "TapalDanayDaar";
let findCompany = /tapaldanaydaar/i;          // i ignores uppercase letters
console.log(findCompany.test(company));       // true

// 4) Fourth topic: .match() Method
console.log("Hello World!".match(/Hello/));   // ["Hello"]

let ourStr = "Regular expressions";
let ourRegex = /expressions/;
console.log(ourStr.match(ourRegex));          // ["expressions"]

// 5) Fifth topic: Multiple searchesusing global //gi Method
let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /Twinkle/gi; // Change this line
console.log(twinkleStar.match(starRegex));       // ['Twinkle', 'twinkle']









