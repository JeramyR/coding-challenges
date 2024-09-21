

//title: Distance to Nearest Vowel

//tags: loops,strings

//url: https://edabit.com/challenge/b9FBAhxaijR9fzxgo

//Description:
//Write a function that takes in a string and for each character, returns the distance to the nearest vowel in the string. If the character is a vowel itself, return 0.
//Examples
//distanceToNearestVowel("aaaaa") ➞ [0, 0, 0, 0, 0]
//
//distanceToNearestVowel("babbb") ➞ [1, 0, 1, 2, 3]
//
//distanceToNearestVowel("abcdabcd") ➞ [0, 1, 2, 1, 0, 1, 2, 3]
//
//distanceToNearestVowel("shopper") ➞ [2, 1, 0, 1, 1, 0, 1]
//Notes
//All input strings will contain at least one vowel.
//Strings will be lowercased.
//Vowels are: a, e, i, o, u.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(distanceToNearestVowel("aaaaa"), [0, 0, 0, 0, 0])
//Test.assertSimilar(distanceToNearestVowel("bba"), [2, 1, 0])
//Test.assertSimilar(distanceToNearestVowel("abbb"), [0, 1, 2, 3])
//Test.assertSimilar(distanceToNearestVowel("abab"), [0, 1, 0, 1])
//Test.assertSimilar(distanceToNearestVowel("babbb"), [1, 0, 1, 2, 3])
//Test.assertSimilar(distanceToNearestVowel("baaab"), [1, 0, 0, 0, 1])
//Test.assertSimilar(distanceToNearestVowel("abcdabcd"), [0, 1, 2, 1, 0, 1, 2, 3])
//Test.assertSimilar(distanceToNearestVowel("abbaaaaba"), [0, 1, 1, 0, 0, 0, 0, 1, 0])
//Test.assertSimilar(distanceToNearestVowel("treesandflowers"), [2, 1, 0, 0, 1, 0, 1, 2, 2, 1, 0, 1, 0, 1, 2])
//Test.assertSimilar(distanceToNearestVowel("pokerface"), [1, 0, 1, 0, 1, 1, 0, 1, 0])
//Test.assertSimilar(distanceToNearestVowel("beautiful"), [1, 0, 0, 0, 1, 0, 1, 0, 1])
//Test.assertSimilar(distanceToNearestVowel("rythmandblues"), [5, 4, 3, 2, 1, 0, 1, 2, 2, 1, 0, 0, 1])
//Test.assertSimilar(distanceToNearestVowel("shopper"), [2, 1, 0, 1, 1, 0, 1])
//Test.assertSimilar(distanceToNearestVowel("singingintherain"), [1, 0, 1, 1, 0, 1, 1, 0, 1, 2, 1, 0, 1, 0, 0, 1])
//Test.assertSimilar(distanceToNearestVowel("sugarandspice"), [1, 0, 1, 0, 1, 0, 1, 2, 2, 1, 0, 1, 0])
//Test.assertSimilar(distanceToNearestVowel("totally"), [1, 0, 1, 0, 1, 2, 3])

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: SVG Path Data Parser

//tags: arrays,regex,strings

//url: https://edabit.com/challenge/ysMrKPGby3FXiYtQn

//Description:
//A <path> element can usually be found inside an <svg> element and has an attribute d that represents the definition of the outline of a shape.
//A brief summary about this attribute:
//It contains commands (letters) and coordinates (numbers)
//All instructions are expressed as one character (e.g., a moveto is expressed as an M).
//Superfluous white space and separators such as commas can be eliminated (e.g., M 10 10 L 20 20 contains unnecessary spaces and could be expressed more compactly as M10 10L20 20).
//The command letter can be eliminated on subsequent commands if the same command is used multiple times in a row (e.g., you can drop the second L in M 10 20 L 20 10 L -10 -20 and use M 10 20 L 20 10 -10 -20 instead).
//Your job is to build a parser that will convert this string in an array of commands, where each array element is an object with the command letter and an array of parameters.
//This summary is incomplete but should get you started, for more information please refer to the W3C specification found in the resources tab.
//Examples
//pathDataParser("") ➞ []
//
//pathDataParser("M 0 0") ➞ [{command: 'M', parameters: [0, 0]}]
//
//pathDataParser("M 1 1.5 L 0 1.5 0 0.5 1 0.5 0.5 0 0 0.5 1 1.5 1 0.5 0 1.5" ➞ [
//  {command: "M", parameters: [1, 1.5]},
//  {command: "L", parameters: [0, 1.5, 0, 0.5, 1, 0.5, 0.5, 0, 0, 0.5, 1, 1.5, 1, 0.5, 0, 1.5]}
//]
//
//pathDataParser("M 0,1 h 1 v -1 h 1 v 1 h 1 C 2,1 3,3 1.5,3 C 0,3 1,1 0,1 z" ➞ [
//  {command: "M", parameters: [0, 1]},
//  {command: "h", parameters: [1]},
//  {command: "v", parameters: [-1]},
//  {command: "h", parameters: [1]},
//  {command: "v", parameters: [1]},
//  {command: "h", parameters: [1]},
//  {command: "C", parameters: [2, 1, 3, 3, 1.5, 3]},
//  {command: "C", parameters: [0, 3, 1, 1, 0, 1]},
//  {command: "z", parameters: []}
//]
//Notes
//Return an empty array if no commands are found (example #1)
//The z (or Z) command is the only one without parameters, in this case return an empty array (see last command of example #4)
//The parameters array contains numbers, not strings, so you'll have to convert them
//Sometimes numbers can be very compressed to save space, let's look at some examples that might trip you up:
//Decimal numbers can start with a dot: .4 is the same as 0.4
//If a negative number comes after another number, the space is optional: 0-4 is equal to 0 -4
//Multiple decimal numbers in a row can be very tricky, remember that a number CAN NOT have more than 1 dot, so this: 1.2.34 is actually 2 different numbers: 1.2 and 0.34
//Some examples have commas, some do not, some have multiline strings, some are a single line, remember to take into account all valid cases! Check out the tests tab to find out more.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//const a1 = pathDataParser('');
//const e1 = [];
//​
//const a2 = pathDataParser('M 1 1.5 L 0 1.5 0 0.5 1 0.5 0.5 0 0 0.5 1 1.5 1 0.5 0 1.5');
//const e2 = [{ command: 'M', parameters: [1, 1.5] }, { command: 'L', parameters: [0, 1.5, 0, 0.5, 1, 0.5, 0.5, 0, 0, 0.5, 1, 1.5, 1, 0.5, 0, 1.5] }];
//​
//const a3 = pathDataParser('M 0,1 h 1 v -1 h 1 v 1 h 1 C 2,1 3,3 1.5,3 C 0,3 1,1 0,1 z');
//const e3 = [{ command: 'M', parameters: [0, 1] }, { command: 'h', parameters: [1] }, { command: 'v', parameters: [-1] }, { command: 'h', parameters: [1] }, { command: 'v', parameters: [1] }, { command: 'h', parameters: [1] }, { command: 'C', parameters: [2, 1, 3, 3, 1.5, 3] }, { command: 'C', parameters: [0, 3, 1, 1, 0, 1] }, { command: 'z', parameters: [] }];
//​
//const a4 = pathDataParser('M 0,1 h 1 v -1 h 1 v 1 h 1 c -1,0 0,2 -1.5,2 c -1.5,0 -0.5,-2 -1.5,-2 z');
//const e4 = [{ command: 'M', parameters: [0, 1] }, { command: 'h', parameters: [1] }, { command: 'v', parameters: [-1] }, { command: 'h', parameters: [1] }, { command: 'v', parameters: [1] }, { command: 'h', parameters: [1] }, { command: 'c', parameters: [-1, 0, 0, 2, -1.5, 2] }, { command: 'c', parameters: [-1.5, 0, -0.5, -2, -1.5, -2] }, { command: 'z', parameters: [] }];
//​
//const a5 = pathDataParser('M 0,1 l 1,0 0,-1, 1,0 0,1 1,0 c -1,0 0,2 -1.5,2 c -1.5,0 -0.5,-2 -1.5,-2 z');
//const e5 = [{ command: 'M', parameters: [0, 1] }, { command: 'l', parameters: [1, 0, 0, -1, 1, 0, 0, 1, 1, 0] }, { command: 'c', parameters: [-1, 0, 0, 2, -1.5, 2] }, { command: 'c', parameters: [-1.5, 0, -0.5, -2, -1.5, -2] }, { command: 'z', parameters: [] }];
//​
//const a6 = pathDataParser('M 0,1 l 1,0 0,-1, 1,0 0,1 1,0 c -1,0 0,2 -1.5,2 c -1.5,0 -0.5,-2 -1.5,-2 z M 0,0 l 0.5,0.5 -0.5,0 z M 3,0 l -0.5,0.5 0.5,0 z');
//const e6 = [{ command: 'M', parameters: [0, 1] }, { command: 'l', parameters: [1, 0, 0, -1, 1, 0, 0, 1, 1, 0] }, { command: 'c', parameters: [-1, 0, 0, 2, -1.5, 2] }, { command: 'c', parameters: [-1.5, 0, -0.5, -2, -1.5, -2] }, { command: 'z', parameters: [] }, { command: 'M', parameters: [0, 0] }, { command: 'l', parameters: [0.5, 0.5, -0.5, 0] }, { command: 'z', parameters: [] }, { command: 'M', parameters: [3, 0] }, { command: 'l', parameters: [-0.5, 0.5, 0.5, 0] }, { command: 'z', parameters: [] }];
//​
//const a7 = pathDataParser('M1 0H0v1h.6H0v1h1.5V0c1 0 1 2 0 2h1L3 0l.25 1h-.5.5l.25 1H4V0c.7 0 .7 1 0 1 1 0 1 1 0 1h1.3V0v2h1V0h-.5 1');
//const e7 = [
//  { command: 'M', parameters: [1, 0] },
//  { command: 'H', parameters: [0] },
//  { command: 'v', parameters: [1] },
//  { command: 'h', parameters: [0.6] },
//  { command: 'H', parameters: [0] },

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Consecutive Ascending Numbers

//tags: arrays,sorting,strings,validation

//url: https://edabit.com/challenge/zJmMWCmZBjWhypbT8

//Description:
//Write a function that will return true if a given string (divided and grouped into a size) will contain a set of consecutive ascending numbers, otherwise, return false.
//Examples
//ascending("123124125") ➞ true
//// Contains a set of consecutive ascending numbers
//// if grouped into 3's : 123, 124, 125
//
//ascending("101112131415") ➞ true
//// Contains a set of consecutive ascending numbers
//// if grouped into 2's : 10, 11, 12, 13, 14, 15
//
//ascending("32332432536") ➞ false
//// Regardless of the grouping size, the numbers can't be consecutive.
//
//ascending("326325324323") ➞ false
//// Though the numbers (if grouped into 3's) are consecutive but descending.
//
//ascending("666667") ➞ true
//// Consecutive numbers: 666 and 667.
//Notes
//A number can consist of any number of digits, so long as the numbers are adjacent to each other, and the string has at least two of them.
//A recursive version of this challenge can be found via this link.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//let [actualParam, expected] = [
//  [
//    "123124125", "101112131415", "666667", "232425", "444445", "1234567", "123412351236", "57585960616263", "500001500002500003",
//    "919920921", "12341235123612371238", "32332432536", "326325324323", "2324256", "1235", "121316", "12131213", "54321",
//    "56555453", "90090190290", "35236237238"
//  ], [
//    true, true, true, true, true, true, true, true, true, true, true,
//    false, false, false, false, false, false, false, false, false, false
//  ]
//]
//for (let i in actualParam) Test.assertEquals(ascending(actualParam[i]), expected[i])

