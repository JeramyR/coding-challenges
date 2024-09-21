

//title: Casting Out Nines

//tags: language_fundamentals,logic,math,numbers

//url: https://edabit.com/challenge/srfpEfnmYdWwMcqv4

//Description:
//This is a method commonly taught in primary schools, used to verify the correctness of an operation; usually (as in this exercise) the multiplication.
//Every number involved in the multiplication is replaced by its digital root (reiterated sum of its digits until a single-digit number is obtained). After this, the digital roots of factors are multiplied, and again this result is reduced to the digital root. If the digit obtained is different from the result's digital root the operation is surely wrong, if it is equal the operation can be correct with a possibility out of nine to be a false positive.
//A false positive occurs when the initial two numbers, when multiplied together, do not equal the result, but the digital roots obtained using the process described in this paragraph are equal to each other.
//Given two factors and a result, implement a function that returns a string in the format:
//"x, x, x, x = Result!", with x being the digital roots (a, b, r, and a*b in the order).
//Result! being "Correct!" if the last two digits are the same and the result is correct.
//"False positive!" if the last two digits are the same but the result is wrong.
//"Wrong!" if the last two digits are different.
//Examples
//// D.R. is for Digital Root
//
//castOutNines(467, 78, 36426) ➞ "8,6,3,3 = Correct!"
//// D.R. 467 = 4 + 6 + 7 = 17 = 1 + 7 = 8
//// D.R. 78 = 7 + 8 = 15 = 1 + 5 = 6
//// D.R. 36426 = 3 + 6 + 4 + 2 + 6 = 21 = 2 + 1 = 3
//// D.R. 8 * 6 = D.R. 48 = 4 + 8 = 12 = 1 + 2 = 3
//// Last two digits are the same and result is correct: Correct! 
//
//castOutNines(467, 78, 36425) ➞ "8,6,2,3 = Wrong!"
//// D.R. 467 = 8
//// D.R. 78 = 6
//// D.R. 36425 = 3 + 6 + 4 + 2 + 5 = 20 = 2 + 0 = 2
//// D.R. 8 * 6 = 3
//// Last two digits are different and result is wrong: Wrong!
//
//castOutNines(467, 78, 129) ➞ "8,6,3,3 = False positive!"
//// D.R. 467 = 8
//// D.R. 78 = 6
//// D.R. 129 = 1 + 2 + 9 = 12 = 1 + 2 = 3
//// D.R. 8 * 6 = 3
//// Last two digits are equals but result is wrong: False positive!
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(castOutNines(467, 78, 36426), "8,6,3,3 = Correct!", "Example #1")
//Test.assertEquals(castOutNines(467, 78, 36425), "8,6,2,3 = Wrong!", "Example #2")
//Test.assertEquals(castOutNines(467, 78, 129), "8,6,3,3 = False positive!", "Example #3")
//Test.assertEquals(castOutNines(9, 9, 81), "9,9,9,9 = Correct!")
//Test.assertEquals(castOutNines(9, 9, 666), "9,9,9,9 = False positive!")
//Test.assertEquals(castOutNines(9, 9, 51), "9,9,6,9 = Wrong!")
//Test.assertEquals(castOutNines(59714, 24339, 1453379046), "8,3,6,6 = Correct!")
//Test.assertEquals(castOutNines(59714, 24339, 153379046), "8,3,2,6 = Wrong!")
//Test.assertEquals(castOutNines(1902, 1964,  3735519), "3,2,6,6 = False positive!")
//Test.assertEquals(castOutNines(12986, 4320, 56099520), "8,9,9,9 = Correct!")
//Test.assertEquals(castOutNines(12986, 4320, 56099529), "8,9,9,9 = False positive!")
//Test.assertEquals(castOutNines(12986, 4320, 56099521), "8,9,1,9 = Wrong!")
//Test.assertEquals(castOutNines(123, 456, 789), "6,6,6,9 = Wrong!")
//Test.assertEquals(castOutNines(123, 456, 999), "6,6,9,9 = False positive!")

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Length of Number

//tags: numbers

//url: https://edabit.com/challenge/5DwLy7WxYrTAAEJad

//Description:
//Create a function that takes a number num and returns its length.
//Examples
//numberLength(10) ➞ 2
//
//numberLength(5000) ➞ 4
//
//numberLength(0) ➞ 1
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(numberLength(10), 2)
//Test.assertEquals(numberLength(5000), 4)
//Test.assertEquals(numberLength(0), 1)
//Test.assertEquals(numberLength(4039182), 7)
//Test.assertEquals(numberLength(9999999999999999), 16)
//Test.assertEquals(numberLength(1), 1)
//Test.assertEquals(numberLength(777777777777777777777777777777), 30)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Straight Digital Numbers

//tags: math,numbers,validation

//url: https://edabit.com/challenge/WMorR7e2z3AkoesJC

//Description:
//In this challenge, you have to establish if the digits of a given number form a straight arithmetic sequence (either increasing or decreasing). A straight sequence has an equal step between every pair of digits.
//Given an integer n, implement a function that returns:
//"Not Straight" if n is lower than 100 or if its digits are not an arithmetic sequence.
//"Trivial Straight" if n has a single repeating digit.
//An integer being the step of the sequence if the n digits are a straight arithmetic sequence.
//Examples
//straightDigital(123) ➞ 1
//// 2 - 1 = 1 | 3 - 2 = 1
//
//straightDigital(753) ➞ -2
//// 5 - 7 = -2 | 3 - 5 = -2
//
//straightDigital(666) ➞ "Trivial Straight"
//// There's a single repeating digit (step = 0).
//
//straightDigital(124) ➞ "Not Straight"
//// 2 - 1 = 1 | 4 - 2 = 2
//// A valid sequence has always the same step between its digits.
//
//straightDigital(99) ➞ "Not Straight"
//// The number is lower than 100.
//Notes
//The step of the sequence can be either positive or negative (see example #2).
//Trivia: there are infinite straight digital numbers, but only 96 of them are made of at least two different digits.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(straightDigital(123), 1, "Example #1")
//Test.assertEquals(straightDigital(753), -2, "Example #2")
//Test.assertEquals(straightDigital(666), "Trivial Straight", "Example #3")
//Test.assertEquals(straightDigital(124), "Not Straight", "Example #4")
//Test.assertEquals(straightDigital(99), "Not Straight", "Example #5")
//Test.assertEquals(straightDigital(13579), 2)
//Test.assertEquals(straightDigital(111111), "Trivial Straight")
//Test.assertEquals(straightDigital(9630), -3)
//Test.assertEquals(straightDigital(-123456789), "Not Straight")
//Test.assertEquals(straightDigital(951), -4)
//Test.assertEquals(straightDigital(24642), "Not Straight")
//Test.assertEquals(straightDigital(147), 3)
//Test.assertEquals(straightDigital(13579), 2)
//Test.assertEquals(straightDigital(9876543210), -1)
//Test.assertEquals(straightDigital(1313), "Not Straight")

