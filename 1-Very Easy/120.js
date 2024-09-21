

//title: Return Only the Integer

//tags: arrays,language_fundamentals,loops,sorting

//url: https://edabit.com/challenge/3xqP79TrHiwnwGizj

//Description:
//Write a function that takes an array of elements and returns only the integers.
//Examples
//returnOnlyInteger([9, 2, "space", "car", "lion", 16]) ➞ [9, 2, 16]
//
//returnOnlyInteger(["hello", 81, "basketball", 123, "fox"]) ➞ [81, 123]
//
//returnOnlyInteger([10, "121", 56, 20, "car", 3, "lion"]) ➞ [10, 56, 20, 3]
//
//returnOnlyInteger(["String",  true,  3.3,  1]) ➞ [1]
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(returnOnlyInteger([9, 2, "space", "car", "lion", 16]), [9, 2, 16])
//Test.assertSimilar(returnOnlyInteger(["hello", 81, "basketball", 123, "fox"]), [81, 123])
//Test.assertSimilar(returnOnlyInteger([10, "121", 56, 20, "car", 3, "lion"]), [10, 56, 20, 3])
//Test.assertSimilar(returnOnlyInteger(["String", true, 3.3, 1]), [1])

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Calculate Determinant of a 2x2 Matrix

//tags: arrays,math

//url: https://edabit.com/challenge/MwLp6s75F6S5wRrEJ

//Description:
//Create a function to calculate the determinant of a 2 * 2 matrix. The determinant of the following matrix is: ad - bc:
//[[a, b], [c, d]]
//Examples
//calcDeterminant([
//  [1, 2],
//  [3, 4]
//]) ➞ -2
//
//calcDeterminant([
//  [5, 3],
//  [3, 1]
//]) ➞ -4
//
//calcDeterminant([
//  [1, 1],
//  [1, 1]
//]) ➞ 0
//Notes
//Matrix will be in 2 * 2 form only.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(calcDeterminant([
//  [1, 2],
//  [3, 4]
//]), -2)
//​
//Test.assertEquals(calcDeterminant([
//  [5, 3],
//  [3, 1]
//]), -4)
//​
//Test.assertEquals(calcDeterminant([
//  [1, 1],
//  [1, 1]
//]), 0)
//​
//Test.assertEquals(calcDeterminant([
//  [1, 1],
//  [1, 0]
//]), -1)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Check if a Number is a Palindrome

//tags: numbers,validation

//url: https://edabit.com/challenge/6dbpFcrW4schC6zDP

//Description:
//Write a function that returns true if a number is a palindrome.
//Examples
//isPalindrome(838) ➞ true
//
//isPalindrome(4433) ➞ false
//
//isPalindrome(443344) ➞ true
//Notes
//A palindrome is a number that remains the same when reversed.
//Bonus: Try solving this without turning the number into a string.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(isPalindrome(838), true)
//Test.assertEquals(isPalindrome(77), true)
//Test.assertEquals(isPalindrome(95159), true)
//Test.assertEquals(isPalindrome(839), false)
//Test.assertEquals(isPalindrome(4234), false)
//Test.assertEquals(isPalindrome(13), false)

