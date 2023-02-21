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

// 12) Twelveth topic: Find Characters with Lazy Matching
let text = "<h1>Winter is coming</h1>";
let myRegex3 = /<h.>*?./; 
console.log(text.match(myRegex3));              // ['<h1>']

// 13) Thirteenth topic: Match Beginning String Patterns
let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /^Cal/; 
console.log(calRegex.test(rickyAndCal));        // true

// 14) Fourteenth topic: Match Ending String Patterns
let caboose = "The last car on a train is the caboose";
let lastRegex = /caboose$/;
console.log(lastRegex.test(caboose));           // true

// 15) Fifteenth topic: Match All Letters and Numbers
let quoteSample3 = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/g; 
console.log(quoteSample3.match(alphabetRegexV2).length);  // 31

// 16) Sixteenth topic: Match Everything But Letters and Numbers
let quoteSample4 = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /\W/g;
console.log(quoteSample4.match(nonAlphabetRegex).length);  // 6

// 17) Seventeenth topic: Match All Numbers
let movieName = "2001: A Space Odyssey";
let numRegex = /\d/g; 
console.log(movieName.match(numRegex).length);             // 4

// 18) Eighteenth topic: Match All Non-Numbers
let movieName1 = "2001: A Space Odyssey";
let noNumRegex = /\D/g;
console.log(movieName1.match(noNumRegex).length);          // 17

// 19) Nineteenth topic: Restrict Possible Usernames
let username = "JackOfAllTrades";
let userCheck = /^[a-z][a-z]+\d*$|^[a-z]\d\d+$/i;
console.log(userCheck.test(username));                     // true

// 20) Twentyth topic: Match Whitespace
let sample = "Whitespace is important in separating words";
let countWhiteSpace = /\s/g;
console.log(sample.match(countWhiteSpace));                // [' ', ' ', ' ', ' ', ' ']

// 21) TwentyOneth topic: Match Non-Whitespace Characters   
let sample1 = "Whitespace is important.";
let countNonWhiteSpace = /\S/g;
console.log(sample1.match(countNonWhiteSpace));            // ['W', 'h', 'i', 't', 'e', 's', 'p' ..... 't', '.']

// 22) TwentyTwoth topic: Specify Upper and Lower Number of Matches
let ohStr = "Ohhh no";
let ohRegex = /Oh{3,6} no/;
console.log(ohRegex.test(ohStr));                          // true

// 23) TwentyThird topic: Specify Only the Lower Number of Matches
let haStr = "Hazzzzah";
let haRegex = /Haz{4,}ah/;
console.log(haRegex.test(haStr));                          // true

// 24) TwentyFourth topic: Specify Exact Number of Matches
let timStr = "Timmmmber";
let timRegex = /Tim{4}ber/;
console.log(timRegex.test(timStr));                        // true

// 25) TwentyFifth topic: Check for All or None
let favWord = "favorite";
let favRegex = /favou?rite/;
let favRegex01 = /favout?rite/;
console.log(favRegex.test(favWord));                       // true
console.log(favRegex01.test(favWord));                     // false

// 26) TwentySixth topic: Positive and Negative Lookahead
let sampleWord = "astronaut123";
let sampleWord1 = "astronaut";
let pwRegex = /(?=\w{6})(?=\w*\d{2})/;
console.log(pwRegex.test(sampleWord));                     // true
console.log(pwRegex.test(sampleWord1));                    // false

// 27) TwentySeventh topic: Check For Mixed Grouping of Characters
let myString = "Eleanor Roosevelt";
let myString1 = "Franklin D. Roosevelt";
let myRegex1 = /(Franklin D..|Eleanor.)Roosevelt/;
console.log(myRegex1.test(myString));                      // true
console.log(myRegex1.test(myString1));                     // true

// 28) TwentyEighth topic: Reuse Patterns Using Capture Groups
let repeatNum = "42 42 42";
let reRegex = /^(\d+) \1 \1$/;
console.log(reRegex.test(repeatNum));                      // true

// 29) TwentyNineth topic: Use Capture Groups to Search and Replace
let str = "one two three";
let fixRegex = /(\w+)\s(\w+)\s(\w+)/;
let replaceText = '$3 $2 $1';
console.log(str.replace(fixRegex, replaceText));          // three two one

// 30) Thirtyth topic: Remove Whitespace from Start and End
let hello = "   Hello, World!  ";
let wsRegex = /^\s+|\s+$/g;
console.log(hello.replace(wsRegex, ""));                  // Hello, World!