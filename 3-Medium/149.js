

//title: The Bottom of the Matrix

//tags: arrays,language_fundamentals,loops,math

//url: https://edabit.com/challenge/jkkhAZ2C9Zy4SHbtj

//Description:
//This challenge concerns square matrices (same number of rows and columns) as the below example illustrates:
//[
//  [1, 2, 3],
//  [4, 5, 6],
//  [7, 8, 9]
//]
//The entries in the diagonal line from the top left to the bottom right form the main diagonal of the matrix. In this case, 1,5,9 form the main diagonal.
//Write a function that returns the matrix obtained by replacing the entries above the main diagonal with 0s.
//For example, for the matrix above you should return:
//[
//  [1, 0, 0],
//  [4, 5, 0],
//  [7, 8, 9]
//]
//Examples
//lowerTriang([
//  [1, 2, 3],
//  [4, 5, 6],
//  [7, 8, 9]
//]) ➞ [
//  [1, 0, 0],
//  [4, 5, 0],
//  [7, 8, 9]
//]
//
//lowerTriang([
//  [5, 7],
//  [7, 9]
//]) ➞ [
//  [5, 0],
//  [7, 9]
//]
//
//lowerTriang([
//  [1, 8, 8, 1],
//  [2, 7, 7, 2],
//  [3, 6, 6, 3],
//  [4, 5, 5, 4]
//]) ➞ [
//  [1, 0, 0, 0],
//  [2, 7, 0, 0],
//  [3, 6, 6, 0],
//  [4, 5, 5, 4]
//]
//Notes
//As in the examples, the size of the matrices will vary (but they will always be square).
//In Linear Algebra, matrices with 0s above the diagonal are called lower triangular matrices.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(lowerTriang(
//[[1, 2, 3],
// [4, 5, 6],
// [7, 8, 9]]),
//[[1, 0, 0],
// [4, 5, 0],
// [7, 8, 9]])
//​
//Test.assertSimilar(lowerTriang(
//[[5, 7],
// [7, 9]]),
//[[5, 0],
// [7, 9]])
// 
//Test.assertSimilar(lowerTriang(
//[[1, 8, 8, 1],
// [2, 7, 7, 2],
// [3, 6, 6, 3],
// [4, 5, 5, 4]]),
//[[1, 0, 0, 0],
// [2, 7, 0, 0],
// [3, 6, 6, 0],
// [4, 5, 5, 4]])
// 
//Test.assertSimilar(lowerTriang(

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: A Letter`s Best Friend

//tags: loops,regex,strings

//url: https://edabit.com/challenge/pvzbLKvBuvcjmNzCW

//Description:
//Given a string, return if a given letter always appears immediately before another given letter.
//Worked Example
//bestFriend("he headed to the store", "h", "e") ➞ true
//
//// All occurences of "h": ["he", "headed", "the"]
//// All occurences of "h" have an "e" after it.
//// Return true
//Examples
//bestFriend("he headed to the store", "h", "e") ➞ true
//
//bestFriend("i found an ounce with my hound", "o", "u") ➞ true
//
//bestFriend("we found your dynamite", "d", "y") ➞ false
//Notes
//Don't count letters with spaces between them (example #3).
//All sentences will be given in lowercase.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(bestFriend('he headed to the store', 'h', 'e'), true)
//Test.assertEquals(bestFriend('i found an ounce with my hound', 'o', 'u'), true)
//Test.assertEquals(bestFriend('those were their thorns they said', 't', 'h'), true)
//​
//Test.assertEquals(bestFriend('we found your dynamite', 'd', 'y'), false)
//Test.assertEquals(bestFriend('look they took the cookies', 'o', 'o'), false)
//Test.assertEquals(bestFriend('go to edabit and meditate', 'e', 'd'), false)
//​
//// Author: Joshua Señoron

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Digital Decipher

//tags: algorithms,cryptography,logic

//url: https://edabit.com/challenge/tfeccdFSN8Eh2NiCE

//Description:
//In Digital Decipher, decoding is done by the simple subtraction of numbers in the key and the corresponding characters on a given array. You may want to solve this challenge before proceeding further.
//Create a function that takes two arguments; a positive integer and an array of integers and returns a decoded message as string.
//Assign a unique number to each letter of the alphabet.
// a  b  c  d  e  f  g  h  i  j  k  l  m
// 1  2  3  4  5  6  7  8  9  10 11 12 13
// n  o  p  q  r  s  t  u  v  w  x  y  z
// 14 15 16 17 18 19 20 21 22 23 24 25 26
//There are some variations on the rules of encipherment. One version of the cipher rules are outlined below:
//eMessage = [20, 12, 18, 30, 21]
//key = 1939
//
//digitalDecipher(eMessage, key) ➞ "scout"
//Subtract each key digit from eMessage consecutive digits:
//  20 12 18 30 21
//-  1  9  3  9  1
// ---------------
//  19  3 15 21 20
//Write the corresponding number against each character:
// s  c  o  u  t
//19  3 15 21 20
//See the below example for a better understanding:
//eMessage = [14, 10, 22, 29, 6, 27, 19, 18, 6, 12, 8]
//key = 1939
//
//digitalDecipher(eMessage, key) ➞ "masterpiece"
//
//  14 10 22 29  6 27 19 18  6  12 8
//-  1  9  3  9  1  9  3  9  1  9  3
//  --------------------------------
//  13  1 19 20  5 18 16  9  5  3  5
//   m  a  s  t  e  r  p  i  e  c  e
//Examples
//digitalDecipher([20, 12, 18, 30, 21], 1939) ➞ "scout"
//
//digitalDecipher([14, 30, 11, 1, 20, 17, 18, 18], 1990) ➞ "mubashir"
//
//digitalDecipher([6, 4, 1, 3, 9, 20], 100) ➞ "edabit"
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(digitalDecipher([20, 12, 18, 30, 21], 1939), "scout")
//Test.assertEquals(digitalDecipher([14, 10, 22, 29, 6, 27, 19, 18, 6, 12, 8], 1939), "masterpiece")
//Test.assertEquals(digitalDecipher([15, 17, 14, 17, 19, 7, 21, 7, 2, 20, 20], 12),"nomoretears" )
//Test.assertEquals(digitalDecipher([14, 30, 11, 1, 20, 17, 18, 18], 1990), "mubashir")
//Test.assertEquals(digitalDecipher([17, 10, 15, 16, 20, 29, 5, 21], 1947), "pakistan")
//Test.assertEquals(digitalDecipher([17,10, 17, 14, 20, 29, 7, 19, 2, 18, 24, 11, 16, 27, 9, 10], 1965), "pakistanairforce")
//Test.assertEquals(digitalDecipher([6, 4, 1, 3, 9, 20], 100), "edabit")
//​
//// Mubashir

