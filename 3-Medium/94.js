

//title: Change Every Letter to the Next Letter

//tags: cryptography,formatting,strings

//url: https://edabit.com/challenge/ZvjZEMBB2hgvZMTkv

//Description:
//Write a function that changes every letter to the next letter:
//"a" becomes "b"
//"b" becomes "c"
//"d" becomes "e"
//and so on ...
//Examples
//move("hello") ➞ "ifmmp"
//
//move("bye") ➞ "czf"
//
//move("welcome") ➞ "xfmdpnf"
//Notes
//There will be no z's in the tests.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(move("hello"), "ifmmp")
//Test.assertEquals(move("lol"), "mpm")
//Test.assertEquals(move("bye"), "czf")

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Check if a String is a Mathematical Expression

//tags: regex,strings,validation

//url: https://edabit.com/challenge/YREKdhk9gK5HByM7r

//Description:
//Create a function that takes an input (e.g. "5 + 4") and returns true if it's a mathematical expression or false if not.
//Examples
//mathExpr("4 + 5") ➞ true
//
//mathExpr("4*6") ➞ true
//
//mathExpr("4*no") ➞ false
//Notes
//Should only work with the following operations: +, -, *, /, %
//You don't need to test for floats.
//int1 and int2 will only be from 0-9.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(mathExpr("5+4"), true)
//Test.assertEquals(mathExpr("4 * 5"), true)
//Test.assertEquals(mathExpr("3*6"), true)
//Test.assertEquals(mathExpr("4 - 5"), true)
//Test.assertEquals(mathExpr("6 % 7"), true)
//Test.assertEquals(mathExpr("a - b"), false)
//Test.assertEquals(mathExpr("a - 2"), false)
//Test.assertEquals(mathExpr("nope"), false)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Perfect Square Patch

//tags: arrays,language_fundamentals,loops

//url: https://edabit.com/challenge/jrdEvTaFogLcpN2fH

//Description:
//Create a function that takes an integer and outputs an n x n square solely consisting of the integer n.
//Examples
//squarePatch(3) ➞ [
//  [3, 3, 3],
//  [3, 3, 3],
//  [3, 3, 3]
//]
//
//squarePatch(5) ➞ [
//  [5, 5, 5, 5, 5],
//  [5, 5, 5, 5, 5],
//  [5, 5, 5, 5, 5],
//  [5, 5, 5, 5, 5],
//  [5, 5, 5, 5, 5]
//]
//
//squarePatch(1) ➞ [
//  [1]
//]
//
//squarePatch(0) ➞ []
//Notes
//n >= 0.
//If n === 0, return an empty array.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(squarePatch(3), [
//  [3, 3, 3],
//  [3, 3, 3],
//  [3, 3, 3]
//])
//​
//Test.assertSimilar(squarePatch(2), [
//  [2, 2],
//  [2, 2]
//])
//​
//Test.assertSimilar(squarePatch(4), [
//  [4, 4, 4, 4],
//  [4, 4, 4, 4],
//  [4, 4, 4, 4],
//  [4, 4, 4, 4]
//])
//​
//Test.assertSimilar(squarePatch(6), [
//  [6, 6, 6, 6, 6, 6],
//  [6, 6, 6, 6, 6, 6],
//  [6, 6, 6, 6, 6, 6],
//  [6, 6, 6, 6, 6, 6],
//  [6, 6, 6, 6, 6, 6],
//  [6, 6, 6, 6, 6, 6]

