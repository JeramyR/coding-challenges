

//title: Sum of Even Pairs in Array

//tags: arrays,higher_order_functions,math

//url: https://edabit.com/challenge/7fLxcoScQJBhMFvKK

//Description:
//Given an array with an even amount of numbers, return true if the sum of two numbers in the array is even and false if the sum of two numbers in the array is odd.
//To illustrate:
//11, 15, 6, 8, 9, 10
//11 + 15 = 26 = true
//15 + 6 = 21 = false
//6 + 8 = 14 = true
//8+ 9 = 17 = false
//9 + 10 = 19 = false
//Therefore, solution = [true, false, true, false, false]
//Examples
//oddSum([11, 15, 6, 8, 9, 10]) ➞ [true, false, true, false, false]
//
//oddSum([12, 21, 5, 9, 65, 32]) ➞ [false, true, true, true, false]
//
//oddSum([1, 2, 3, 4, 5, 6]) ➞ [false, false, false, false, false]
//Notes
//Remember that the length of all the arrays will be an even number, so it is not necessary to measure lengths.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(oddSum([11, 15, 6, 8, 9, 10]), [true, false, true, false, false])
//Test.assertSimilar(oddSum([12,21,5,9,65,32]),[false, true, true, true, false])
//Test.assertSimilar(oddSum([12,21,5,9,65,32]),[false, true, true, true, false])
//Test.assertSimilar(oddSum([1,2,3,4,5,6]),[false, false, false, false, false])
//Test.assertSimilar(oddSum([4,5,6,7,9,45,12,32,65,49,45,840]),[false, false, false, true, true, false, true, false, true, true, false])
//Test.assertSimilar(oddSum([88,45,654,123]),[false, false, false])
//Test.assertSimilar(oddSum([98,4,12,565,798,465,13,1,365,14,89,565]),[true, true, false, false, false, true, true, true, false, false, true])
//​
//// Author : Juan esteban

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Convert Year to Century

//tags: algorithms,dates,math

//url: https://edabit.com/challenge/H3fKTSK4dgwXRbfTP

//Description:
//Write a function that takes a year and returns its corresponding century.
//Examples
//centuryFromYear(2005) ➞ 21
//
//centuryFromYear(1950) ➞ 20
//
//centuryFromYear(1900) ➞ 19
//Notes
//For guidance on the year boundaries for each century:
//The 19th century are the years from 1801 to 1900.
//The 20th century are the years from 1901 to 2000.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(centuryFromYear(2020), 21)
//Test.assertEquals(centuryFromYear(200), 2)
//Test.assertEquals(centuryFromYear(2005), 21)
//Test.assertEquals(centuryFromYear(1700), 17)
//Test.assertEquals(centuryFromYear(1705), 18)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Buggy Uppercase Counting

//tags: arrays,bugs,language_fundamentals

//url: https://edabit.com/challenge/HFBYPP8gSRn2n9qrQ

//Description:
//In the Code tab is a function which is meant to return how many uppercase letters there are in a list of various words. Fix the list comprehension so that the code functions normally!
//Examples
//countUppercase(["SOLO", "hello", "Tea", "wHat"]) ➞ 6
//
//countUppercase(["little", "lower", "down"]) ➞ 0
//
//counUppercase(["EDAbit", "Educate", "Coding"]) ➞ 5
//Notes
//Check the Resources for some array methods that might be helpful.
//This is originally a loose translation of a Python problem. However, the Pythonic List Comprehension syntax was never really adopted in JavaScript, so I elected to make our Uppercase counter broken in a few other ways.
//A lot of people (including me!) have rewritten the function entirely. I'm gonna make an executive decision and say that's fine here (even though complete rewrites are generally not a good idea!).

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(countUppercase(["SOLO", "hello", "Tea", "wHat"]), 6)
//Test.assertEquals(countUppercase(["little", "lower", "down"]), 0)
//Test.assertEquals(countUppercase(["EDAbit", "Educate", "Coding"]), 5)

