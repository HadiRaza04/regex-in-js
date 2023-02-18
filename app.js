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
console.log(twinkleStar.match(starRegex));    // ['Twinkle', 'twinkle']

// 6) Sixth topic: Matched anything with Wildcard Period (.)
let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /ru.|su.|fu.|pu.|nu./; 
console.log(unRegex.test(exampleStr));        // true

// 7) Seventh topic: Match Single Character with Multiple Possibilities
let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/gi;
console.log(quoteSample.match(vowelRegex));   // 25[a, e, i, o, u, a, i ................]

// 8) Eighth topic: Match Letters of the Alphabet
let quoteSample2 = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex2 = /[a-z]/gi; 
console.log(quoteSample2.match(alphabetRegex2)); // ['T', 'h', 'e', 'q', 'u', 'i', 'c', 'k', ......'d', 'o', 'g'];

// 9) Nineth topic: Match Numbers and Letters of the Alphabet using (-)
let quoteSample1 = "Blueberry 3.141592653s are delicious.";
let myRegex = /[h-s2-6]/gi;
console.log(quoteSample1.match(myRegex));        //  ['l', 'r', 'r', '3', '4', '5', '2', '6', '5', '3', 's', 'r', 'l', 'i', 'i', 'o', 's']

// 10) Tenth topic: Match Characters that Occur One or More Times (+)
let difficultSpelling = "Mississippi";
let myRegex2 = /s+/g; // 
console.log(difficultSpelling.match(myRegex2));  // ['ss', 'ss']

// 11) Eleventh topic: Match Characters that Occur Zero or More Times (*)
let chewieQuote = "Aaaaaaarrrgh!";
let chewieRegex = /Aa*/g;
console.log(chewieQuote.match(chewieRegex));     // ['Aaaaaaa']






