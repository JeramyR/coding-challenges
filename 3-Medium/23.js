

//title: The DECIMATOR

//tags: language_fundamentals,strings

//url: https://edabit.com/challenge/qabZCHGmuTak57C7h

//Description:
//Write a DECIMATOR function which takes a string and decimates it (i.e. it removes the last 1/10 of the characters).
//Always round up: if the string has 21 characters, 1/10 of the characters would be 2.1 characters, hence the DECIMATOR removes 3 characters. The DECIMATOR shows no mercy!
//Examples
//DECIMATOR("1234567890") ➞ "123456789"
//// 10 characters, removed 1.
//
//DECIMATOR("1234567890AB") ➞ "1234567890"
//// 12 characters, removed 2.
//
//DECIMATOR("123") ➞ "12"
//// 3 characters, removed 1.
//
//DECIMATOR("123456789012345678901") ➞ "123456789012345678"
//// 21 characters, removed 3.
//Notes
//Make sure to remove characters from the end of the string.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(DECIMATOR("1234567890"), "123456789")
//Test.assertEquals(DECIMATOR("1234567890AB"), "1234567890")
//Test.assertEquals(DECIMATOR("123"), "12")
//Test.assertEquals(DECIMATOR("123456789012345678901"), "123456789012345678")
//Test.assertEquals(DECIMATOR("ABCDEFGHIJKLMNOPQRSTUVWXYZ"), "ABCDEFGHIJKLMNOPQRSTUVW")
//Test.assertEquals(DECIMATOR("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"), "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrst")
//Test.assertEquals(DECIMATOR("A"), "")
//Test.assertEquals(DECIMATOR(""), "")

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Find NaN in an Array

//tags: arrays,numbers

//url: https://edabit.com/challenge/zwPbeSJHoyiRT72h2

//Description:
//Create a function to find NaN in an array of numbers. The return value should be the index where NaN is found. If NaN is not found in the array, then return -1.
//Examples
//findNaN([1, 2, NaN]) ➞ 2
//
//findNaN([NaN, 1, 2, 3, 4]) ➞ 0
//
//findNaN([0, 1, 2, 3, 4]) ➞ -1
//Notes
//NaN will occur in the input array only once.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(findNaN([1, 2, NaN, 3]), 2)
//Test.assertEquals(findNaN([1, 2, 3, NaN, 3, 4, 5, 3]), 3)
//Test.assertEquals(findNaN([1, 2, 3, 4 ,5]), -1)
//Test.assertEquals(findNaN([NaN, 2, 3, 4]), 0)
//Test.assertEquals(findNaN([1, 2, 3]), -1)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Trace That Matrix

//tags: arrays,language_fundamentals,math

//url: https://edabit.com/challenge/humnHvXGXnBnStg5F

//Description:
//Given a square matrix (i.e. same number of rows as columns), its trace is the sum of the entries in the main diagonal (i.e. the diagonal line from the top left to the bottom right).
//As an example, for:
//[
//  [1, 2, 3],
//  [4, 5, 6],
//  [7, 8, 9]
//]
//... the trace is 1 + 5 + 9 = 15.
//Write a function that takes a square matrix and computes its trace.
//Examples
//trace([
//  [1, 4],
//  [4, 1]
//]) ➞ 2
//
//// 1 + 1 = 2
//
//trace([
//  [1, 2, 3],
//  [4, 5, 6],
//  [7, 8, 9]
//]) ➞ 15
//
//// 1 + 5 + 9 = 15
//
//trace([
//  [1, 0, 1, 0],
//  [0, 2, 0, 2],
//  [3, 0, 3, 0],
//  [0, 4, 0, 4]
//]) ➞ 10
//
//// 1 + 2 + 3 + 4 = 10
//Notes
//As in the examples, the size of the matrices will vary (but they will always be square).

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(trace(
//  [[1, 4],
//   [4, 1]]
//), 2)
//​
//Test.assertEquals(trace(
//  [[1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9]]
//), 15)
//​
//Test.assertEquals(trace(
//  [[12345]],
//), 12345)
//​
//Test.assertEquals(trace(
//  [[1, 0, 1, 0],
//   [0, 2, 0, 2],
//   [3, 0, 3, 0],
//   [0, 4, 0, 4]]
//), 10)
//​
//Test.assertEquals(trace(
//  [[0, 1, 0, 1],
//   [2, 0, 2, 0],

