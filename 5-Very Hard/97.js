

//title: Diamond Sum

//tags: arrays,math,numbers,objects

//url: https://edabit.com/challenge/RshdnFm4jcRWZrQAC

//Description:
//Given an nxn grid of consecutive numbers, return the grid's Diamond Sum. The diamond sum is defined as the sum of the numbers making up the diagonals between adjacent sides.
//Examples
//diamondSum(1) ➞ 1
//
//[1]
//diamondSum(3) ➞ 20
//
//[
//  [1, _, 3],
//  [_, 5, _],
//  [7, _, 9]
//]
//
//// The numbers behind the underscores make up the Diamond Sum.
//// 2 + 4 + 6 + 8 = 20
//diamondSum(5) ➞ 104
//
//[
//  [1, 2, _, 4, 5],
//  [6, _, 8, _, 10],
//  [_, 12, 13, 14, _],
//  [16, _, 18, _, 20],
//  [21, 22, _, 24, 25]
//]
//
//// 3 + 7 + 9 + 11 + 15 + 17 + 19 + 23 = 104
//Notes
//n is always an odd number.
//Bonus points for solving it mathematically!

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(diamondSum(1), 1)
//Test.assertEquals(diamondSum(3), 20)
//Test.assertEquals(diamondSum(5), 104)
//Test.assertEquals(diamondSum(7), 300)
//Test.assertEquals(diamondSum(9), 656)
//Test.assertEquals(diamondSum(11), 1220)
//Test.assertEquals(diamondSum(13), 2040)
//Test.assertEquals(diamondSum(15), 3164)
//Test.assertEquals(diamondSum(17), 4640)
//Test.assertEquals(diamondSum(19), 6516)
//Test.assertEquals(diamondSum(21), 8840)
//Test.assertEquals(diamondSum(23), 11660)
//Test.assertEquals(diamondSum(25), 15024)
//Test.assertEquals(diamondSum(27), 18980)
//Test.assertEquals(diamondSum(29), 23576)
//Test.assertEquals(diamondSum(31), 28860)
//Test.assertEquals(diamondSum(33), 34880)
//Test.assertEquals(diamondSum(35), 41684)
//Test.assertEquals(diamondSum(37), 49320)
//Test.assertEquals(diamondSum(39), 57836)
//Test.assertEquals(diamondSum(41), 67280)
//Test.assertEquals(diamondSum(43), 77700)
//Test.assertEquals(diamondSum(45), 89144)
//Test.assertEquals(diamondSum(47), 101660)
//Test.assertEquals(diamondSum(49), 115296)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Check if the Formula is Correct

//tags: algebra,math,numbers,validation

//url: https://edabit.com/challenge/uTZ4bLqZ5vHp73K9t

//Description:
//Create a function that takes a string and returns true or false depending on whether or not the formula is correct.
//Examples
//formula("6 * 4 = 24") ➞ true
//
//formula("18 / 17 = 2") ➞ false
//
//formula("") ➞ undefined
//Notes
//You have to figure out what a is.
//Ignore the spaces.
//If the input is an empty string "", return undefined.
//You do not need to dynamically find the value of a (it's a constant and the same accross all tests).

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(formula('6 * 4 = 24'), true)
//Test.assertEquals(formula('120 - 7 = 100'), false)
//Test.assertEquals(formula('16 - 8 = 16 / 2 = 64 / 8'), true)
//Test.assertEquals(formula('a = a'), true)
//Test.assertEquals(formula('a * 7 = 90'), false)
//Test.assertEquals(formula('16 * 10 = 160 = 14 + 120'), false)
//Test.assertEquals(formula('a=4'), true)
//Test.assertEquals(formula(''), undefined)
//Test.assertEquals(formula('1000 / 10 = 100 = 2 * 50'), true)
//Test.assertEquals(formula('18 / 17 = 2'), false)
//Test.assertEquals(formula('(1+2+3+4+5+6+7+8)/a=9'), true)
//Test.assertEquals(formula('2 * 2 * 2 = a * 2 = 8'), true)
//Test.assertEquals(formula('   8/       9 =       5'), false)
//Test.assertEquals(formula('1111           /     101=     11'), true)
//Test.assertEquals(formula('a / a = a - 3'), true)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Less or Equal

//tags: interview,logic,math,numbers

//url: https://edabit.com/challenge/4AY5rGSq6n3had3wY

//Description:
//Mubashir needs your help in a simple task.
//Given an array of integers arr and an integer k, find the lowest positive integer x so that exactly k elements of the given array are less than or equal to x. Return null if the condition does not match.
//See below examples for a better understanding:
//Examples
//lessEqual([3, 7, 6, 1, 10, 3, 20], 4) ➞ 6
//// 1, 3, 3, 6 = 4 elements
//// All elements are less than or equal to 6
//
//lessEqual([3, 7, 6, 1, 10, 3, 20], 2) ➞ null
//// 1, 3 = 2 elements
//// Not possible to return 3 because we have another 3 in the array
//
//lessEqual([3, 7, 5, 1, 10, 3, 20], 4) ➞ 5
//// 1, 3, 3, 5 = 4 elements
//// All elements are less than or equal to 5
//
//lessEqual([10, 15, 20, 25], 0) ➞ 1
//// k = 0
//Notes
//All numbers of the given array and k will be ≥ 0.
//Understanding the description of this challenge is the hardest part.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(lessEqual([3, 7, 6, 1, 10, 3, 20], 4), 6)
//Test.assertEquals(lessEqual([3, 7, 6, 1, 10, 3, 20], 2), null)
//Test.assertEquals(lessEqual([1, 1, 2, 3, 4], 3), 2)
//Test.assertEquals(lessEqual([1, 1, 2, 3, 4], 2), 1)
//Test.assertEquals(lessEqual([1, 1, 2, 3, 4], 1), null)
//Test.assertEquals(lessEqual([10, 15, 20, 25], 0), 1)
//Test.assertEquals(lessEqual([2, 2, 2, 3, 5, 7, 8], 2), null)
//Test.assertEquals(lessEqual([3, 7, 5, 1, 10, 3, 20], 2), null)
//Test.assertEquals(lessEqual([3, 7, 5, 1, 10, 3, 20], 4), 5)
//Test.assertEquals(lessEqual([1], 0), null)
//Test.assertEquals(lessEqual([2], 0), 1)
//Test.assertEquals(lessEqual([1000000000], 1), 1000000000)
//Test.assertEquals(lessEqual([1000000000 , 1000000000 , 1000000000 , 1000000000], 4), 1000000000)
//Test.assertEquals(lessEqual([1, 3, 3, 4, 5], 3), 3)
//Test.assertEquals(lessEqual([1000000000], 1), 1000000000)
//Test.assertEquals(lessEqual([100000000, 100000000], 2), 100000000)
//Test.assertEquals(lessEqual([3, 4, 5, 6, 7], 0), 1)
////Mubashir

