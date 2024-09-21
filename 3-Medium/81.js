

//title: Sum of Two Numbers in Array Equal to Given Number

//tags: arrays,loops,numbers,validation

//url: https://edabit.com/challenge/i5pr5wJfQfmugehZm

//Description:
//Create a function that takes an array of numbers arr and a number n. Return true if the sum of any two elements is equal to the given number. Otherwise, return false.
//Examples
//checkSum([10, 12, 4, 7, 9, 11], 16) ➞ true
//
//checkSum([4, 5, 6, 7, 8, 9], 13) ➞ true
//
//checkSum([0, 98, 76, 23], 174) ➞ true
//
//checkSum([0, 9, 7, 23, 19, 18, 17, 66], 39) ➞ false
//
//checkSum([2, 8, 9, 12, 45, 78], 1) ➞ false
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(checkSum([10, 15, 3, 7], 17), true)
//Test.assertEquals(checkSum([4, 5, 6, 7, 8, 9], 13), true)
//Test.assertEquals(checkSum([2, 8, 9, 12, 45, 78], 1), false)
//Test.assertEquals(checkSum([10, 12, 4, 7, 9, 11], 16), true)
//Test.assertEquals(checkSum([0, 98, 76, 23], 174), true)
//Test.assertEquals(checkSum([0, 9, 7, 23, 19, 18, 17, 66], 39), false)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Doubleton Number

//tags: interview,numbers,strings,validation

//url: https://edabit.com/challenge/wSJcHGp3SRKsFAS9K

//Description:
//Mubashir was reading about Doubleton Numbers on Wikipedia.
//A natural number is a "Doubleton Number", if it contains exactly two distinct digits. For example, 23, 35, 100, 12121 are doubleton numbers, and 123 and 114455 are not.
//Create a function which takes a number n and finds the next doubleton number.
//Examples
//doubleton(10) ➞ 12
//// 12 has only two distinct numbers 1 and 2
//
//doubleton(120) ➞ 121
//// 121 has only two distinct numbers 1 and 2
//
//doubleton(1234) ➞ 1311
//// 1311 has only two distinct numbers 1 and 3
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(doubleton(130), 131)
//Test.assertEquals(doubleton(1434), 1441)
//Test.assertEquals(doubleton(20), 21)
//Test.assertEquals(doubleton(5), 10)
//Test.assertEquals(doubleton(131), 133)
//Test.assertEquals(doubleton(1000000), 1000001)
////Mubashir

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: How Many Solutions Does This Quadratic Have?

//tags: algebra,algorithms,math

//url: https://edabit.com/challenge/x2DEtfqm4RhGcziw9

//Description:
//A quadratic equation a x² + b x + c = 0 has either 0, 1, or 2 distinct solutions for real values of x. Given a, b and c, you should return the number of solutions to the equation.
//Examples
//solutions(1, 0, -1) ➞ 2
//// x² - 1 = 0 has two solutions (x = 1 and x = -1).
//
//solutions(1, 0, 0) ➞ 1
//// x² = 0 has one solution (x = 0).
//
//solutions(1, 0, 1) ➞ 0
//// x² + 1 = 0 has no real solutions.
//Notes
//You do not have to calculate the solutions, just return how many there are.
//a will always be non-zero.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(solutions(1, 0, -1), 2)
//Test.assertEquals(solutions(1, 0, 0), 1)
//Test.assertEquals(solutions(1, 0, 1), 0)
//Test.assertEquals(solutions(200, 420, 800), 0)
//Test.assertEquals(solutions(200, 420, -800), 2)
//Test.assertEquals(solutions(1000, 1000, 0), 2)
//Test.assertEquals(solutions(10000, 400, 4), 1)

