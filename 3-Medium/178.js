

//title: When Will You Save a Million?

//tags: algebra,loops,math

//url: https://edabit.com/challenge/48wAmspFNEvyDiSTi

//Description:
//You landed your dream job. They pay in geometric progression (see resources). In your first month of work, you will get your first paycheck firstMonth. For every month after, your paycheck will be multiplier times bigger than the previous paycheck.
//Create a function that takes the firstMonth's paycheck and the multiplier and returns the number of months it took for you to save up more than one million. The problem assumes you save 100% of every paycheck.
//Examples
//millionInMonth(10, 2) ➞ 17
//
//millionInMonth(100, 1.01) ➞ 464
//
//millionInMonth(50, 100) ➞ 4
//// Month 1 = 50 (paycheck 50)
//// Month 2 = 5050 (paycheck 5,000 + 50 already saved)
//// Month 3 = 505050 (paycheck 500,000 + 5,050 already saved)
//// Month 4 = 50505050 (paycheck 50,000,000 + 505,050 already saved)
//Notes
//Don't forget to return the result in the number of months.
//Return when your savings are greater than 1,000,000.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(millionInMonth(10,2), 17)
//Test.assertEquals(millionInMonth(5,2), 18)
//Test.assertEquals(millionInMonth(2,5), 10)
//Test.assertEquals(millionInMonth(20,4), 9)
//Test.assertEquals(millionInMonth(50,100), 4)
//Test.assertEquals(millionInMonth(1,1.01), 926)
//Test.assertEquals(millionInMonth(15,2), 17)
//Test.assertEquals(millionInMonth(20,2), 16)
//Test.assertEquals(millionInMonth(100,1.1), 73)
//Test.assertEquals(millionInMonth(100,1.01), 464)
//Test.assertEquals(millionInMonth(666,6), 5)
//Test.assertEquals(millionInMonth(11,11), 6)
//Test.assertEquals(millionInMonth(1,2), 20)
//Test.assertEquals(millionInMonth(2,2), 19)
//Test.assertEquals(millionInMonth(3,2), 19)
//Test.assertEquals(millionInMonth(4,2), 18)
//Test.assertEquals(millionInMonth(5,2), 18)
////  Author : Kriss M

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Recursion: Right Shift by Division

//tags: bit_operations,numbers,recursion

//url: https://edabit.com/challenge/CtxRSuGhry3XK7wjh

//Description:
//The right shift operation is similar to floor division by powers of two, thus, the process is repetitive and can be done recursively.
//Sample calculation using the right shift operator ( >> ):
//80 >> 3 = floor(80/2^3) = floor(80/8) = 10
//-24 >> 2 = floor(-24/2^2) = floor(-24/4) = -6
//-5 >> 1 = floor(-5/2^1) = floor(-5/2) = -3
//Write a function that mimics (without the use of >>) the right shift operator and returns the result from the two given integers.
//Examples
//shiftToRight(80, 3) ➞ 10
//
//shiftToRight(-24, 2) ➞ -6
//
//shiftToRight(-5, 1) ➞ -3
//
//shiftToRight(4666, 6) ➞ 72
//
//shiftToRight(3777, 6) ➞ 59
//
//shiftToRight(-512, 10) ➞ -1
//Notes
//There will be no negative values for the second parameter y.
//This challenge is more like recreating of the right shift operation, thus, the use of the operator directly is prohibited.
//You are expected to solve this challenge via recursion.
//A non-recursive version of this challenge can be found in here.
//If you think recursion if fun, here is a collection of such challenges.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//const recurCheck = f => (`${f}`.match(RegExp(`${f.name}`,'gm'))||[]).length > +(/function/.test(f))
//const opCheck = f => !`${f}`.match(RegExp('>>', 'gm'))
//​
//Test.assertNotEquals(recurCheck(shiftToRight), false, "Recursion is required!")
//Test.assertNotEquals(opCheck(shiftToRight), false,
//    "The use of right shift operator (>>) is prohibited!")
//​
//let [numVector, resVector] = [
//  [[80, 3], [-24, 2], [-5, 1], [38, 0], [192, 4], [4666, 6], [3777, 6], [1024, 5], [-512, 10]],
//  [10, -6, -3, 38, 12, 72, 59, 32, -1]
//]
//for (let i in numVector) Test.assertEquals(shiftToRight(...numVector[i]), resVector[i])

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Sort By Index of Character

//tags: arrays,sorting

//url: https://edabit.com/challenge/nxH5e4p2TR8sAEAc7

//Description:
//Write a function that sorts an array of characters alphabetically in ascending order (a-z) by the character at the n-th character.
//Examples
//sortByCharacter(["az16", "by35", "cx24"], 2) ➞ ["cx24", "by35", "az16"]
//// By 2nd character: ["x", "y", "z"] is in alphabetical order.
//
//sortByCharacter(["mayor", "apple", "petal"], 5) ➞ ["apple", "petal", "mayor"]
//// By 5th character: ["e", "l", "r"] is in alphabetical order.
//
//sortByCharacter(["mate", "team", "bade"], 3) ➞ ["team", "bade", "mate"]
//Notes
//All inputs will be of same length.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(sortByCharacter(['az16', 'by35', 'cx24'], 1), ['az16', 'by35', 'cx24'])
//Test.assertSimilar(sortByCharacter(['az16', 'by35', 'cx24'], 2), ['cx24', 'by35', 'az16'])
//Test.assertSimilar(sortByCharacter(['az16', 'by35', 'cx24'], 3), ['az16', 'cx24', 'by35'])
//Test.assertSimilar(sortByCharacter(['az16', 'by35', 'cx24'], 4), ['cx24', 'by35', 'az16'])
//Test.assertSimilar(sortByCharacter(['apple', 'mayor', 'bendy', 'petal'], 5), ['apple', 'petal', 'mayor', 'bendy'])
//Test.assertSimilar(sortByCharacter(['team', 'mate', 'bade'], 3), ['team', 'bade', 'mate'])

