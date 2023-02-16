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
let starRegex = /Twinkle/gi;
console.log(twinkleStar.match(starRegex));       // ['Twinkle', 'twinkle']

// 6) Sixth topic: Matched anything with Wildcard Period (.)
let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /ru.|su.|fu.|pu.|nu./; 
console.log(unRegex.test(exampleStr));           // true


// 7) Seventh topic: Match Single Character with Multiple Possibilities
let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/gi;
console.log(quoteSample.match(vowelRegex)); // 25[a, e, i, o, u, a, i ................]










