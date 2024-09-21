

//title: Two Distinct Elements

//tags: arrays,conditions,loops

//url: https://edabit.com/challenge/TyX7xfsAPfJZxfaZq

//Description:
//In each input array, every number repeats at least once, except for two. Write a function that returns the two unique numbers.
//Examples
//returnUnique([1, 9, 8, 8, 7, 6, 1, 6]) ➞ [9, 7]
//
//returnUnique([5, 5, 2, 4, 4, 4, 9, 9, 9, 1]) ➞ [2, 1]
//
//returnUnique([9, 5, 6, 8, 7, 7, 1, 1, 1, 1, 1, 9, 8]) ➞ [5, 6]
//Notes
//Keep the same ordering in the output.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(returnUnique([1, 9, 8, 8, 7, 6, 1, 6]), [9, 7])
//Test.assertSimilar(returnUnique([5, 5, 2, 4, 4, 4, 9, 9, 9, 1]), [2, 1])
//Test.assertSimilar(returnUnique([9, 5, 6, 8, 7, 7, 1, 1, 1, 1, 1, 9, 8]), [5, 6])
//Test.assertSimilar(returnUnique([4, 3, 9, 9, 1, 1, 6, 1, 6, 2, 4]), [3, 2])
//Test.assertSimilar(returnUnique([44, 44, 44, 2, 55, 55, 55, 0, 66, 66, 66]), [2, 0])
//Test.assertSimilar(returnUnique([-9, -9, -9, 7, -9, -9, 1]), [7, 1])
//Test.assertSimilar(returnUnique([2, 2, -19, 2, 7, 7, 4, 9, 9, 0, 0, 3, 3, 3]), [-19, 4])

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Is the Input Factorial of an Integer?

//tags: loops,math,recursion,validation

//url: https://edabit.com/challenge/cAHN6sDdk8dSCoS2r

//Description:
//Create a function to check if a given integer is a factorial of integer or not. The return value should be a boolean.
//Examples
//isFactorial(2) ➞ true
//// 2 = 2 * 1 = 2!
//
//isFactorial(27) ➞ false
//
//isFactorial(24) ➞ true
//// 24 = 4 * 3 * 2 * 1 = 4!
//Notes
//Input is a positive integer.
//Alternatively, you can solve this with a recursive approach.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(isFactorial(6), true)
//Test.assertEquals(isFactorial(16), false)
//Test.assertEquals(isFactorial(24), true)
//Test.assertEquals(isFactorial(36), false)
//Test.assertEquals(isFactorial(720), true)
//Test.assertEquals(isFactorial(120), true)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Moving Partition

//tags: arrays,higher_order_functions

//url: https://edabit.com/challenge/MJKYcPsw34sWbcqP8

//Description:
//Create a function to partition an array from left to right.
//Examples
//movingPartition([-1, -1, -1, -1])
//➞ [[[-1], [-1, -1, -1]], [[-1, -1], [-1, -1]], [[-1, -1, -1], [-1]]]
//
//movingPartition([1, 2, 3, 4, 5])
//➞ [[[1], [2, 3, 4, 5]], [[1, 2], [3, 4, 5]], [[1, 2, 3], [4, 5]], [[1, 2, 3, 4], [5]]]
//
//movingPartition([]) ➞ []
//Notes
//With an n input, your output should be an array containing n-1 subarrays. Each subarray should have two elements: the left and the right side of the partition (both should be non-empty, unless the input array is empty).
//An empty array should return an empty array: []

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(movingPartition([1, 2, 3, 4, 5]), [[[1], [2, 3, 4, 5]], [[1, 2], [3, 4, 5]], [[1, 2, 3], [4, 5]], [[1, 2, 3, 4], [5]]])
//Test.assertSimilar(movingPartition([-1, -1, -1, -1]), [[[-1], [-1, -1, -1]], [[-1, -1], [-1, -1]], [[-1, -1, -1], [-1]]])
//Test.assertSimilar(movingPartition([8, 9, 10]), [[[8], [9, 10]], [[8, 9], [10]]])
//Test.assertSimilar(movingPartition([]), [])

