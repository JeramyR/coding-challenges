

//title: Lonely Integer

//tags: arrays,functional_programming,numbers

//url: https://edabit.com/challenge/fK8a63ttMnt9CZmhg

//Description:
//You are given an array of integers having both negative and positive values, except for one integer which can be negative or positive. Create a function to find out that integer.
//Examples
//lonelyInteger([1, -1, 2, -2, 3]) ➞ 3
//// 3 has no matching negative appearance.
//
//lonelyInteger([-3, 1, 2, 3, -1, -4, -2]) ➞ -4
//// -4 has no matching positive appearance.
//
//lonelyInteger([-9, -105, -9, -9, -9, -9, 105]) ➞ -9
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(lonelyInteger([1, -1, 2, -2, 3]), 3)
//Test.assertEquals(lonelyInteger([-3, 1, 2, 3, -1, -4, -2]), -4)
//Test.assertEquals(lonelyInteger([1, -1, 2, -2, 3, 3]), 3)
//Test.assertEquals(lonelyInteger([-110, 110, -38, -38, -62, 62, -38, -38, -38]), -38)
//Test.assertEquals(lonelyInteger([-9, -105, -9, -9, -9, -9, 105]), -9)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Swap the Numbers

//tags: bit_operations,control_flow,language_fundamentals

//url: https://edabit.com/challenge/tkcK3M5kaDHozTZPx

//Description:
//Imagine you have three numbers: a, b, and c. c is equal to either a or b, but you don't know which one. Your task is to create a function that returns whatever number c isn't, out of a and b. So, if c is equal to a, return b, and if c is equal to b, return a. Here's what makes this challenge difficult: you cannot use any if statements.
//Examples
//swap(1, 0, 0) ➞ 1
//// a = 1, b = 0, c = b
//// return a
//
//swap(1, 3, 1) ➞ 3
//// a = 1, b = 3, c = a
//// return b
//
//swap(27, 31, 31) ➞ 27
//// a = 27, b = 31, c = b
//// return a
//Notes
//To prevent cheating, you also can't call any functions.
//c will always be equal to either a or b.
//a will never equal b.
//a, b, and c will always be integers.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(swap(1, 0, 0), 1)
//Test.assertEquals(swap(1, 3, 1), 3)
//Test.assertEquals(swap(27, 31, 31), 27)
//Test.assertEquals(swap(1, 2, 2), 1)
//Test.assertEquals(swap(-3, 4, -3), 4)
//Test.assertEquals(swap(-2, 1, 1), -2)
//Test.assertEquals(swap(0, 2, 2), 0)
//Test.assertEquals(swap(9, -9, 9), -9)
//Test.assertEquals(swap(-3, -29, -3), -29)
//Test.assertEquals(swap(-29, -3, -3), -29)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Stand in Line

//tags: arrays,conditions,numbers

//url: https://edabit.com/challenge/ebm9Yo3nxxniskr64

//Description:
//Write a function that takes an array and a number as arguments. Add the number to the end of the array, then remove the first element of the array. The function should then return the updated array.
//Examples
//nextInLine([5, 6, 7, 8, 9], 1) ➞ [6, 7, 8, 9, 1]
//
//nextInLine([7, 6, 3, 23, 17], 10) ➞ [6, 3, 23, 17, 10]
//
//nextInLine([1, 10, 20, 42 ], 6) ➞ [10, 20, 42, 6]
//
//nextInLine([], 6) ➞ "No array has been selected"
//Notes
//For an empty array input, return: "No array has been selected"

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(nextInLine([5,6,7,8,9], 1), [6,7,8,9 ,1])
//Test.assertSimilar(nextInLine([7,6,3,23,17], 10), [6,3,23,17,10])
//Test.assertSimilar(nextInLine([1,10,20,42], 6), [10,20,42,6])
//Test.assertSimilar(nextInLine(NaN,6),  "No array has been selected")
//Test.assertSimilar(nextInLine([0], 1), [1])

