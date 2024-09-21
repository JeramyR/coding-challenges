

//title: RegEx Exercise 4: Insert After Head

//tags: regex

//url: https://edabit.com/challenge/WCTdefNxDmZaYDmbr

//Description:
//Write a regular expression that inserts <h1>Hello</h1> immediately after the <body> tag. The tag may have attributes. You only have to come up with the regular expression. The replace function is already done (see the Tests tab).
//Examples
//const REGEXP = /your regular expression/
//
//let str = "\<html><body style="height: 200px"> ... </body></html>"
//
//str = str.replace(REGEXP, `<h1>Hello</h1>`)
//
//console.log(str) ➞ <html> <body style="height: 200px"><h1>Hello</h1> ... </body> </html>
//Notes
//You can find the solution in the Resources tab.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//let str = '...<body style="...">...'
//​
//const validate = (REGEXP) => {
//   // if(!//.test(String(REGEXP))) return () => "invalid" 
//   return function testReg(str) {
//      return str.replace(REGEXP, `<h1>Hello</h1>`)
//   }
//}
//​
//const testExp = validate(REGEXP)
//​
//// Test.assertNotEquals(testExp(str), "invalid", "Nothing new here")
//Test.assertSimilar(testExp(str), '...<body style="..."><h1>Hello</h1>...')
//​
//// credits to https://javascript.info/regexp-lookahead-lookbehind

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Growing and Shrinking Potions

//tags: higher_order_functions,strings

//url: https://edabit.com/challenge/8L62AipTvCLPQKtFH

//Description:
//There are two types of potions:
//Growing potion: "A"
//Shrinking potion: "B"
//If "A" immediately follows a digit, add 1 to the digit.
//If "B" immediately follows a digit, subtract 1 from the digit.
//Create a function that returns a string according to these rules, removing the potions once they've been consumed.
//Examples
//afterPotion("3A78B51") ➞ "47751"
//// 3 grows to 4, 8 shrinks to 7
//
//afterPotion("9999B") ➞ "9998"
//
//afterPotion("9A123") ➞ "10123"
//
//afterPotion("567") ➞ "567"
//Notes
//Digits that do not have a potion on their immediate right should be left alone.
//A digit will always either be followed by zero or exactly 1 potion.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(afterPotion("567"), "567", "Should work without any potions.")
//Test.assertEquals(afterPotion("3A78B51"), "47751", "Should work with both potions.")
//Test.assertEquals(afterPotion("9999B"), "9998")
//Test.assertEquals(afterPotion("9A123"), "10123")
//Test.assertEquals(afterPotion("1A2A3A4A"), "2345")
//Test.assertEquals(afterPotion("9B8B7B6A"), "8767")

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Checkerboard Generator

//tags: arrays,games,higher_order_functions

//url: https://edabit.com/challenge/TaH2g7iSJBHgqJemi

//Description:
//Create a checker board generator, which takes as inputs n and 2 elements to generate an n x n checkerboard with those two elements as alternating squares.
//Examples
//checkerBoard(2, 7, 6) ➞ [
//  [7, 6],
//  [6, 7]
//]
//
//checkerBoard(3, "A", "B") ➞ [
//  ["A", "B", "A"],
//  ["B", "A", "B"],
//  ["A", "B", "A"]
//]
//
//checkerBoard(4, "c", "d") ➞ [
//  ["c", "d", "c", "d"],
//  ["d", "c", "d", "c"],
//  ["c", "d", "c", "d"],
//  ["d", "c", "d", "c"]
//]
//
//checkerBoard(4, "c", "c") ➞ "invalid"
//Notes
//Both elements can be either strings or integers.
//The first element should be on the upper left corner of the checker board. e.g. "c", not "d" should be element [0][0] for example 3.
//Return "invalid" if both inputs are identical (see example 4).

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(checkerBoard(3, 'A', 'B'), [
//  ['A', 'B', 'A'],
//  ['B', 'A', 'B'],
//  ['A', 'B', 'A']
//])
//​
//Test.assertSimilar(checkerBoard(2, 7, 6), [
//  [7, 6],
//  [6, 7]
//])
//​
//Test.assertSimilar(checkerBoard(3, 1, 0), [
//  [1, 0, 1],
//  [0, 1, 0],
//  [1, 0, 1]
//])
//​
//Test.assertSimilar(checkerBoard(3, 0, 1), [
//  [0, 1, 0],
//  [1, 0, 1],
//  [0, 1, 0]
//])
//​
//Test.assertSimilar(checkerBoard(4, 'c', 'd'), [
//  ['c', 'd', 'c', 'd'],

