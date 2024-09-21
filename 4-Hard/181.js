

//title: Sliding Sum

//tags: arrays,language_fundamentals

//url: https://edabit.com/challenge/5hWPHkuDxSYjTzqKT

//Description:
//Create a function that returns the subarrays of n consecutive elements from the original element that sum up to k. The function will have the following form: slidingSum(arr, n, k)
//To illustrate:
//slidingSum([3, 4, 1, 9, 9, 0, 3, 5, 4], 3, 8) ➞ [[3, 4, 1], [0, 3, 5]]
//// Where [3, 4, 1] and [0, 3, 5] are the only subarrays that sum to 8 with length 3.
//Examples
//slidingSum([1, 4, 2, 3, 5, 0], 2, 5) ➞ [[1, 4], [2, 3], [5, 0]]
//
//slidingSum([5, 5, 5, 5, 5], 1, 5) ➞ [[5], [5], [5], [5], [5]]
//
//slidingSum([5, 5, 5, 5, 5], 5, 24) ➞ []
//Notes
//Return an empty array if no subarrays satisfy the (n,k) condition.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(slidingSum([1, 4, 2, 3, 5, 0], 2, 5), [[1, 4], [2, 3], [5, 0]])
//Test.assertSimilar(slidingSum([5, 5, 5, 5, 5], 1, 5), [[5], [5], [5], [5], [5]])
//Test.assertSimilar(slidingSum([5, 5, 5, 5, 5], 5, 24), [])
//Test.assertSimilar(slidingSum([3, 2, 1, 1, 3, 2], 4, 7), [[3, 2, 1, 1], [2, 1, 1, 3], [1, 1, 3, 2]])
//Test.assertSimilar(slidingSum([3, 4, 1, 9, 9, 0, 3, 5, 4], 3, 8), [[3, 4, 1], [0, 3, 5]])

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Left Side, Right Side

//tags: arrays,loops

//url: https://edabit.com/challenge/9DBRRDyxx56tSPbXt

//Description:
//Create two functions:
//Leftside function: Returns count of numbers strictly smaller than n on the left.
//Rightside function: Returns count of numbers strictly smaller than n on the right.
//Examples
//leftSide([5, 2, 1, 4, 8, 7]) ➞ [0, 0, 0, 2, 4, 4]
//
//rightSide([5, 2, 1, 4, 8, 7]) ➞ [3, 1, 0, 0, 1, 0]
//
//leftSide([1, 2, 3, -1]) ➞ [0, 1, 2, 0]
//
//rightSide([1, 2, 3, -1]) ➞ [1, 1, 1, 0]
//Notes
//"Left" and "right" refer to the number at indices less than or greater than n's index, respectively.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(leftSide([5, 2, 1, 4, 8, 7]), [0, 0, 0, 2, 4, 4])
//Test.assertSimilar(leftSide([3, 8, 2, 5, 4]), [0, 1, 0, 2, 2])
//Test.assertSimilar(leftSide([1, 2, 3, 4, 5]), [0, 1, 2, 3, 4])
//Test.assertSimilar(rightSide([5, 2, 1, 4, 8, 7]), [3, 1, 0, 0, 1, 0])
//Test.assertSimilar(rightSide([3, 8, 2, 5, 4]), [1, 3, 0, 1, 0])
//Test.assertSimilar(rightSide([1, 2, 3, 4, 5]), [0, 0, 0, 0, 0])

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Summation of the First n Terms

//tags: loops,math

//url: https://edabit.com/challenge/cMBB43Ps6v4RdDyP4

//Description:
//Create a function that takes an expression exp and an upper limit n as arguments and returns the sum of that expression up to the n'th term (recall sigma from math class).
//Examples
//summation("n", 10) ➞ 55
//
//summation("1/n", 50) ➞ 4.5
//
//summation("n**n", 6) ➞ 50069
//Notes
//Assume the lower limit is n = 1.
//Round your answer to the nearest tenth.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(summation('n', 10), 55)
//Test.assertEquals(summation('1/n', 50), 4.5)
//Test.assertEquals(summation('n**n', 6), 50069)
//Test.assertEquals(summation('2', 190), 380)
//Test.assertEquals(summation('19', 56), 1064)
//Test.assertEquals(summation('-n', 100), -5050)
//Test.assertEquals(summation('(2*n**2 + 5*n)/3', 30), 7078.3)
//Test.assertEquals(summation('n*(n+1)', 30), 9920)
//Test.assertEquals(summation('0', 3000), 0)

