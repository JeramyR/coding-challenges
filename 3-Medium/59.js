

//title: Halve and Halve Again

//tags: math,numbers

//url: https://edabit.com/challenge/iqZkzkWTHrJCFf6ZQ

//Description:
//Given two integers a and b, return how many times a can be halved while still being greater than b.
//Examples
//halveCount(1324, 98) ➞ 3
//// (1324 -> 662 -> 331 -> 165.5)
//
//halveCount(624, 8) ➞ 6
//// (624 -> 312 -> 156 -> 78 -> 39 -> 19.5 -> 9.75)
//
//halveCount(1000, 3) ➞ 8
//// (1000 -> 500 -> 250 -> 125 -> 62.5 -> 31.25 -> 15.625 -> 7.8125 -> 3.90625)
//Notes
//Integer a will always be able to be halved at least once in every test case.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(halveCount(1891, 4), 8)
//Test.assertEquals(halveCount(1756, 14), 6)
//Test.assertEquals(halveCount(7764, 2), 11)
//Test.assertEquals(halveCount(1118, 47), 4)
//Test.assertEquals(halveCount(161, 79), 1)
//Test.assertEquals(halveCount(8573, 35), 7)
//Test.assertEquals(halveCount(4123, 1), 12)
//Test.assertEquals(halveCount(1348, 60), 4)
//Test.assertEquals(halveCount(7549, 31), 7)
//Test.assertEquals(halveCount(4469, 5), 9)
//Test.assertEquals(halveCount(1123, 98), 3)
//Test.assertEquals(halveCount(8197, 85), 6)
//Test.assertEquals(halveCount(1199, 56), 4)
//Test.assertEquals(halveCount(8845, 4), 11)
//Test.assertEquals(halveCount(606, 67), 3)
//Test.assertEquals(halveCount(3375, 6), 9)
//Test.assertEquals(halveCount(7085, 10), 9)
//Test.assertEquals(halveCount(299, 5), 5)
//Test.assertEquals(halveCount(1208, 82), 3)
//Test.assertEquals(halveCount(3635, 73), 5)
//Test.assertEquals(halveCount(2382, 3), 9)
//Test.assertEquals(halveCount(320, 80), 1)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: RegEx XVIII : Quantifiers - Control greed quantifiers with ?

//tags: regex

//url: https://edabit.com/challenge/BdJWELgsSr5nktqAG

//Description:
//Quantifiers indicate numbers of characters or expressions to match. By default quantifiers like * and + are "greedy", meaning that they try to match as much of the string as possible. The ? character after the quantifier makes the quantifier "non-greedy": meaning that it will stop as soon as it finds a match.
//"some <foo> <bar> new </bar> </foo> thing".match(/<.*>/) ➞ "<foo> <bar> new </bar> </foo>"
//"some <foo> <bar> new </bar> </foo> thing".match(/<.*?>/) ➞ "<foo>"
//Find all HTML comments in the text. Use the ? in your expression.
//let str = `... <!-- My -- comment test --> ..  <!----> .. `;
//
//str.match(regexp) ➞ "<!-- My -- comment test -->", "<!---->"
//Notes
//Check the Resources if you get stuck.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//let str = "... <!-- My -- comment test --> ..  <!----> .. ";
//​
//const validate = (REGEXP) => {
//   if(!/\?/.test(String(REGEXP))) return () => "invalid" 
//   return function testReg(str) {
//    return str.match(REGEXP);
//   }
//}
//​
//const testExp = validate(REGEXP)
//​
//Test.assertNotEquals(testExp(str), "invalid", "You are require to use the character ? in set your expression.")
//Test.assertSimilar(testExp(str), ['<!-- My -- comment test -->', '<!---->'])
//​
//​
//// credits to https://javascript.info/regexp-greedy-and-lazy

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Length of Worm

//tags: strings

//url: https://edabit.com/challenge/Qt2F2qW9ZMMMqrrNT

//Description:
//Given a string worm create a function that takes the length of the worm and converts it into millimeters. Each - represents one centimeter.
//Examples
//wormLength("----------") ➞ "100 mm."
//
//wormLength("") ➞ "invalid"
//
//wormLength("---_-___---_") ➞ "invalid"
//Notes
//Return "invalid" if an empty string is given or if the string has characters other than -.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(wormLength("----------"), "100 mm.")
//Test.assertEquals(wormLength(""), "invalid")
//Test.assertEquals(wormLength("---_-___---_"), "invalid")
//Test.assertEquals(wormLength("------"), "60 mm.")
//Test.assertEquals(wormLength("iwheguawhpvpaiehpiuwwega"), "invalid")
//Test.assertEquals(wormLength("QWERTYUIOPASDFGHJKL"), "invalid")
//Test.assertEquals(wormLength("------------"), "120 mm.")

