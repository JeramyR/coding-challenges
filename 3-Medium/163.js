

//title: Order by Length First

//tags: conditions,math,sorting,strings

//url: https://edabit.com/challenge/oBFirFPZH7S6vopYE

//Description:
//Graded lexicographic order (grlex order for short) is a way of ordering words that:
//First orders words by length.
//Then orders words of the same size by their dictionary order.
//For example, in grlex order:
//"tray" < "trapped" since "tray" has length 4 while "trapped" has length 7.
//"trap" < "tray" since both have length 4, but "trap" comes before "tray" in the dictionary.
//Given an array of words, return that array in grlex order.
//Examples
//makeGrlex(["small", "big"]) ➞ ["big", "small"]
//
//makeGrlex(["cat", "ran", "for", "the", "rat"]) ➞ ["cat", "for", "ran", "rat", "the"]
//
//makeGrlex(["this", "is", "a", "small", "test"]) ➞ ["a", "is", "test", "this", "small"]
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(makeGrlex(["small", "big"]), ["big", "small"], "order first by size")
//Test.assertSimilar(makeGrlex(["big", "cat", "ran", "for", "the", "fat", "rat"]), ["big", "cat", "fat", "for", "ran", "rat", "the"], "If same size, order alphabetically.")
//Test.assertSimilar(makeGrlex(["this", "is", "a", "small", "test"]), ["a", "is", "test", "this", "small"])
//Test.assertSimilar(makeGrlex(["let", "us", "try", "some", "long", "test", "to", "see", "if", "this", "works", "as", "it", "should"]), ["as", "if", "it", "to", "us", "let", "see", "try", "long", "some", "test", "this", "works", "should"])

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Robot Path 🤖

//tags: algorithms,language_fundamentals,logic,validation

//url: https://edabit.com/challenge/Ye9ZuahZiQLoP9AYJ

//Description:
//Mubashir created a simple robot that is navigated by a series of North, East, South, and West [n, e, s, w] commands. Each command moves the robot one step in the given direction. The robot is designed for only two destinations:
//Destination No. 1: e, n, e, e, n
//Destination No. 2: w, n, w, n, w, w, n
//Create a function that takes an array of commands and returns true if the robot reaches any of the destinations, false otherwise.
//Examples
//robotPath(["s", "e", "e", "n", "n", "e", "n"]) ➞ true
//// Robot will end up at destination no. 1
//
//robotPath(["n", "e", "s", "w", "n", "e", "s", "w", "w", "s", "n", "e"]) ➞ false
//// Robot will be lost somewhere
//
//robotPath(["n", "s", "n", "n", "e", "n", "w", "w", "s", "w", "w", "w", "n"]) ➞ true
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(robotPath(['s', 'e', 'e', 'n', 'n', 'e', 'n']), true)
//Test.assertEquals(robotPath(['n', 's', 'n', 'n', 'e', 'n', 'w', 'w', 's', 'w', 'w', 'w', 'n']), true)
//Test.assertEquals(robotPath(['n', 's', 'n', 'n', 'n', 'e', 'n', 'w', 'n', 'w', 's', 'w', 'w', 'w', 'n']), false)
//Test.assertEquals(robotPath(['n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's', 'e', 'w', 'w']), false)
//Test.assertEquals(robotPath(['n', 'e', 's', 'w', 'n', 'e', 's', 'w', 'w', 's', 'n', 'e']), false)
//​
//// Mubashir

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: RegEx Exercise 3: Find All Numbers

//tags: regex

//url: https://edabit.com/challenge/e5PvcKmnbdNahT9TZ

//Description:
//Write a RegExp that looks for all decimal numbers including integer ones, with the floating point and negative ones.
//Example
//const REGEXP = /your regexp/g
//
//let str = "-1.5 0 2 -123.4."
//
//str.match(REGEXP)  ➞ -1.5, 0, 2, -123.4
//Notes
//The solution is in the Resources tab.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//const str = "-1.5 0 2 -123.4.";
//​
//const validate = (REGEXP) => {
//   // if(!//.test(String(REGEXP))) return () => "invalid" 
//   return function testReg(str) {
//     return str.match(REGEXP)
//   }
//}
//​
//const testExp = validate(REGEXP)
//​
//// Test.assertNotEquals(testExp(str), "invalid", "Nothing new here")
//Test.assertSimilar(testExp(str), ["-1.5", "0", "2", "-123.4"])
//​
//// credits to https://javascript.info/regexp-groups

