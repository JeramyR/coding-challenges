

//title: Burglary Series (17): Who is the Winner?

//tags: arrays,loops,objects

//url: https://edabit.com/challenge/Zou4ggX2D9w39wJrG

//Description:
//The fight between you and your spouse is over. Based on your perception of how the fight went, determine who won.
//Given an object with three rounds, with nested objects as your points per round, determine the winner by counting who won the most rounds. The winner of the round is whoever scored the most points in that round. Draws are possible, both in rounds as in the final result.
//If you won more rounds than your spouse, return "ME!"
//If your spouse won more rounds, return "SPOUSE!"
//If you are tied, return "NOBODY!"
//Examples
//determineWinnerOfFight({
//  round1: {
//    me: 10,
//    spouse: 5,
//  },
//  round2: {
//    me: 5,
//    spouse: 20,
//  },
//  round3: {
//    me: 10,
//    spouse: 10,
//  },
//}) ➞ "NOBODY!"
//
//
//determineWinnerOfFight({
//  round1: {
//    me: 40,
//    spouse: 5,
//  },
//  round2: {
//    me: 9,
//    spouse: 10,
//  },
//  round3: {
//    me: 9,
//    spouse: 10,
//  },
//}) ➞ "SPOUSE!"
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//const obj = {
//    round1: {
//      me: 10,
//      spouse: 5,
//    },
//    round2: {
//      me: 9,
//      spouse: 9,
//    },
//    round3: {
//      me: 20,
//      spouse: 20,
//    },
//}
//​
//const obj2 = {
//    round1: {
//      me: 10,
//      spouse: 5,
//    },
//    round2: {
//      me: 9,
//      spouse: 14,
//    },
//    round3: {

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Complete the Square (Matrix)

//tags: arrays,language_fundamentals,logic

//url: https://edabit.com/challenge/RcDBnBJwZfg8oDiB4

//Description:
//Sadly, the mathematical world is biased in favor of square matrices. As such, this challenge will help rectangular matrices by making them square.
//For example, for the matrix:
//[
//  [1, 2],
//  [3, 4],
//  [5, 6]
//]
//This can be done by padding it with a column of zeroes on the right to get:
//[
//  [1, 2, 0],
//  [3, 4, 0],
//  [5, 6, 0]
//]
//While for the matrix:
//[
//  [1, 2, 3, 4],
//  [5, 6, 7, 8]
//]
//One can pad it with two rows of zeros at the bottom to get:
//[
//  [1, 2, 3, 4],
//  [5, 6, 7, 8],
//  [0, 0, 0, 0],
//  [0, 0, 0, 0]
//]
//Write a function that pads a rectangular matrix with zeros on the right or at the bottom to make it square.
//Examples
//completeSquare([
//  [2, 5]
//]) ➞ [
//  [2, 5],
//  [0, 0]
//]
//
//completeSquare([
//  [2, 5],
//  [1, 7]
//]) ➞ [
//  [2, 5],
//  [1, 7]
//]
//
//completeSquare([
//  [1, 2],
//  [3, 4],
//  [5, 6]
// ]) ➞ [
//  [1, 2, 0],
//  [3, 4, 0],
//  [5, 6, 0]
//]
//Notes
//Matrices should be padded on the right or at the bottom, but not both simultaneously (i.e. the size of the biggest direction shouldn't change).
//If the input is already a square matrix, just return that matrix.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(completeSquare(
//[[2, 5]]),
//[[2, 5],
// [0, 0]])
//​
//Test.assertSimilar(completeSquare(
//[[2, 5],
// [1, 7]]),
//[[2, 5],
// [1, 7]])
// 
//Test.assertSimilar(completeSquare(
//[[1, 2],
// [3, 4],
// [5, 6]]),
//[[1, 2, 0],
// [3, 4, 0],
// [5, 6, 0]])
// 
//Test.assertSimilar(completeSquare(
//[[1, 2, 3, 4],
// [5, 6, 7, 8]]),
//[[1, 2, 3, 4],
// [5, 6, 7, 8],
// [0, 0, 0, 0],

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Decimal and Binary Palindromes

//tags: numbers,strings

//url: https://edabit.com/challenge/P5aEB9rvFibg4rRBg

//Description:
//A number/string is a palindrome if the digits/characters are the same when read both forward and backward. Examples include "racecar" and 12321. Given a positive number n, check if n or the binary representation of n is palindromic. Return the following:
//"Decimal only." if only n is a palindrome.
//"Binary only." if only the binary representation of n is a palindrome.
//"Decimal and binary." if both are palindromes.
//"Neither!" if neither are palindromes.
//Examples
//palindromeType(1306031) ➞ "Decimal only."
//// decimal = 1306031
//// binary  = "100111110110110101111"
//
//palindromeType(427787) ➞ "Binary only."
//// decimal = 427787
//// binary  = "1101000011100001011"
//
//palindromeType(313) ➞ "Decimal and binary."
//// decimal = 313
//// binary  = 100111001
//
//palindromeType(934) ➞ "Neither!"
//// decimal = 934
//// binary  = "1110100110"
//Notes
//Check the Resources tab for ways to convert to binary.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(palindromeType(1934391), "Decimal and binary.")
//Test.assertEquals(palindromeType(9994521), "Binary only.")
//Test.assertEquals(palindromeType(5841485), "Decimal and binary.")
//Test.assertEquals(palindromeType(8337738), "Neither!")
//Test.assertEquals(palindromeType(7447), "Decimal and binary.")
//Test.assertEquals(palindromeType(18985), "Binary only.")
//Test.assertEquals(palindromeType(7), "Decimal and binary.")
//Test.assertEquals(palindromeType(1306031), "Decimal only.")
//Test.assertEquals(palindromeType(1), "Decimal and binary.")
//Test.assertEquals(palindromeType(1903127), "Binary only.")
//Test.assertEquals(palindromeType(4), "Decimal only.")
//Test.assertEquals(palindromeType(48084), "Decimal only.")
//Test.assertEquals(palindromeType(427787), "Binary only.")
//Test.assertEquals(palindromeType(456), "Neither!")
//Test.assertEquals(palindromeType(313), "Decimal and binary.")
//Test.assertEquals(palindromeType(3664663), "Decimal only.")
//Test.assertEquals(palindromeType(585585), "Decimal and binary.")
//Test.assertEquals(palindromeType(14441), "Decimal only.")
//Test.assertEquals(palindromeType(8494948), "Decimal only.")
//Test.assertEquals(palindromeType(932), "Neither!")
//Test.assertEquals(palindromeType(7115931), "Binary only.")
//Test.assertEquals(palindromeType(101), "Decimal only.")
//Test.assertEquals(palindromeType(6286333), "Binary only.")

