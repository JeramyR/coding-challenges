

//title: Summing a Slice

//tags: arrays,language_fundamentals,numbers

//url: https://edabit.com/challenge/B3FR3P7g8NyTg7t8b

//Description:
//Given an array and an integer n, return the sum of the first n numbers in the array.
//Worked Example
//sliceSum([9, 8, 7, 6], 3) ➞ 24
//// The parameter n is specified as 3.
//// The first 3 numbers in the list are 9, 8 and 7.
//// The sum of these 3 numbers is 24 (9 + 8 + 7).
//// Return the answer.
//Examples
//sliceSum([1, 3, 2], 2) ➞ 4
//
//sliceSum([4, 2, 5, 7], 4) ➞ 18
//
//sliceSum([3, 6, 2], 0) ➞ 0
//Notes
//If n is larger than the length of the array, return the sum of the whole array.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(sliceSum([1, 3, 2], 2), 4)
//Test.assertEquals(sliceSum([4, 2, 5, 7], 4), 18)
//Test.assertEquals(sliceSum([3, 6, 2], 0), 0)
//Test.assertEquals(sliceSum([2, 4], 9), 6)
//Test.assertEquals(sliceSum([-5, 2], 2), -3)
//Test.assertEquals(sliceSum([0, 0, 0, 3, 4], 3), 0)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Count Ones in a 2D Array

//tags: arrays,loops

//url: https://edabit.com/challenge/ve7mQnJsjtFep97fm

//Description:
//Create a function to count the number of 1s in a 2D array.
//Examples
//countOnes([
//  [1, 0],
//  [0, 0]
//]) ➞ 1
//
//countOnes([
//  [1, 1, 1],
//  [0, 0, 1],
//  [1, 1, 1]
//]) ➞ 7
//
//countOnes([
//  [1, 2, 3],
//  [0, 2, 1],
//  [5, 7, 33]
//]) ➞ 2
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(countOnes([
//  [1, 0, 1],
//  [0, 0, 0],
//  [0, 0, 1]
//]), 3)
//​
//Test.assertEquals(countOnes([
//  [1, 1, 1],
//  [0, 0, 1],
//  [1, 1, 1]
//]), 7)
//​
//Test.assertEquals(countOnes([
//  [1, 2, 3],
//  [0, 2, 1],
//  [5, 7, 33]
//]), 2)
//​
//Test.assertEquals(countOnes([
//  [5, 2, 3],
//  [0, 2, 5],
//  [5, 7, 33]
//]), 0)
//​
//Test.assertEquals(countOnes([

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: RegEx: Boundary Assertions I

//tags: formatting,regex,validation

//url: https://edabit.com/challenge/AWENJSwyhcceiKvQX

//Description:
//Assume a program only reads .js or .jsx files. Write a function that accepts a file path and returns true if it can read the file and false if it can't.
//Examples
//isJS("/users/user.jsx") ➞ true
//
//isJS("/users/user.js") ➞ true
//
//isJS("/users/user.ts") ➞ false
//Notes
//Use a RegEx boundary assertion in your function.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(isJS("/users/user.jsx"), true)
//Test.assertEquals(isJS("/users/user.js"), true)
//Test.assertEquals(isJS("/users/user.ts"), false)
//Test.assertEquals(isJS("/users/user.jpg"), false)
//Test.assertEquals(isJS("/users/user.ext"), false)
//Test.assertEquals(isJS("/users/user.php"), false)

