

//title: Fix Basic Calculator

//tags: bugs,functional_programming,language_fundamentals,numbers

//url: https://edabit.com/challenge/XyXCXHu7uZRJRveg4

//Description:
//Mubashir created a function that takes two numbers a and b and an operator o. His function should return the result of the corresponding mathematical function on both numbers. If the operator is not one of the specified characters +, -, /, *, or if there is a division by zero, the function should return null. Help him by fixing the code in the code tab to pass this challenge.
//Look at the examples below to get an idea of what the function should do:
//Examples
//basicCalculator(2, '+',  4) ➞ 6
//
//basicCalculator(6, '-', 5) ➞ 1
//
//basicCalculator(12, '/', 3) ➞ 4
//
//basicCalculator(3, '*', 4) ➞ 12
//
//basicCalculator(1, '/', 0) ➞ null
//// Division by zero is not possible
//
//basicCalculator(1, 'x', 0) ➞ null
//// 'x' is not an operator
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(basicCalculator(2, '+', 4), 6)
//Test.assertEquals(basicCalculator(12, '-', 6), 6)
//Test.assertEquals(basicCalculator(18, '/', 2), 9)
//Test.assertEquals(basicCalculator(6, '*', 4), 24)
//Test.assertEquals(basicCalculator(2, '/', 0), null)
//Test.assertEquals(basicCalculator(2, 'x', 4), null)
//Test.assertEquals(basicCalculator(2, 'o', 4), null)
//Test.assertEquals(basicCalculator(12, '-', 2), 10)
//Test.assertEquals(basicCalculator(17, '*', 2), 34)
//// Mubashir

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Sum of Two Digit Numbers

//tags: algebra,logic,math,numbers

//url: https://edabit.com/challenge/M5RTAawPtRSByE3HT

//Description:
//For this challenge, you are supposed to find the sum of the digits of a two-digit number. Sounds easy, right? But for this challenge, I expect you to find the sum of the digits mathematically.
//Sure, you can convert the number into a string and then manipulate it so it returns the sum of the digits, but the point of this challenge is to see if you know how to return the sum of the digits of a two-digit number mathematically.
//Examples
//twoDigitSum(45) ➞ 9
//
//twoDigitSum(38) ➞ 11
//
//twoDigitSum(67) ➞ 13
//Notes
//%

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(twoDigitSum(45), 9)
//Test.assertEquals(twoDigitSum(65), 11)
//Test.assertEquals(twoDigitSum(85), 13)
//Test.assertEquals(twoDigitSum(52), 7)
//​
//Test.assertEquals(twoDigitSum(15), 6)
//Test.assertEquals(twoDigitSum(48), 12)
//Test.assertEquals(twoDigitSum(33), 6)
//Test.assertEquals(twoDigitSum(29), 11)
//​
//Test.assertEquals(twoDigitSum(81), 9)
//Test.assertEquals(twoDigitSum(10), 1)
//Test.assertEquals(twoDigitSum(40), 4)
//Test.assertEquals(twoDigitSum(66), 12)
//​
//Test.assertEquals(twoDigitSum(19), 10)
//Test.assertEquals(twoDigitSum(38), 11)
//Test.assertEquals(twoDigitSum(67), 13)
//Test.assertEquals(twoDigitSum(96), 15)
//​
//// comecheckoutmycode

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: N Tables + 1

//tags: algorithms,loops,math,numbers

//url: https://edabit.com/challenge/F3Jdoa5YBSboP4ucb

//Description:
//Create a function that takes a number n and returns the first 10 multiples of n with 1 added to it, separated by commas.
//Examples
//nTablesPlusOne(7) ➞ "8,15,22,29,36,43,50,57,64,71"
//
//nTablesPlusOne(1) ➞ "2,3,4,5,6,7,8,9,10,11"
//
//nTablesPlusOne(3) ➞ "4,7,10,13,16,19,22,25,28,31"
//Notes
//There is no comma after the last number.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(nTablesPlusOne(1), "2,3,4,5,6,7,8,9,10,11")
//Test.assertEquals(nTablesPlusOne(7), "8,15,22,29,36,43,50,57,64,71")
//Test.assertEquals(nTablesPlusOne(134), "135,269,403,537,671,805,939,1073,1207,1341")

