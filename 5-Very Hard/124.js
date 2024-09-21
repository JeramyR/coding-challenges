

//title: Recursive Digit

//tags: algorithms,math,numbers,recursion

//url: https://edabit.com/challenge/evbaerriFzL6GBgSo

//Description:
//We define super digit of an integer x using the following rules:
//If x has only 1 digit, then its super digit is x.
//Otherwise, the super digit of x is equal to the super digit of the sum of the digits of x.
//For example, the super digit of x will be calculated as:
//  superDigit(9875)    9+8+7+5 = 29
//  superDigit(29)      2 + 9 = 11
//  superDigit(11)      1 + 1 = 2
//  superDigit(2) = 2
//You are given two numbers n and k. The number p is created by concatenating the string n, k times. Continuing the above example where n = 9875, assume your value k=4. Your initial p = 9875 9875 9875 9875 (spaces added for clarity).
//superDigit(p) = super_digit(9875987598759875)
//  5+7+8+9+5+7+8+9+5+7+8+9+5+7+8+9 = 116
//
//superDigit(p) = super_digit(116)
//  1+1+6 = 8
//
//superDigit(p) = super_digit(8)
//All of the digits of p sum to 116. The digits of 116 sum to 8. 8 is only one digit, so it's the super digit.
//Complete the super_digit() method. It must return the calculated super digit as an integer.
//superDigit has the following parameter(s):
//n: a string representation of an integer.
//k: an integer, the times to concatenate n to make p.
//Examples
//superDigit("148", 3) ➞ 3
//
//superDigit("123", 3) ➞ 9
//
//superDigit("99999999999999999999999999", 104500) ➞ 9
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(superDigit("123", 3), 9)
//Test.assertEquals(superDigit("9875", 4), 8)
//Test.assertEquals(superDigit("148", 3), 3)
//Test.assertEquals(superDigit("111", 10), 3)
//Test.assertEquals(superDigit("543", 100), 3)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Spiral Transposition

//tags: arrays,loops,math,recursion

//url: https://edabit.com/challenge/gdmrXxEej2fPZtF4S

//Description:
//Create a function that takes a two-dimensional array as an argument and returns a one-dimensional array with the values of the original 2d array that are arranged by spiralling through it (starting from the top-left).
//Examples
//spiral([
//  [7, 2],
//  [5, 0]
//])
//
//➞ [7, 2, 0, 5]
//
//spiral([
//  [1, 2, 3],  
//  [4, 5, 6],
//  [7, 8, 9]
//])
//
//➞ [1, 2, 3, 6, 9, 8, 7, 4, 5]
//
//spiral([
//  [1, 1, 1],  
//  [4, 5, 2],
//  [3, 3, 2] 
//])
//
//➞ [1, 1, 1, 2, 2, 3, 3, 4, 5]
//Notes
//If you do not understand the instructions, write the 3x3 array example on a piece of paper and trace the output through it.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(
//  spiral(
//    [
//      [7, 2],
//      [5, 0]
//    ]
//  ),
//  [7, 2, 0, 5],
//  'Should work with a 2x2 array'
//);
//​
//Test.assertSimilar(
//  spiral(
//    [
//      [1, 2, 3],
//      [4, 5, 6],
//      [7, 8, 9]
//    ]
//  ),
//  [1, 2, 3, 6, 9, 8, 7, 4, 5],
//  'Should work with a 3x3 array'
//);
//​
//Test.assertSimilar(
//  spiral(

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Identity Matrix

//tags: arrays

//url: https://edabit.com/challenge/fFY9SYeuTX47yBeZf

//Description:
//An identity matrix is defined as a square matrix with 1s running from the top left of the square to the bottom right. The rest are 0s. The identity matrix has applications ranging from machine learning to the general theory of relativity.
//Create a function that takes an integer n and returns the identity matrix of n x n dimensions, JSON stringified. For this challenge, if the integer is negative, return the mirror image of the identity matrix of n x n dimensions, JSON stringified. It does not matter if the mirror image is left-right or top-bottom.
//Examples
//idMtrx(2) ➞ [
//  [1, 0],
//  [0, 1]
//]
//
//idMtrx(-2) ➞ [
//  [0, 1],
//  [1, 0]
//]
//
//idMtrx(0) ➞ []
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(idMtrx(0), "[]")
//Test.assertEquals(idMtrx(1), "[[1]]")
//Test.assertEquals(idMtrx(2), "[[1,0],[0,1]]")
//Test.assertEquals(idMtrx(3), "[[1,0,0],[0,1,0],[0,0,1]]")
//Test.assertEquals(idMtrx(4), "[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]]")
//Test.assertEquals(idMtrx(5), "[[1,0,0,0,0],[0,1,0,0,0],[0,0,1,0,0],[0,0,0,1,0],[0,0,0,0,1]]")
//Test.assertEquals(idMtrx(6), "[[1,0,0,0,0,0],[0,1,0,0,0,0],[0,0,1,0,0,0],[0,0,0,1,0,0],[0,0,0,0,1,0],[0,0,0,0,0,1]]")
//Test.assertEquals(idMtrx(7), "[[1,0,0,0,0,0,0],[0,1,0,0,0,0,0],[0,0,1,0,0,0,0],[0,0,0,1,0,0,0],[0,0,0,0,1,0,0],[0,0,0,0,0,1,0],[0,0,0,0,0,0,1]]")
//Test.assertEquals(idMtrx(8), "[[1,0,0,0,0,0,0,0],[0,1,0,0,0,0,0,0],[0,0,1,0,0,0,0,0],[0,0,0,1,0,0,0,0],[0,0,0,0,1,0,0,0],[0,0,0,0,0,1,0,0],[0,0,0,0,0,0,1,0],[0,0,0,0,0,0,0,1]]")
//Test.assertEquals(idMtrx(9), "[[1,0,0,0,0,0,0,0,0],[0,1,0,0,0,0,0,0,0],[0,0,1,0,0,0,0,0,0],[0,0,0,1,0,0,0,0,0],[0,0,0,0,1,0,0,0,0],[0,0,0,0,0,1,0,0,0],[0,0,0,0,0,0,1,0,0],[0,0,0,0,0,0,0,1,0],[0,0,0,0,0,0,0,0,1]]")
//Test.assertEquals(idMtrx(10), "[[1,0,0,0,0,0,0,0,0,0],[0,1,0,0,0,0,0,0,0,0],[0,0,1,0,0,0,0,0,0,0],[0,0,0,1,0,0,0,0,0,0],[0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,1,0,0,0,0],[0,0,0,0,0,0,1,0,0,0],[0,0,0,0,0,0,0,1,0,0],[0,0,0,0,0,0,0,0,1,0],[0,0,0,0,0,0,0,0,0,1]]")
//Test.assertEquals(idMtrx(-1), "[[1]]")
//Test.assertEquals(idMtrx(-2), "[[0,1],[1,0]]")
//Test.assertEquals(idMtrx(-3), "[[0,0,1],[0,1,0],[1,0,0]]")
//Test.assertEquals(idMtrx(-4), "[[0,0,0,1],[0,0,1,0],[0,1,0,0],[1,0,0,0]]")
//Test.assertEquals(idMtrx(-5), "[[0,0,0,0,1],[0,0,0,1,0],[0,0,1,0,0],[0,1,0,0,0],[1,0,0,0,0]]")
//Test.assertEquals(idMtrx(-6), "[[0,0,0,0,0,1],[0,0,0,0,1,0],[0,0,0,1,0,0],[0,0,1,0,0,0],[0,1,0,0,0,0],[1,0,0,0,0,0]]")
//Test.assertEquals(idMtrx(-7), "[[0,0,0,0,0,0,1],[0,0,0,0,0,1,0],[0,0,0,0,1,0,0],[0,0,0,1,0,0,0],[0,0,1,0,0,0,0],[0,1,0,0,0,0,0],[1,0,0,0,0,0,0]]")
//Test.assertEquals(idMtrx(-8), "[[0,0,0,0,0,0,0,1],[0,0,0,0,0,0,1,0],[0,0,0,0,0,1,0,0],[0,0,0,0,1,0,0,0],[0,0,0,1,0,0,0,0],[0,0,1,0,0,0,0,0],[0,1,0,0,0,0,0,0],[1,0,0,0,0,0,0,0]]")
//Test.assertEquals(idMtrx(-9), "[[0,0,0,0,0,0,0,0,1],[0,0,0,0,0,0,0,1,0],[0,0,0,0,0,0,1,0,0],[0,0,0,0,0,1,0,0,0],[0,0,0,0,1,0,0,0,0],[0,0,0,1,0,0,0,0,0],[0,0,1,0,0,0,0,0,0],[0,1,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0]]")
//Test.assertEquals(idMtrx(-10), "[[0,0,0,0,0,0,0,0,0,1],[0,0,0,0,0,0,0,0,1,0],[0,0,0,0,0,0,0,1,0,0],[0,0,0,0,0,0,1,0,0,0],[0,0,0,0,0,1,0,0,0,0],[0,0,0,0,1,0,0,0,0,0],[0,0,0,1,0,0,0,0,0,0],[0,0,1,0,0,0,0,0,0,0],[0,1,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0,0]]")

